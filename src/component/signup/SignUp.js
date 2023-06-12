import React, { useState } from "react";
import backgroundImg from "../../assets/page-bg.png";
import { useRegisterUserMutation } from "../../services/signUpApi";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("default");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [registerUser] = useRegisterUserMutation();

  const clearTextInput = () => {
    setName("");
    setMobileNumber("");
    setEmail("");
    setSelectedOption("default");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pattern = /^[a-zA-Z\s]+$/;
    const valid = pattern.test(name);
    if (!name) {
      setNameError("Please enter your name");
    } else if (!valid) {
      setNameError("Invalid name. Only characters are allowed.");
    } else if (name.length < 3) {
      setNameError("Name should have at least 3 characters");
    } else {
      setNameError("");
    }

    if (!mobileNumber) {
      setMobileNumberError("Please enter your mobile number");
    } else if (mobileNumber.length !== 10) {
      setMobileNumberError("Mobile number should have 10 digits");
    } else {
      setMobileNumberError("");
    }
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    if (
      name &&
      name.length >= 3 &&
      mobileNumber &&
      mobileNumber.length === 10
    ) {
      const formData = { name, mobileNumber, email };
      console.log(formData)
      const res = await registerUser(formData);
      console.log(res);
      if (res.data.success) {
        // localStorage.setItem('authToken', res.data.authToken);
        clearTextInput();
        navigate('/getotp',{ state: { mobileNumber, email } }); // Navigate to OTP page
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
                  <label className="block capitalize form-label">name</label>
                  <div className="relative ">
                    <input
                      type="text"
                      name="name"
                      className="form-control py-2"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "14px",
                        }}
                      >
                        {nameError}
                      </span>
                    ) : null}
                  </div>
                </div>
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
                <div className="fromGroup">
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
                </div>
               
                <div className="flex justify-between">
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
                        You accept our Terms and Conditions and Privacy Policy
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-dark block w-full text-center"
                  type="button"
                  onClick={(e)=>handleSubmit(e)}
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

export default SignUp;
