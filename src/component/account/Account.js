import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Menu,Search } from 'react-feather';
import Sidebar from "../sidebar/Sidebar";
import close from "../../assets/close.png";
import edit from "../../assets/edit.png";
import logo from "../../assets/images/logo.png";
import { Dialog, DialogContent } from "@mui/material";
import {
  useAddAccountMutation,
  useAddverifyOTPForUpdateAccountMutation,
  useGetAccountQuery,
  useGetOTPForUpdateAccountQuery,
} from "../../services/signUpApi";
import StudentNotification from "../studentNotification/StudentNotification";

const Account = () => {
  const navigate=useNavigate();
  const [accountNumber, setAccountNumber] = useState("");
  const [isAccountNumberSet, setIsAccountNumberSet] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [branch, setBranch] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [id, setId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [UPIId, setUPIId] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);
  const closeIconRef=useRef(null);

  const [showAlert, setShowAlert] = useState(false);
  const accountNoRef = useRef(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [message, setMessage] = useState("");
  const [showRequest, setShowRequest] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const localHost = "http://localhost:5000";
  // const localHost="https://global-education-t.onrender.com"

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAccountNumberChange = (event) => {
    if (!isAccountNumberSet) {
      // setShowAlert(true);
      setIsAccountNumberSet(true);
    } else {
      const value = event.target.value;
      setAccountNumber(value);
    }
  };

  const handleEditClick = () => {
    setShowAlert(false);
    // accountNoRef.current.focus();
  };

  // useEffect(() => {
  //   if (showAlert) {
  //     accountNoRef.current.blur();
  //   }
  // }, [showAlert]);

  // const handleBlur = (event) => {
  //   const value = event.target.value;
  //   if (value !== "") {
  //     setShowAlert(true);
  //   }
  // };

  const [addAccount] = useAddAccountMutation();
  const { data, isSuccess } = useGetAccountQuery();
  console.log(data);

  useEffect(() => {
    if (isSuccess && data && data.data) {
      setAccountName(data.data.accountName);
      setAccountNumber(data.data.accountNumber);
      setBranch(data.data.branch);
      setIFSCCode(data.data.IFSCCode);
      setUPIId(data.data.UPIId);
      setSelectedFile(data.data.UPIQRCode_Name);
      setId(data.data.id);
    }
    const firstProfileImage = data?.data.UPIQRCode_FileName;
    if (firstProfileImage) {
      setSelectedImage(firstProfileImage);
    }
  }, [data, isSuccess]);

  const filePath = selectedFile;
  const fileName =
    filePath && typeof filePath === "string"
      ? filePath.substring(filePath.lastIndexOf("\\") + 1)
      : "";

  const clearTextInput = () => {
    setAccountName("");
    setAccountNumber("");
    setIFSCCode("");
    setBranch("");
    setSelectedFile(null);
    setUPIId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (
      accountName &&
      accountNumber &&
      IFSCCode &&
      branch &&
      UPIId &&
      selectedFile
    ) {
      formData.append("accountName", accountName);
      formData.append("accountNumber", accountNumber);
      formData.append("IFSCCode", IFSCCode);
      formData.append("branch", branch);
      formData.append("UPIId", UPIId);
      formData.append("UPIQRCode", selectedFile);
    } else if (accountName && accountNumber && IFSCCode && branch && UPIId) {
      formData.append("accountName", accountName);
      formData.append("accountNumber", accountNumber);
      formData.append("IFSCCode", IFSCCode);
      formData.append("branch", branch);
      formData.append("UPIId", UPIId);
    } else if (
      accountName &&
      accountNumber &&
      IFSCCode &&
      branch &&
      selectedFile
    ) {
      formData.append("accountName", accountName);
      formData.append("accountNumber", accountNumber);
      formData.append("IFSCCode", IFSCCode);
      formData.append("branch", branch);
      formData.append("UPIQRCode", selectedFile);
    } else if (accountName && accountNumber && IFSCCode && branch) {
      formData.append("accountName", accountName);
      formData.append("accountNumber", accountNumber);
      formData.append("IFSCCode", IFSCCode);
      formData.append("branch", branch);
    } else if (UPIId && selectedFile) {
      formData.append("UPIId", UPIId);
      formData.append("UPIQRCode", selectedFile);
    } else if (UPIId) {
      formData.append("UPIId", UPIId);
    } else if (selectedFile) {
      formData.append("UPIQRCode", selectedFile);
    }
    toast.info('Please recheck your account information as it cannot be changed in the future.');
    console.log(formData);
    const res = await addAccount(formData);
    if (res.data.success) {
      // setShowAlert(true);
      toast.success(res.data.message);
      console.log(res);
      clearTextInput();
    }
  };

  const { data: sendRequest, isSuccess: sendRequestIsSuccess } =
    useGetOTPForUpdateAccountQuery(id);

    const handleRequest = () => {
      if (sendRequestIsSuccess) {
        if (sendRequest.success) {
          // Successful request
          toast.success(sendRequest.message);
          setShowEditModal(false);
        } else {
          // Failed request
          toast.error(sendRequest.message);
        }
      }else {
        toast.error("Request already sent to Global Education Trust!");
      }
    };

  // console.log(message);
  const [addverifyOTPForUpdateAccount] =
    useAddverifyOTPForUpdateAccountMutation();

  const handleEditVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: verifyOtp,
      accountDetailId: id,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateAccount(formData);
    // alert("Otp send successfully!");
    console.log(res);
    if(res.data.success){
      toast.success(res.data.message);
      setVerifyOtp('');
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/student/edit-account');
    }
  
  };

  const handleImageClick = () => {
    setOpenPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeIconRef.current &&
        !closeIconRef.current.contains(event.target)
      ) {
        setShowEditModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      <div className="sidebar-wrapper group w-0  xl:w-[248px] xl:block hidden md:hidden sm:hidden">
        <Sidebar />
      </div>
      <div
        className="flex flex-col justify-between min-h-screen"
        // style={{ marginLeft: "248px" }}
      >
        <div>
          {/* <!-- BEGIN: Header --> */}
          {/* <!-- BEGIN: Header --> */}
          <div className="z-[9]" id="app_header">
            <div className="app-header z-[999] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700 ml-0 ml-248px">
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center md:space-x-4 space-x-4 rtl:space-x-reverse vertical-box">
                  <a href="#" className="mobile-logo xl:hidden inline-block">
                    <img
                      src={logo}
                      className="white_logo"
                      alt="logo"
                      width={50}
                      height={30}
                    />
                  </a>
                  <button className="smallDeviceMenuController open-sdiebar-controller hidden xl:hidden md:inline-block">
                    <Menu onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
                    <Menu onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button
                    className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 focus:outline-none focus:shadow-none px-1 space-x-3
        rtl:space-x-reverse search-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <Search />
                    <span className="xl:inline-block hidden">Search...</span>
                  </button>
                </div>
                {/* <!-- end vertcial --> */}
                <div className="items-center space-x-4 rtl:space-x-reverse horizental-box">
                  <a href="index.html" className="leading-0">
                    <span className="xl:inline-block hidden">
                      <img
                        src="assets/images/logo/logo.svg"
                        className="black_logo "
                        alt="logo"
                      />
                      <img
                        src="assets/images/logo/logo-white.svg"
                        className="white_logo"
                        alt="logo"
                      />
                    </span>
                    <span className="xl:hidden inline-block">
                      <img
                        src="assets/images/logo/logo-c.svg"
                        className="black_logo "
                        alt="logo"
                      />
                      <img
                        src="assets/images/logo/logo-c-white.svg"
                        className="white_logo "
                        alt="logo"
                      />
                    </span>
                  </a>
                  <button className="smallDeviceMenuController open-sdiebar-controller hidden md:inline-block xl:hidden">
                    <iconify-icon
                      className="leading-none bg-transparent relative text-xl top-[2px] text-slate-900 dark:text-white"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon>
                  </button>
                  <button
                    className="items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 focus:outline-none focus:shadow-none px-1 space-x-3
        rtl:space-x-reverse search-modal inline-flex xl:hidden"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <Search />
                    <span className="xl:inline-block hidden">Search...</span>
                  </button>
                </div>
                {/* <!-- end horizental --> */}

                {/* <!-- end top menu --> */}
                <StudentNotification />
                {/* <!-- end nav tools --> */}
              </div>
            </div>
          </div>

          {/* <!-- BEGIN: Search Modal --> */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto inset-0 bg-slate-900/40 backdrop-filter backdrop-blur-sm backdrop-brightness-10"
            id="searchModal"
            tabindex="-1"
            aria-labelledby="searchModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog relative w-auto pointer-events-none top-1/4">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-900 bg-clip-padding rounded-md outline-none text-current">
                <form>
                  <div className="relative">
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-full text-xl dark:text-slate-300 flex items-center justify-center">
                      <Search />
                    </button>
                    <input
                      type="text"
                      className="form-control !py-[14px] !pl-10"
                      placeholder="Search"
                      autofocus
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- END: Search Modal --> */}
          {/* <!-- END: Header --> */}
          {/* <!-- END: Header --> */}

          {data ? (
            <div
              className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] ml-0 ml-248px"
              id="content_wrapper"
              style={{ backgroundColor: "#F1F5F9" }}
            >
              <div className="page-content">
                <div id="content_layout">
                  <div className="card xl:col-span-2">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-3 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
                        <div className="flex-1 flex justify-between">
                          <div className="card-title text-slate-900 dark:text-white">
                            {" "}
                            College/ School/ Institute Account Details
                          </div>
                          <div className="flex">
                            <img
                              src={edit}
                              alt="edit"
                              style={{ width: "15px", height: "15px" }}
                            />{" "}
                            &nbsp;
                            <div
                              className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                              // ref={closeIconRef}
                              onClick={() => setShowEditModal(!showEditModal)}
                             
                            >
                              Edit
                            </div>
                          </div>
                        </div>
                      </header>

                      {/* {message && showRequest && (
                        <div className="alert-modal">
                          <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                            <div
                              className="bg-white rounded-md p-6 "
                              style={{
                                width: "500px",
                                height: "130px",
                                borderRadius: "5px",
                                padding: "20px",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <img
                                  src={close}
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                    marginBottom: "10px",
                                    cursor: "pointer",
                                  }}
                                  alt="close"
                                  onClick={() => setShowRequest(false)}
                                />
                              </div>
                              <div
                                className="alert alert-danger light-mode"
                                style={{ fontSize: "12px" }}
                              >
                                {message}
                              </div>
                            </div>
                          </div>
                        </div>
                      )} */}
                      {showEditModal && (
                        <>
                          <div className="alert-modal">
                            <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                              <div
                                className="bg-white rounded-md p-6 "
                                style={{ width: "auto", height: "auto" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div
                                    className="text-lg font-bold mb-3 text-center"
                                    style={{ flex: 1 }}
                                  >
                                    Update Request For Account Details
                                  </div>
                                  <img
                                    src={close}
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      cursor: "pointer",
                                      marginBottom: "20px",
                                    }}
                                    alt="close"
                                    onClick={() => setShowEditModal(false)}
                                  />
                                </div>
                                {/* <div className="grid md:grid-cols-2 gap-6 m-auto" > */}
                                <div className="input-area ">
                                  <label
                                    htmlFor="verifyOtp"
                                    className="form-label"
                                  >
                                    Enter OTP
                                  </label>
                                  <div className="relative">
                                    <input
                                      id="verifyOtp"
                                      type="number"
                                      name="verifyOtp"
                                      className="form-control"
                                      placeholder="Enter OTP"
                                      value={verifyOtp}
                                      onChange={(e) =>
                                        setVerifyOtp(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div
                                    className="text-slate-600 text-xs leading-4"
                                    style={{ fontSize: "10px", margin: "8px" }}
                                  >
                                    {" "}
                                    Don't have OTP.{" "}
                                    <span
                                      onClick={handleRequest}
                                      style={{
                                        color: "blue",
                                        cursor: "pointer",
                                      }}
                                    >
                                      Click here
                                    </span>{" "}
                                    to send a request to the admin to edit your
                                    account details.
                                  </div>

                                  <button
                                    className="btn btn-dark block w-full text-center mt-3"
                                    onClick={handleEditVerifyOtp}
                                  >
                                    Submit
                                  </button>
                                </div>

                                {/* </div> */}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="card-text h-full layout-container">
                        <div className="grid md:grid-cols-2 gap-6">
                          {accountName && (
                            <div className="input-area">
                              <label htmlFor="name" className="form-label">
                                Name on Account
                              </label>
                              <div className="relative form-control">
                                {accountName}
                              </div>
                            </div>
                          )}

                          {accountNumber && (
                            <div className="input-area">
                              <label
                                htmlFor="account_number"
                                className="form-label"
                              >
                                Account Number
                              </label>
                              <div className="relative form-control">
                                {accountNumber}
                              </div>
                            </div>
                          )}

                          {branch && (
                            <div className="input-area">
                              <label htmlFor="branch" className="form-label">
                                Branch
                              </label>
                              <div className="relative form-control">
                                {branch}
                              </div>
                            </div>
                          )}

                          {IFSCCode && (
                            <div className="input-area">
                              <label htmlFor="ifsc_code" className="form-label">
                                IFSC Code
                              </label>
                              <div className="relative form-control">
                                {IFSCCode}
                              </div>
                            </div>
                          )}
                        </div>
                        {/* <div
                          style={{
                            marginTop: "30px",
                            flexDirection: "row",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <hr
                            style={{
                              width: "50%",
                              height: "1px",
                              backgroundColor: "#f1f5f9",
                              border: "none",
                              marginTop: "10px",
                            }}
                          />
                          <p>OR</p>
                          <hr
                            style={{
                              width: "50%",
                              height: "1px",
                              backgroundColor: "#f1f5f9",
                              border: "none",
                              marginTop: "10px",
                            }}
                          />
                        </div> */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {UPIId && (
                            <div className="input-area">
                              <label htmlFor="upi" className="form-label">
                                UPI Id
                              </label>
                              <div className="relative form-control">
                                {UPIId}
                              </div>
                            </div>
                          )}

                          {selectedFile && (
                            <div className="input-area relative">
                              <label htmlFor="fileInput" className="form-label">
                                QR Code
                              </label>
                              <div
                                className="relative form-control cursor-pointer"
                                onClick={handleImageClick}
                              >
                                {fileName}
                              </div>
                            </div>
                          )}

                          <Dialog
                            open={openPopup}
                            onClose={() => setOpenPopup(false)}
                          >
                            <DialogContent>
                              <img
                                src={`${localHost}/studentFile/${selectedImage}`}
                                alt="document"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] ml-0 ml-248px"
              id="content_wrapper"
              style={{ backgroundColor: "#F1F5F9" }}
            >
              <div className="page-content">
                <div id="content_layout">
                  <div className="card xl:col-span-2">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-3 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
                        <div className="flex-1">
                          <div
                            className="card-title text-slate-900 dark:text-white"
                            style={{ fontSize: "18px" }}
                          >
                            {" "}
                            College/ School/ Institute Account Details
                          </div>
                        </div>
                      </header>
                      <div className="card-text h-full">
                        <form className="space-y-4" id="multipleValidation">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="input-area">
                              <label htmlFor="name" className="form-label">
                                Name on Account
                              </label>
                              <div className="relative">
                                <input
                                  style={{ fontSize: "12px" }}
                                  id="name"
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Enter your Name"
                                  required="required"
                                  value={accountName}
                                  onChange={(e) =>
                                    setAccountName(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="account_number"
                                className="form-label"
                              >
                                Account Number
                              </label>
                              <div className="relative">
                                <input
                                  style={{ fontSize: "12px" }}
                                  id="account_number"
                                  type="number"
                                  name="account_number"
                                  className="form-control"
                                  placeholder="Enter Your Account Number"
                                  required="required"
                                  value={accountNumber}
                                  onChange={handleAccountNumberChange}
                                  // onBlur={handleBlur}
                                  // ref={accountNoRef}
                                />
                              </div>
                              {showAlert && (
                                <div className="alert-modal">
                                  <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                                    <div className="bg-white rounded-md p-6">
                                      <div className="text-lg font-bold mb-3">
                                        Alert
                                      </div>
                                      <div className="alert alert-danger light-mode">
                                        Please recheck your account information
                                        as it cannot be changed in future.
                                      </div>
                                      <div className="flex justify-end mt-6">
                                        <button
                                          onClick={handleEditClick}
                                          className="mr-3"
                                        >
                                          Edit
                                        </button>
                                        <button
                                          onClick={() => setShowAlert(false)}
                                        >
                                          OK
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="input-area">
                              <label htmlFor="branch" className="form-label">
                                Branch
                              </label>
                              <div className="relative">
                                <input
                                  style={{ fontSize: "12px" }}
                                  id="branch"
                                  type="text"
                                  name="branch"
                                  className="form-control"
                                  placeholder="Branch"
                                  required="required"
                                  value={branch}
                                  onChange={(e) => setBranch(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="input-area">
                              <label htmlFor="ifsc_code" className="form-label">
                                IFSC Code
                              </label>
                              <div className="relative">
                                <input
                                  style={{ fontSize: "12px" }}
                                  id="ifsc_code"
                                  type="text"
                                  name="ifsc_code"
                                  className="form-control"
                                  placeholder="IFSCCode"
                                  required="required"
                                  value={IFSCCode}
                                  onChange={(e) => setIFSCCode(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              marginTop: "30px",
                              flexDirection: "row",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <hr
                              style={{
                                width: "50%",
                                height: "1px",
                                backgroundColor: "gray",
                                border: "none",
                                // marginTop: "10px",
                              }}
                            />
                            <p style={{ fontSize: "12px", marginTop: "3px" }}>
                              OR
                            </p>
                            <hr
                              style={{
                                width: "50%",
                                height: "1px",
                                backgroundColor: "gray",
                                border: "none",
                                marginTop: "10px",
                              }}
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="input-area">
                              <label htmlFor="upi" className="form-label">
                                UPI Id
                              </label>
                              <div className="relative">
                                <input
                                  style={{ fontSize: "12px" }}
                                  id="upi"
                                  type="text"
                                  name="upi"
                                  className="form-control"
                                  placeholder="Enter UPI Id"
                                  required="required"
                                  value={UPIId}
                                  onChange={(e) => setUPIId(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label htmlFor="fileInput" className="form-label">
                                QR Code
                              </label>
                              <input
                                style={{ fontSize: "12px" }}
                                type="file"
                                id="fileInput"
                                className="form-control"
                                accept="image/*"
                                onChange={handleFileChange}
                                // accept=".pdf,.doc,.docx"
                              />
                            </div>
                          </div>
                          <button
                            className="btn inline-flex justify-center btn-dark"
                            type="button"
                            onClick={(e) => handleSubmit(e)}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Account;
