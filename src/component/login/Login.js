import React, { useState } from "react";
import backgroundImg from "../../assets/page-bg.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import {
  useLoginDonarMutation,
  useLoginStudentMutation,
} from "../../services/signUpApi";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUserType } from "../../features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("default");

  const [mobileNumberError, setMobileNumberError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [loginStudent] = useLoginStudentMutation();
  const [loginDonar] = useLoginDonarMutation();

  const clearTextInput = () => {
    setMobileNumber("");
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // useEffect(() => {
  //   // Define the 'otpless' function
  //   window.otpless = (otplessUser) => {
  //    alert(JSON.stringify(otplessUser));
  //   };
  //  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!mobileNumber) {
  //     setMobileNumberError("Please enter your mobile number");
  //   } else if (mobileNumber.length !== 10) {
  //     setMobileNumberError("Mobile number should have 10 digits");
  //   } else {
  //     setMobileNumberError("");
  //   }

  //   if (mobileNumber && mobileNumber.length === 10) {
  //     const formData = { mobileNumber };
  //     console.log(formData);
  //     dispatch(setCurrentUserType(selectedOption));
  //     if (selectedOption === 'student') {
  //       // Make API call for student login
  //       const res = await loginStudent(formData);
  //       console.log(res);
  //       clearTextInput();
  //       navigate('/student/getotplogin',{ state: { mobileNumber } });   // Navigate to getOtp student login page
  //     } else if (selectedOption === 'donar') {
  //       // Make API call for donor login
  //       const res = await loginDonar(formData);
  //       console.log(res);
  //       clearTextInput();
  //       navigate('/donar/getotplogin',{ state: { mobileNumber } });

  //       }
  //     }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNumber) {
      setMobileNumberError("Please enter your mobile number");
    } else if (mobileNumber.length !== 10) {
      setMobileNumberError("Mobile number should have 10 digits");
    } else {
      setMobileNumberError("");
    }

    if (mobileNumber && mobileNumber.length === 10) {
      const formData = { mobileNumber };
      console.log(formData);
      dispatch(setCurrentUserType(selectedOption));
      setIsLoading(true);
      if (selectedOption === "student") {
        try {
          const res = await loginStudent(formData);
          console.log(res);
          clearTextInput();
          if (res && res.data && res.data.success) {
            setMessage("");
            navigate("/student/getotplogin", { state: { mobileNumber } });
          } else if (res && res.error.data && res.error.data.message) {
            setMessage(res.error.data.message);
          } else {
            setMessage("An error occurred");
          }
        } catch (error) {
          console.log(error);
          setMessage(error.data.message);
        } finally {
          setIsLoading(false);
        }
      } else if (selectedOption === "donar") {
        try {
          const res = await loginDonar(formData);
          console.log(res);
          clearTextInput();
          if (res && res.data && res.data.success) {
            setMessage("");
            navigate("/donar/getotplogin", { state: { mobileNumber } });
          } else if (res && res.error.data && res.error.data.message) {
            setMessage(res.error.data.message);
          } else {
            setMessage("An error occurred");
          }
        } catch (error) {
          console.log(error);
          setMessage(error.data.message);
        } finally {
          setIsLoading(false);
        }
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
                  <div className="relative ">
                    <label
                      htmlFor="select"
                      className=" block  capitalize form-label"
                    >
                      i'm a
                    </label>
                    <select
                      id="select"
                      className="form-control"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{ fontSize: "13px" }}
                    >
                      <option
                        value="default"
                        // className="dark:bg-slate-700"
                        disabled
                      >
                        Select Option
                      </option>
                      <option value="donar">Donar</option>
                      <option value="student">Student</option>
                    </select>
                  </div>
                </div>
                <div className="fromGroup">
                  <label className="block capitalize form-label">
                    Mobile Number
                  </label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="number"
                      name="mobilenumber"
                      className="  form-control py-2"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    {mobileNumberError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {mobileNumberError}
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
                      marginTop: "5px",
                    }}
                  >
                    {message}
                  </span>
                )}
                <button
                  className="btn btn-dark block w-full text-center"
                  onClick={(e) => handleSubmit(e)}
                  style={{ fontSize: "14px" }}
                >
                  Sign in
                </button>
              </form>
              {/* <!-- END: Login Form --> */}
              <div className="max-w-[242px] mx-auto mt-8 w-full"></div>
              <div
                className="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center"
                style={{ fontSize: "12px" }}
              >
                Don't have an account? &nbsp;
                <Link
                  to={"/signup"}
                  className="text-slate-900 dark:text-white font-medium hover:underline"
                  style={{ fontSize: "12px" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
