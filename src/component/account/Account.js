import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from "../sidebar/Sidebar";
import user from "../../assets/user.png";
import close from "../../assets/close.png";
import edit from "../../assets/edit.png";
import {
  useAddAccountMutation,
  useGetAccountQuery,
  useGetNotificationQuery,
  useGetProfileQuery,
} from "../../services/signUpApi";

const Account = () => {
  const [notification, setNotification] = useState("");
  const [isNotification, setIsNotification] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [isAccountNumberSet, setIsAccountNumberSet] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [branch, setBranch] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [id, setId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [UPIId, setUPIId] = useState("");
  const [name, setName] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const accountNoRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAccountNumberChange = (event) => {
    if (!isAccountNumberSet) {
      setShowAlert(true);
      setIsAccountNumberSet(true);
    } else {
      const value = event.target.value;
      setAccountNumber(value);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Student logout successfully!");
  };

  const { data: studentNotification, isSuccess: studentIsSuccess } =
    useGetNotificationQuery();

  console.log(studentNotification);
  console.log("data", notification);

  useEffect(() => {
    if (studentNotification && studentIsSuccess && studentNotification.data) {
      setNotification(studentNotification.data);
    }
  }, [studentNotification, studentIsSuccess]);
  const handleEditClick = () => {
    setShowAlert(false);
    accountNoRef.current.focus();
  };

  useEffect(() => {
    if (showAlert) {
      accountNoRef.current.blur();
    }
  }, [showAlert]);

  const handleBlur = (event) => {
    const value = event.target.value;
    if (value !== "") {
      setShowAlert(true);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [addAccount] = useAddAccountMutation();
  const { data, isSuccess } = useGetAccountQuery();
  console.log(data);

  useEffect(() => {
    if (isSuccess && data) {
      setAccountName(data.accountName);
      setAccountNumber(data.accountNumber);
      setBranch(data.branch);
      setIFSCCode(data.IFSCCode);
      setUPIId(data.UPIId);
      setSelectedFile(data.UPIQRCode);
    }
  }, [data, isSuccess]);

  const filePath = selectedFile;
  const fileName =
    filePath && typeof filePath === "string"
      ? filePath.substring(filePath.lastIndexOf("\\") + 1)
      : "";

  const { data: userData, isSuccess: userIsSuccess } = useGetProfileQuery();
  useEffect(() => {
    if (userData && userIsSuccess) {
      setName(userData.name);
    }
  }, [userData, userIsSuccess]);

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

    console.log(formData);
    const res = await addAccount(formData);
    if (res.data) {
      setShowAlertModal(true);
      console.log(res);
      clearTextInput();
    }
  };

  return (
    <>
      <Sidebar />
      <div
        className="flex flex-col justify-between min-h-screen"
        style={{ marginLeft: "248px" }}
      >
        <div>
          {/* <!-- BEGIN: Header --> */}
          {/* <!-- BEGIN: Header --> */}
          <div className="z-[9]" id="app_header">
            <div className="app-header z-[999] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700">
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center md:space-x-4 space-x-4 rtl:space-x-reverse vertical-box">
                  <a
                    // href="index.html"
                    className="mobile-logo xl:hidden inline-block"
                  >
                    {/* <img
                      src="assets/images/logo/logo-c.svg"
                      className="black_logo"
                      alt="logo"
                    />
                    <img
                      src="assets/images/logo/logo-c-white.svg"
                      className="white_logo"
                      alt="logo"
                    /> */}
                  </a>
                  <button className="smallDeviceMenuController open-sdiebar-controller hidden xl:hidden md:inline-block">
                    {/* <iconify-icon
                      className="leading-none bg-transparent relative text-xl top-[2px] text-slate-900 dark:text-white"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon> */}
                    {/* <MenuIcon /> */}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 hidden rtl:rotate-180">
                    <iconify-icon icon="ph:arrow-right-bold"></iconify-icon>
                  </button>
                  <button
                    className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 focus:outline-none focus:shadow-none px-1 space-x-3
        rtl:space-x-reverse search-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <SearchIcon />
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
                    <SearchIcon />
                    <span className="xl:inline-block hidden">Search...</span>
                  </button>
                </div>
                {/* <!-- end horizental --> */}

                <div className="main-menu">
                  <ul>
                    <li
                      className="
             menu-item-has-children 
              "
                    >
                      {/* <!--  Single menu --> */}

                      {/* <!-- has dropdown --> */}

                      <a href="javascript:void()">
                        <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                          <span className="icon-box">
                            <iconify-icon icon="heroicons-outline:home">
                              {" "}
                            </iconify-icon>
                          </span>
                          <div className="text-box">Dashboard</div>
                        </div>
                        <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                          <iconify-icon icon="heroicons-outline:chevron-down">
                            {" "}
                          </iconify-icon>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end top menu --> */}
                <div className="nav-tools flex items-center lg:space-x-5 space-x-3 rtl:space-x-reverse leading-0">
                  {/* <!-- BEGIN: Notification Dropdown --> */}
                  {/* <!-- Notifications Dropdown area --> */}
                  <div className="relative md:block hidden">
                    <button
                      className="lg:h-[32px] lg:w-[32px] lg:bg-slate-50 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer
      rounded-full text-[20px] flex flex-col items-center justify-center"
                    >
                      <NotificationsIcon
                        onClick={() => setIsNotification(!isNotification)}
                      />
                      <span
                        className="absolute -right-1 lg:top-0 -top-[6px] h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
        justify-center rounded-full text-white z-[99]"
                      >
                        4
                      </span>
                    </button>
                    {/* <!-- Notifications Dropdown --> */}
                    {isNotification && (
                      <div
                        className="dropdown-menu z-10  bg-white divide-y divide-slate-100 dark:divide-slate-900 shadow w-[335px]
      dark:bg-slate-800 border dark:border-slate-900 !top-[23px] rounded-md absolute"
                        style={{ right: "0" }}
                      >
                        <div className="flex items-center justify-between py-3 px-3">
                          <h3 className="text-sm font-Inter font-medium text-slate-700 dark:text-white">
                            Notifications
                          </h3>
                          <a
                            className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white"
                            href="#"
                          >
                            See All
                          </a>
                        </div>
                        {notification.map((notification) => (
                          <div
                            className="divide-y divide-slate-100 dark:divide-slate-900"
                            role="none"
                            key={notification.id}
                          >
                            <div className="bg-slate-100 dark:bg-slate-700 dark:text-white text-slate-800 block w-full px-4 py-2 text-sm relative">
                              <div className="flex ltr:text-left rtl:text-right">
                                <div className="flex-none ltr:mr-3 rtl:ml-3">
                                  <div className="h-8 w-8 bg-white rounded-full">
                                    <img
                                      src={user}
                                      alt="user"
                                      className="border-transparent block w-full h-full object-cover rounded-full border"
                                    />
                                  </div>
                                </div>
                                &nbsp;&nbsp;
                                <div className="flex-1">
                                  <div className="text-slate-600 text-xs leading-4">
                                    {notification.message}
                                  </div>
                                  <div className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white">
                                    {notification.link}
                                  </div>
                                  <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                                    {notification.postingTime}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* <!-- END: Notification Dropdown --> */}

                  {/* <!-- BEGIN: Profile Dropdown --> */}
                  {/* <!-- Profile DropDown Area --> */}
                  <div className="md:block hidden w-full">
                    <button
                      className="text-slate-800 dark:text-white focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center
      inline-flex items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div
                        className="lg:h-8 lg:w-8 h-7 w-7 rounded-full flex-1 ltr:mr-[10px] rtl:ml-[10px]"
                        style={{ marginRight: 10 }}
                      >
                        <img
                          src={user}
                          alt="user"
                          className="block w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
                        {name}
                      </span>
                      <KeyboardArrowDownIcon onClick={toggleDropdown} />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    {isDropdownOpen && (
                      <div
                        className="dropdown-menu z-10  bg-white divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-700 top-[23px] rounded-md
      overflow-hidden absolute "
                      >
                        <ul className="py-1 text-sm text-slate-800 dark:text-slate-200">
                          <li>
                            <Link
                              to={"/login"}
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                              onClick={handleLogout}
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:login"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <LogoutIcon style={{ fontSize: "medium" }} />{" "}
                              &nbsp;
                              <span className="font-Inter">Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* <!-- END: Header --> */}
                  <button className="smallDeviceMenuController md:hidden block leading-0">
                    <iconify-icon
                      className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon>
                  </button>
                  {/* <!-- end mobile menu --> */}
                </div>
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
                      <SearchIcon />
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
              class="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
              id="content_wrapper"
              style={{ backgroundColor: "#F1F5F9" }}
            >
              <div class="page-content">
                <div id="content_layout">
                  <div class="card xl:col-span-2">
                    <div class="card-body flex flex-col p-6">
                      <header class="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div class="flex-1 flex justify-between">
                          <div class="card-title text-slate-900 dark:text-white">
                            {" "}
                            College/ School/ Institute Account Details
                          </div>
                          <div className="flex">
                          <img src={edit} alt="edit" style={{width:'17px',height:'17px'}} /> &nbsp;
                          <div className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white">
                            Edit
                          </div>
                          </div>
                        </div>
                      </header>
                      <div class="card-text h-full">
                        <div class="grid md:grid-cols-2 gap-6">
                          {accountName && (
                            <div class="input-area">
                              <label htmlFor="name" class="form-label">
                                Name on Account
                              </label>
                              <div className="relative form-control">
                                {accountName}
                              </div>
                            </div>
                          )}

                          {accountNumber && (
                            <div class="input-area">
                              <label
                                htmlFor="account_number"
                                class="form-label"
                              >
                                Account Number
                              </label>
                              <div className="relative form-control">
                                {accountNumber}
                              </div>
                            </div>
                          )}

                          {branch && (
                            <div class="input-area">
                              <label htmlFor="branch" class="form-label">
                                Branch
                              </label>
                              <div className="relative form-control">
                                {branch}
                              </div>
                            </div>
                          )}

                          {IFSCCode && (
                            <div class="input-area">
                              <label htmlFor="ifsc_code" class="form-label">
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
                        <div class="grid md:grid-cols-2 gap-6">
                          {UPIId && (
                            <div class="input-area">
                              <label htmlFor="upi" class="form-label">
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
                              <div className="relative form-control">
                                {fileName}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              class="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
              id="content_wrapper"
              style={{ backgroundColor: "#F1F5F9" }}
            >
              <div class="page-content">
                <div id="content_layout">
                  <div class="card xl:col-span-2">
                    <div class="card-body flex flex-col p-6">
                      <header class="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div class="flex-1">
                          <div class="card-title text-slate-900 dark:text-white">
                            {" "}
                            College/ School/ Institute Account Details
                          </div>
                        </div>
                      </header>
                      <div class="card-text h-full">
                        <form class="space-y-4" id="multipleValidation">
                          <div class="grid md:grid-cols-2 gap-6">
                            <div class="input-area">
                              <label htmlFor="name" class="form-label">
                                Name on Account
                              </label>
                              <div class="relative">
                                <input
                                  id="name"
                                  type="text"
                                  name="name"
                                  class="form-control"
                                  placeholder="Enter your Name"
                                  required="required"
                                  value={accountName}
                                  onChange={(e) =>
                                    setAccountName(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div class="input-area">
                              <label
                                htmlFor="account_number"
                                class="form-label"
                              >
                                Account Number
                              </label>
                              <div class="relative">
                                <input
                                  id="account_number"
                                  type="number"
                                  name="account_number"
                                  class="form-control"
                                  placeholder="Enter Your Account Number"
                                  required="required"
                                  value={accountNumber}
                                  onChange={handleAccountNumberChange}
                                  onBlur={handleBlur}
                                  ref={accountNoRef}
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
                            <div class="input-area">
                              <label htmlFor="branch" class="form-label">
                                Branch
                              </label>
                              <div class="relative">
                                <input
                                  id="branch"
                                  type="text"
                                  name="branch"
                                  class="form-control"
                                  placeholder="Branch"
                                  required="required"
                                  value={branch}
                                  onChange={(e) => setBranch(e.target.value)}
                                />
                              </div>
                            </div>
                            <div class="input-area">
                              <label htmlFor="ifsc_code" class="form-label">
                                IFSC Code
                              </label>
                              <div class="relative">
                                <input
                                  id="ifsc_code"
                                  type="text"
                                  name="ifsc_code"
                                  class="form-control"
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
                          </div>
                          <div class="grid md:grid-cols-2 gap-6">
                            <div class="input-area">
                              <label htmlFor="upi" class="form-label">
                                UPI Id
                              </label>
                              <div class="relative">
                                <input
                                  id="upi"
                                  type="text"
                                  name="upi"
                                  class="form-control"
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

          {showAlertModal && (
            <>
              <div className="alert-modal">
                <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                  <div
                    className="bg-white rounded-md p-6 "
                    style={{
                      width: "500px",
                      height: "150px",
                      borderRadius: "5px",
                      padding: "20px",
                    }}
                  >
                    <img
                      src={close}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "445px",
                        marginTop: "3px",
                        marginBottom: "5px",
                        pointer: "cursor",
                      }}
                      alt="close"
                      onClick={() => setShowAlertModal(false)}
                    />
                    <div className="alert alert-danger light-mode">
                      Congratulations 🎉! Your Account Details have been
                      Successfully Added!
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
