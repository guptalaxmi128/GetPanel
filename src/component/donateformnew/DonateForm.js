import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import getepayPortal from "../Getepay_pg_react/Getepay_pg_react/index";
import { Config } from "../Getepay_pg_react/Getepay_pg_react/config";
import { Link, useNavigate } from "react-router-dom";
import "../donateform/DonateForm.css";

const DonateForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [amount, setAmount] = useState("");
  const [pan, setPan] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [donationAmountError, setDonationAmountError] = useState("");
  const [panNumberError, setPanNumberError] = useState("");

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currentTime = new Date();
  const date = new Date(currentTime.getTime() + 330 * 60000).toUTCString();
  const transactionDate = `${date.slice(0, 3)} ${date.slice(
    8,
    11
  )} ${date.slice(5, 7)} ${date.slice(17, 25)} IST ${date.slice(12, 16)}`;


  const data = {
    mid: "971288",
    amount: amount,
    merchantTransactionId: "sd12121",
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
    // ru: "http://localhost:5000/api/donar/returnUrl",
    callbackUrl:
      "https://global-education-t.onrender.com/api/donar/callbackUrl",
    currency: "INR",
    paymentMode: "ALL",
    bankId: "",
    txnType: "single",
    productType: "IPG",
    txnNote: "Test Txn",
    vpa: "Getepay.merchant131530@icici",
  };


  const clearTextInput = () => {
    setMobileNumber("");
  };

  return (
    <>
      <div className="overlay">
        <div>
          <div
            className="lg:w-1/2 w-full flex flex-col items-center justify-center"
            style={{ width: "500px" }}
          >
            <div
              className="auth-box-3"
              style={{
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
                //   marginTop:'25px',marginBottom:'25px'
              }}
            >
            <div style={{display:'flex',justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="text-center 2xl:mb-10 mb-5" style={{ flex: 1 }}>
                <h4
                  className="font-medium"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  Donation Form
                </h4>
              </div>
              <button  className='close-btn' onClick={props.toggle} style={{ marginBottom: '55px' }}>X</button>
            
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
                    {donationAmountError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {donationAmountError}
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
                      {panNumberError ? (
                        <span
                          style={{
                            color: "red",
                            marginLeft: 8,
                            fontSize: "12px",
                          }}
                        >
                          {panNumberError}
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
                  onClick={() => getepayPortal(data, Config)}
                >
                  Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateForm;
