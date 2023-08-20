import React, { useState } from "react";
import backgroundImg from "../../assets/page-bg.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import close from "../../assets/close.png";
import { useDispatch } from "react-redux";
import "../donateform/DonateForm.css";

import { Link, useNavigate } from "react-router-dom";
import { usePublicUserReceiptOtpMutation } from "../../services/signUpApi";

const DownloadReceipt = (props) => {
  const { toggle } = props;
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("default");

  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [publicUserReceiptOtp] = usePublicUserReceiptOtpMutation();

  const clearTextInput = () => {
    setMobileNumber("");
    setEmail("");
    setSelectedOption("default");
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

    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    if (
      mobileNumber &&
      mobileNumber.length === 10 &&
      selectedOption === "number"
    ) {
      // Submit mobileNumber to the backend for mobile number option
      setIsLoading(true);
      try {
        const res = await publicUserReceiptOtp({ mobileNumber });
        console.log(res);
        clearTextInput();
        if (res && res.data && res.data.success) {
          setMessage("");
          navigate("/get-public-user", { state: { mobileNumber } });
        } else if (res && res.error.data && res.error.data.message) {
          setMessage(res.error.data.message);
        } else {
          setMessage("An error occurred");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.message);
      }finally {
        setIsLoading(false);
      }

    } else if (email && selectedOption === "email") {
      // Submit email to the backend for email option
      try {
        const res = await publicUserReceiptOtp({ email });
        console.log(res);
        clearTextInput();
        if (res && res.data && res.data.success) {
          setMessage("");
          navigate("/get-public-user", { state: { email } });
        } else if (res && res.error.data && res.error.data.message) {
          setMessage(res.error.data.message);
        } else {
          setMessage("An error occurred");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.message);
      }finally {
        setIsLoading(false);
      }

    }
  };

  return (
    <>
      <div className="overlay">
        {/* <div className="lg-inner-column"> */}
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <div
            className="auth-box-3"
            style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className="text-center 2xl:mb-10" style={{ flex: 1 }}>
                <h4
                  className="font-medium"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  Download Receipt
                </h4>
              </div>
              <div onClick={toggle} >
                <img src={close} alt="close"  style={{ marginBottom: "25px",cursor:'pointer',width:'20px',height:'20px' }} />
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
                    Type
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
                      className="dark:bg-slate-700"
                      disabled
                    >
                      Select Option
                    </option>
                    <option value="email">Email</option>
                    <option value="number">Mobile Number</option>
                  </select>
                </div>
              </div>
              {selectedOption === "email" && (
                <div className="fromGroup">
                  <label className="block capitalize form-label">Email</label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="email"
                      name="email"
                      className="  form-control py-2"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {emailError}
                      </span>
                    ) : null}
                  </div>
                </div>
              )}

              {selectedOption === "number" && (
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
              )}
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
              >
                Get OTP
              </button>
            </form>
            {/* <!-- END: Login Form --> */}
            <div className="max-w-[242px] mx-auto mt-8 w-full"></div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default DownloadReceipt;
