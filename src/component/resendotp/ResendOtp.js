import React, { useState } from "react";
import backgroundImg from "../../assets/page-bg.png";
import { useResendRegisterOtpMutation } from "../../services/signUpApi";
import { Link, useNavigate } from "react-router-dom";

const ResendOtp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const [resendOtp] = useResendRegisterOtpMutation();

  const clearTextInput = () => {
    setEmail("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    const formData = {
      email,
    };
    console.log(formData);
    const res = await resendOtp(formData);
    console.log(res);
    if (res.data.success) {
      // localStorage.setItem('authToken', res.data.authToken);
      clearTextInput();
      navigate("/student/getotp", {
        state: {
          email,
        },
      }); // Navigate to OTP page
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
            <div className="auth-box-3">
              {/* <div className="mobile-logo text-center mb-6 lg:hidden block">
            <a heref="#">
          
              <img src={logo} alt="" className="mb-10 white_logo" />
            </a>
          </div> */}

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
                  <label className="block capitalize form-label">email</label>
                  <div className="relative ">
                    <input
                      type="email"
                      name="email"
                      className="form-control py-2"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "14px",
                        }}
                      >
                        {emailError}
                      </span>
                    ) : null}
                  </div>
                </div>
                {/* <div className="fromGroup">
                  <label className="block capitalize form-label">
                    mobile number
                  </label>
                  <div className="relative ">
                    <input
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
                          fontSize: "14px",
                        }}
                      >
                        {mobileNumberError}
                      </span>
                    ) : null}
                  </div>
                </div> */}
                <button
                  className="btn btn-dark block w-full text-center"
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                >
                  Create An Account
                </button>
              </form>
              {/* <!-- END: Login Form --> */}
              <div className="max-w-[242px] mx-auto mt-8 w-full"></div>
              <div className="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center">
                Already registered? &nbsp;
                <Link
                  to={"/login"}
                  className="text-slate-900 dark:text-white font-medium hover:underline"
                >
                  Sign In
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

export default ResendOtp;
