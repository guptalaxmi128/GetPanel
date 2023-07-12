import React, { useState,useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import getepayPortal from "../Getepay_pg_react/Getepay_pg_react/index";
import { Config } from "../Getepay_pg_react/Getepay_pg_react/config";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "../donateform/DonateForm.css";
import Footer from "../home/footer/Footer";
import DownloadReceipt from "../downloadReceipt/DownloadReceipt";

const DonateForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [amount, setAmount] = useState("");
  const [pan, setPan] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [panError, setPanError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [amountError, setAmountError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const currentTime = new Date();
  const date = new Date(currentTime.getTime() + 330 * 60000).toUTCString();
  const transactionDate = `${date.slice(0, 3)} ${date.slice(
    8,
    11
  )} ${date.slice(5, 7)} ${date.slice(17, 25)} IST ${date.slice(12, 16)}`;
  const transactionId = new Date().getTime();

  const data = {
    mid: "971288",
    amount: amount,
    merchantTransactionId: transactionId,
    transactionDate: transactionDate,
    terminalId: "Getepay.merchant131530@icici",
    udf1: name,
    udf2: companyName,
    udf3: mobileNumber,
    udf4: email,
    udf5: address,
    udf6: pan,
    udf7: pincode,
    udf8: "",
    udf9: "",
    udf10: "",

    ru: "https://global-education-t.onrender.com/api/public/returnUrl",
    // ru: "http://localhost:5000/api/public/returnUrl",
    callbackUrl:
      "https://global-education-t.onrender.com/api/public/callbackUrl",
    currency: "INR",
    paymentMode: "ALL",
    bankId: "",
    txnType: "single",
    productType: "IPG",
    txnNote: "Test Txn",
    vpa: "Getepay.merchant131530@icici",
  };

  const validateFields = () => {
    if (!name) {
      setNameError("Please enter your name");
      return false;
    }

    if (!email) {
      setEmailError("Please enter your email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    if (!mobileNumber) {
      setMobileNumberError("Please enter your mobile number");
      return false;
    }

    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError("Please enter a 10-digit mobile number");
      return false;
    }

    if (!address) {
      setAddressError("Please enter your address");
      return false;
    }

    if (!pincode) {
      setPincodeError("Please enter your pincode");
      return false;
    }

    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(pincode)) {
      setPincodeError("Please enter a 6-digit pincode");
      return false;
    }

    if (!amount) {
      setAmountError("Please enter the amount");
      return false;
    }

    if (Number(amount) > 49999 && !pan) {
      setPanError("Please enter your PAN");
      return false;
    }

    setNameError("");
    setEmailError("");
    setMobileNumberError("");
    setAddressError("");
    setPincodeError("");
    setAmountError("");
    setPanError("");

    // setError('');
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      getepayPortal(data, Config);
    }
  };

  return (
    <>
      {/* <div className="overlay"> */}
      <Navbar />
      <div style={{ background: "#e3f9ff" }}>
        <div style={{ display: "flex" }}>
          <div
            className="lg:w-1/2 w-full flex flex-col items-center justify-center"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <div
              className="auth-box-3"
              style={{
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
                //   marginTop:'25px',marginBottom:'25px'
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="text-center 2xl:mb-10 mb-5" style={{ flex: 1 }}>
                  <h4
                    className="font-medium"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    Donation Form
                  </h4>
                </div>
                {/* <button  className='close-btn' onClick={props.toggle} style={{ marginBottom: '55px' }}>X</button> */}
              </div>
              {/* <!-- BEGIN: Login Form --> */}
              <form className="space-y-4">
                <div className="fromGroup">
                  <label className="block capitalize form-label">Name</label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="text"
                      name="name"
                      className="  form-control py-2"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {nameError}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="fromGroup">
                  <label className="block capitalize form-label">
                    Company Name (Optional)
                  </label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="text"
                      name="companyName"
                      className="  form-control py-2"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
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
                <div className="fromGroup">
                  <label className="block capitalize form-label">Address</label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="text"
                      name="address"
                      className="  form-control py-2"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {addressError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {addressError}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="fromGroup">
                  <label className="block capitalize form-label">PinCode</label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="number"
                      name="pincode"
                      className="  form-control py-2"
                      placeholder="PinCode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    {pincodeError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {pincodeError}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="fromGroup">
                  <label className="block capitalize form-label">
                    Donation Amount
                  </label>
                  <div className="relative ">
                    <input
                      style={{ fontSize: "13px" }}
                      type="number"
                      name="donationAmount"
                      className="  form-control py-2"
                      placeholder="Donation Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    {amountError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {amountError}
                      </span>
                    ) : null}
                  </div>
                </div>
                {Number(amount) > 49999 && (
                  <div className="fromGroup">
                    <label className="block capitalize form-label">
                      Pan Number
                      {/* ( If amount is exceeding 49999 ) */}
                    </label>
                    <div className="relative ">
                      <input
                        style={{ fontSize: "13px" }}
                        type="text"
                        name="panNumber"
                        className="  form-control py-2"
                        placeholder="Pan Number"
                        value={pan}
                        onChange={(e) => setPan(e.target.value)}
                      />
                      {panError ? (
                        <span
                          style={{
                            color: "red",
                            marginLeft: 8,
                            fontSize: "12px",
                          }}
                        >
                          {panError}
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

                <button
                  className="btn btn-dark block w-full text-center"
                  type="submit"
                  // onClick={() => getepayPortal(data, Config)}
                  onClick={handleFormSubmit}
                >
                  Donate Now
                </button>
              </form>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="w-full"
          >
            <button
              className="block text-center"
              style={{
                background: "#EC6E46",
                color: "#fff",
                width: "250px",
                height: "50px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={()=>setShowModal(!showModal)}
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && <DownloadReceipt  toggle={toggleModal}  />}
      {/* </div> */}
    </>
  );
};

export default DonateForm;
