import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Search } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/Sidebar";
import logo from "../../assets/images/logo.png";
import {
 
  useGetAccountQuery,

  useUpdateAccountMutation,
} from "../../services/signUpApi";
import StudentNotification from "../studentNotification/StudentNotification";

const EditAccount = () => {
  const navigate=useNavigate();
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [branch, setBranch] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [id,setId]=useState('');

  const [selectedFile, setSelectedFile] = useState(null);
  const [UPIId, setUPIId] = useState("");

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAccountNumberChange = (event) => {
    const value = event.target.value;
    setAccountNumber(value);
  };

  const { data, isSuccess } = useGetAccountQuery();
  console.log(data);

  useEffect(() => {
    if (isSuccess && data && data.data) {
      setId(data.data.id);
    }
  
  }, [data, isSuccess]);

  const [updateAccount] = useUpdateAccountMutation();

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
    formData.append("accountDetailId", id);
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
    const res = await updateAccount(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      clearTextInput();
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/student/account");
    }
  };

  return (
    <>
      <div className="sidebar-wrapper group w-0  xl:w-[248px] xl:block hidden md:hidden sm:hidden">
        <Sidebar />
      </div>
      <div className="flex flex-col justify-between min-h-screen">
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
                                onChange={(e) => setAccountName(e.target.value)}
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
                              />
                            </div>
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
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditAccount;
