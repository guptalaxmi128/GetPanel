import React, { useState } from "react";
import backgroundImg from "../../../assets/page-bg.png";
import { useLocation, useNavigate ,Link } from "react-router-dom";
import { useVerifyDonarRegisterOtpMutation } from "../../../services/signUpApi";


const GetOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mobileNumber, email } = location.state || {};
  console.log("Get Otp Page", email);
  console.log("Get Otp mobileNumber", mobileNumber);
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileNumberOtp, setMobileNumberOtp] = useState("");

  const [otpError, setOtpError] = useState("");
  const [emailOtpError, setEmailOtpError] = useState("");

const [verifyDonarRegisterOtp]=useVerifyDonarRegisterOtpMutation();

  const clearTextInput = () => {
    setEmailOtp("");
    setMobileNumberOtp("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mobileNumberOtp) {
      setOtpError("Please enter mobile number otp");
    } else if (mobileNumberOtp.length !== 6) {
      setOtpError("Mobile number otp should have 6 digits");
    } else {
      setOtpError("");
    }
    if (!emailOtp) {
      setEmailOtpError("Email otp is required");
    } else if (emailOtp.length !== 6) {
      setEmailOtpError("Email otp should have 6 digits");
    } else {
      setEmailOtpError("");
    }
    if (
      mobileNumberOtp &&
      mobileNumberOtp.length === 6 &&
      emailOtp &&
      emailOtp.length === 6
    ) {
      const formData = {
        email,
        mobileNumber,
        emailOTP: emailOtp,
        mobileOTP: mobileNumberOtp,
      };
      console.log(formData);
      const res = await verifyDonarRegisterOtp(formData);
      console.log(res);
      if (res.data.success) {
        localStorage.setItem("authToken", res.data.authToken);
        console.log(localStorage);
        clearTextInput();
        navigate("/donar/home"); // Navigate to home page
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
                <h4 className="font-medium">Sign Up</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Sign up to your account to start using GET
                </div>
              </div>
              {/* <!-- BEGIN: Login Form --> */}
              <form
                className="space-y-4"
                // action="https://dashcode-html.codeshaper.tech/index.html"
              >
                <div className="fromGroup">
                  <label className="block capitalize form-label">
                    email OTP
                  </label>
                  <div className="relative ">
                    <input
                      type="number"
                      name="emailotp"
                      className="form-control py-2"
                      placeholder="Enter Email OTP"
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value)}
                    />
                    {emailOtpError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "14px",
                        }}
                      >
                        {emailOtpError}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="fromGroup">
                  <label className="block capitalize form-label">
                    mobile number OTP
                  </label>
                  <div className="relative ">
                    <input
                      type="number"
                      name="mobilenumberotp"
                      className="  form-control py-2"
                      placeholder="Mobile Number OTP"
                      value={mobileNumberOtp}
                      onChange={(e) => setMobileNumberOtp(e.target.value)}
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
                <Link to={"/donar/resend-register-otp"}>
                  <span style={{fontSize:'12px'}}>
                    Resend Otp
                  </span>
                </Link>
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

export default GetOtp;
