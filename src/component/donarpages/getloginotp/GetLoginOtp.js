import React, { useState } from "react";
import backgroundImg from "../../../assets/page-bg.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { useVerifyDonarLoginOtpMutation } from "../../../services/signUpApi";

const GetOtpLogin = () => {
  const location = useLocation();
  const { mobileNumber } = location.state || {};

  const navigate = useNavigate();
  console.log(mobileNumber);
  const [otp, setOtp] = useState("");

  const [otpError, setOtpError] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  const [message,setMessage] =useState(false);

  const [verifyDonarLoginOtp] = useVerifyDonarLoginOtpMutation();

  const clearTextInput = () => {
    setOtp("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setOtpError("Otp is required");
    } else if (otp.length !== 6) {
      setOtpError("Otp should have 6 digits");
    } else {
      setOtpError("");
    }
    if (mobileNumber && mobileNumber.length === 10 && otp && otp.length === 6) {
      const formData = { mobileNumber, mobileOTP: otp };
      console.log(formData);
      setIsLoading(true);
      try{
      const res = await verifyDonarLoginOtp(formData);
      console.log(res);
      if (res && res.data && res.data.success) {
        localStorage.setItem("authToken", res.data.authToken);
        console.log(localStorage);
        clearTextInput();
        navigate("/donar/home"); // Navigate to home page
      }else if (res && res.error.data && res.error.data.message) {
        setMessage(res.error.data.message); 
      } else {
        setMessage("An error occurred"); 
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
    }
  };
  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-center"
        style={{ position: "relative" }}
      >
        <img
          src={backgroundImg}
          alt="backgroundImg"
          style={{ height: "100vh", width: "100vw" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {/* <div className="lg-inner-column"> */}
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
            <div
              className="auth-box-3"
              style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
            >
              <div className="text-center 2xl:mb-10 mb-5">
                <h4
                  className="font-medium"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  Sign In
                </h4>
                <div
                  className="text-slate-500 dark:text-slate-400 text-base"
                  style={{ fontSize: "14px" }}
                >
                  Sign in to your account to start using GET
                </div>
              </div>
              {/* <!-- BEGIN: Login Form --> */}
              <form className="space-y-4">
                <div className="fromGroup">
                  <label className="block capitalize form-label">
                    mobile number OTP
                  </label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="number"
                      name="mobilenumberotp"
                      className="  form-control py-2"
                      placeholder="Mobile Number OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    {otpError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "14px",
                        }}
                      >
                        {otpError}
                      </span>
                    ) : null}
                  </div>
                </div>
                {isLoading && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      zIndex: 9999,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                {message && (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 6,
                          fontSize: "12px",
                          marginTop:'5px'
                        }}
                      >
                        {message}
                      </span>
                    )}

                <button
                  className="btn btn-dark block w-full text-center"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </form>
              {/* <!-- END: Login Form --> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default GetOtpLogin;
