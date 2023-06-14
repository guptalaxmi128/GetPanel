import React, { useState } from "react";
import backgroundImg from "../../assets/page-bg.png";
import { useDispatch } from 'react-redux';
import { useLoginDonarMutation, useLoginStudentMutation } from "../../services/signUpApi";
import { Link ,useNavigate} from "react-router-dom";
import { setCurrentUserType } from '../../features/userSlice';

const Login = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("default");

  const [mobileNumberError, setMobileNumberError] = useState("");

  const [loginStudent] = useLoginStudentMutation();
  const [loginDonar] = useLoginDonarMutation();

  const clearTextInput = () => {
    setMobileNumber("");
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

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
      if (selectedOption === 'student') {
        // Make API call for student login
        const res = await loginStudent(formData);
        console.log(res);
        clearTextInput();
        navigate('/student/getotplogin',{ state: { mobileNumber } });   // Navigate to getOtp student login page
      } else if (selectedOption === 'donar') {
        // Make API call for donor login
        const res = await loginDonar(formData);
        console.log(res);
        clearTextInput();
        navigate('/donar/getotplogin',{ state: { mobileNumber } }); 
        
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
              {/* <div className="mobile-logo text-center mb-6 lg:hidden block">
            <a heref="#">
          
              <img src={logo} alt="" className="mb-10 white_logo" />
            </a>
          </div> */}

              <div className="text-center 2xl:mb-10 mb-5">
                <h4 className="font-medium">Sign In</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Sign in to your account to start using GET
                </div>
              </div>
              {/* <!-- BEGIN: Login Form --> */}
              <form
                className="space-y-4"
                // action="https://dashcode-html.codeshaper.tech/index.html"
              >
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
                    >
                      <option
                        value="default"
                        className="dark:bg-slate-700"
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
                </div>
                {/* <div className="flex justify-between">
                  <div className="checkbox-area">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        name="checkbox"
                      />
                      <span className="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                        <img
                          src="assets/images/icon/ck-white.svg"
                          alt=""
                          className="h-[10px] w-[10px] block m-auto opacity-0"
                        />
                      </span>{" "}
                      &nbsp;
                      <span className="text-slate-500 dark:text-slate-400 text-sm leading-6">
                        Keep me signed in
                      </span>
                    </label>
                  </div>
                  <a
                    className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
                    // href="forget-password-one.html"
                  >
                    Forgot Password?
                  </a>
                </div> */}
                <button
                  className="btn btn-dark block w-full text-center"
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign in
                </button>
              </form>
              {/* <!-- END: Login Form --> */}
              <div className="max-w-[242px] mx-auto mt-8 w-full"></div>
              <div className="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center">
                Don't have an account? &nbsp;
                <Link
                  to={"/"}
                  className="text-slate-900 dark:text-white font-medium hover:underline"
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
