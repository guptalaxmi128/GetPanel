import React, { useState, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import getepayPortal from "../Getepay_pg_react/Getepay_pg_react/index";
import { Config } from "../Getepay_pg_react/Getepay_pg_react/config";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";
import "../donateform/DonateForm.css";
import DownloadReceipt from "../downloadReceipt/DownloadReceipt";
import { usePublicDonationDetailsMutation } from "../../services/signUpApi";

const Donate = () => {
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
  const [profession, setProfession] = useState("default");
  const [selectedValue, setSelectedValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSelectChange = (e) => {
    setProfession(e.target.value);
  };

  const currentTime = new Date();
  const date = new Date(currentTime.getTime() + 330 * 60000).toUTCString();
  const transactionDate = `${date.slice(0, 3)} ${date.slice(
    8,
    11
  )} ${date.slice(5, 7)} ${date.slice(17, 25)} IST ${date.slice(12, 16)}`;
  const transactionId = new Date().getTime();

  const data = {
    mid: "971288",
    // mid: 108,
    amount: amount,
    merchantTransactionId: transactionId,
    transactionDate: transactionDate,
    terminalId: "Getepay.merchant131530@icici", 
    // terminalId: "Getepay.merchant61062@icici",
    udf1: name,
    udf2: companyName,
    udf3: mobileNumber,
    udf4: email,
    udf5: address,
    udf6: pan,
    udf7: pincode,
    udf8: profession,
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
    // vpa: "Getepay.merchant61062@icici",
  };

  const [publicDonationDetails] = usePublicDonationDetailsMutation();

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

    if (profession === "default") {
      setSelectedValue("Please select a payment type.");
      return;
    }

    setNameError("");
    setEmailError("");
    setMobileNumberError("");
    setAddressError("");
    setPincodeError("");
    setAmountError("");
    setPanError("");
    setSelectedValue("");

    // setError('');
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // if(e){
    //   e.preventDefault();
    // }

    if (validateFields()) {
      const donationData = {
        amount,
        merchantTransactionId:transactionId,
        mobileNumber,
        email,
        panNumber: pan,
        pinCode: pincode,
        name,
        companyName,
        address,
        profession,
      };
      const res = await publicDonationDetails(donationData);
      console.log(res);

      getepayPortal(data, Config);
    }
  };
  return (
    <>
      <Navbar />
      <div className="wpo-donation-page-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="wpo-donate-header">
                <h2>Make a Donation</h2>
              </div>
              <div id="Donations" className="tab-pane">
                <form>
                  <div className="wpo-donations-amount">
                    <h2>Your Donation</h2>
                    <input
                      className="form-control"
                      placeholder="Enter Donation Amount"
                      type="number"
                      name="donationAmount"
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
                    {Number(amount) > 49999 && (
                      <>
                        <input
                          type="text"
                          name="panNumber"
                          className="form-control"
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
                      </>
                    )}

                    <select
                      id="select"
                      className="form-control"
                      value={profession}
                      onChange={handleSelectChange}
                      style={{ fontSize: "13px" }}
                    >
                      <option
                        value="default"
                        // className="dark:bg-slate-700"
                        disabled
                      >
                        Select Payment Type
                      </option>
                      <option value="donar">Donar</option>
                      <option value="student">Student</option>
                    </select>
                    {selectedValue ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "12px",
                        }}
                      >
                        {selectedValue}
                      </span>
                    ) : null}
                  </div>
                  <div className="wpo-donations-details">
                    <h2>Details</h2>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="fname"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        {nameError ? (
                          <p
                            style={{
                              color: "red",
                              marginLeft: 8,
                              fontSize: "12px",
                              marginTop: "0px",
                            }}
                          >
                            {nameError}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          //   id="name"
                          placeholder="Company Name"
                          name="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
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
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          className="form-control"
                          placeholder="Mobile No"
                          type="number"
                          name="mobilenumber"
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
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Adress"
                          name="address"
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
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                        <input
                          className="form-control"
                          placeholder="Pin code"
                          type="number"
                          name="pincode"
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

                  <div className="submit-area">
                    <button
                      type="submit"
                      className="theme-btn submit-btn"
                      onClick={handleFormSubmit}
                    >
                      {/* Donate Now */}
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <button
                  className="block text-center"
                  style={{
                    background: "#ea5225",
                    color: "#fff",
                    width: "180px",
                    height: "50px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  onClick={() => setShowModal(!showModal)}
                >
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && <DownloadReceipt toggle={toggleModal} />}
    </>
  );
};

export default Donate;
