import React, { useState, useEffect, useRef } from "react";
import { Search,Menu} from "react-feather";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import close from "../../assets/close.png";
import customer from "../../assets/customer_1.png";
import logo from "../../assets/images/logo.png";
import Sidebar from "../sidebar/Sidebar";
import StudentNotification from "../studentNotification/StudentNotification";
import {
  useGetWalletHistoryQuery,
  useGetWalletQuery,
  useGetFundRaisedQuery,
  useGetFundRequiredQuery,
} from "../../services/signUpApi";

const Wallet = () => {
  const [moreIcon, setMoreIcon] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const closeIconRef = useRef(null);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [raised, setRaised] = useState("");
  const [required, setRequired] = useState("");
  const [walletData,setWalletData]=useState([]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  function toggleMoreIcon(index) {
    const updatedVisibility = [...moreIcon];
    updatedVisibility[index] = !updatedVisibility[index];
    setMoreIcon(updatedVisibility);
  }

  const { data, isSuccess } = useGetWalletQuery();
  // console.log(data);

  const { data: wallet, isSuccess: walletIsSuccess } =
    useGetWalletHistoryQuery();
  console.log(walletData);


  useEffect(() => {
    if (wallet && walletIsSuccess && wallet.data.length>0) {
     setWalletData(wallet.data)
    }
  }, [wallet, walletIsSuccess]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeIconRef.current &&
        !closeIconRef.current.contains(event.target)
      ) {
        setShowAlert(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { data: fundRaised, isSuccess: fundRaisedIsSuccess } =
    useGetFundRaisedQuery();
  // console.log(fundRaised)

  const { data: fundRequired, isSuccess: fundRequiredIsSuccess } =
    useGetFundRequiredQuery();
  // console.log(fundRequired)

  useEffect(() => {
    if (fundRaised && fundRaisedIsSuccess && fundRaised.data) {
      setRaised(fundRaised.data);
    }
  }, [fundRaised, fundRaisedIsSuccess]);

  useEffect(() => {
    if (fundRequired && fundRequiredIsSuccess && fundRequired.data) {
      setRequired(fundRequired.data);
    }
  }, [fundRequired, fundRequiredIsSuccess]);

  function convertToInteger(input) {
    const numericValue = Number(input);

    if (isNaN(numericValue)) {
      throw new Error("Input is not a valid number.");
    }

    return Math.floor(numericValue);
  }

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Pad single digits with leading zero
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  }

  return (
    <>
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
          <div
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] bg-[#F1F5F9] xl:rtl:mr-[248px]  ml-0 ml-248px"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div className="page-content">
              <div id="content_layout">
                <div>
                  <div className="grid grid-cols-12  mb-5">
                    {/* <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
                      <div className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative">
                        <img
                          src={background}
                          alt="background"
                          style={{ position: "relative", width: "100%" }}
                        />
                        <div
                          className="max-w-[180px]"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "43%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "1",
                            flexDirection: "row",
                            position: "absolute",
                          }}
                          onClick={() => setShowAlert(!showAlert)}
                        >
                          <div className="text-xl font-medium text-slate-900 mb-2" style={{fontSize:'15px'}}>
                            Withdrawal Amount
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
                      <div className="p-4 card">
                        <div className="grid md:grid-cols-4 col-span-1 gap-4  ">
                          {/* <!-- BEGIN: Group Chart2 --> */}

                          <div className="py-[18px] px-4 rounded-[6px] bg-[#FFEDE5] dark:bg-slate-900	 ">
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                              <div className="flex-none">
                                <div id="wline1"></div>
                              </div>

                              <div
                                className="flex-1"
                                ref={closeIconRef}
                                onClick={() => setShowAlert(!showAlert)}
                              >
                                <div
                                  className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium cursor-pointer "
                                  style={{ fontSize: "15px" }}
                                >
                                  Withdrawal Amount
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="py-[18px] px-4 rounded-[6px] bg-[#E5F9FF] dark:bg-slate-900	 ">
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                              <div className="flex-none">
                                <div id="wline1"></div>
                              </div>
                              <div className="flex-1">
                                <div
                                  className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium"
                                  style={{ fontSize: "15px" }}
                                >
                                  Total Fund Raised
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  {convertToInteger(raised)}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="py-[18px] px-4 rounded-[6px] bg-[#FFEDE5] dark:bg-slate-900	 ">
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                              <div className="flex-none">
                                <div id="wline2"></div>
                              </div>
                              <div className="flex-1">
                                <div
                                  className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium"
                                  style={{ fontSize: "15px" }}
                                >
                                  Fund required
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  {convertToInteger(required)}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="py-[18px] px-4 rounded-[6px] bg-[#EAE5FF] dark:bg-slate-900	 ">
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                              <div className="flex-none">
                                <div id="wline3"></div>
                              </div>
                              <div className="flex-1">
                                <div
                                  className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium"
                                  style={{ fontSize: "15px" }}
                                >
                                  Fund withdraw
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  +5.0%
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- END: Group Chart2 --> */}
                        </div>
                      </div>
                    </div>
                    {showAlert && (
                      <>
                        <div className="alert-modal">
                          <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                            <div
                              className="bg-white rounded-md p-6 "
                              style={{ width: "500px", height: "220px" }}
                              onClick={(e) => e.stopPropagation()}
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
                                    width: "20px",
                                    height: "20px",
                                    marginBottom: "5px",
                                    cursor: "pointer",
                                  }}
                                  alt="close"
                                  onClick={() => setShowAlert(false)}
                                />
                              </div>
                              <div className="text-lg font-bold mb-3 text-center">
                                Withdrawal Amount
                              </div>

                              <div className="input-area ">
                                <label htmlFor="amount" className="form-label">
                                  What is the desired withdrawal amount?
                                </label>
                                <div className="relative">
                                  <input
                                    id="amount"
                                    type="number"
                                    name="amount"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                    
                                  />
                                </div>
                                <button
                                  className="btn btn-dark block w-full text-center mt-3"
                                  onClick={() => setShowAlert(false)}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  { walletData && walletData.length>0 ? (
                  <div className=" space-y-5">
                    <div className="card">
                      <header className=" card-header noborder">
                        <h4 className="card-title">Transactions Details</h4>
                      </header>
                      <div className=" px-6 pb-6">
                        <div className="overflow-x-auto -mx-6 dashcode-data-table">
                          <span className=" col-span-8  "></span>
                          <span className="  col-span-4 "></span>
                          <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                              <table
                                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                                id="data-table"
                              >
                                <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                                  <tr>
                                    <th scope="col" className=" table-th " style={{color:'#000'}}>
                                      SNo
                                    </th>

                                   

                                    <th scope="col" className=" table-th "  style={{color:'#000'}}>
                                      Date
                                    </th>

                                    <th scope="col" className=" table-th "  style={{color:'#000'}}>
                                      Amount
                                    </th>

                                    <th scope="col" className=" table-th "  style={{color:'#000'}}>
                                      Status
                                    </th>

                                    <th scope="col" className=" table-th "  style={{color:'#000'}}>
                                      Message
                                    </th>

                                    {/* <th scope="col" className=" table-th ">
                                      Action
                                    </th> */}
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                                {walletData.map((item,index)=>( <tr key={index}>
                                    <td className="table-td">{index+1}</td>

                                  
                                    <td className="table-td ">{formatDate(item.createdAt)}</td>

                                    <td className="table-td ">
                                      <div>₹{item.amount}</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
                              bg-success-500"
                                      >
                                        {item.status}
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>{item.messageForStudent}</div>
                                    </td>
                                    {/* <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                             
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(1)
                                                }
                                              />
                                            
                                            </button>
                                            {moreIcon[1] && (
                                              <ul
                                                className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white  bg-white dark:bg-slate-700
                                  shadow z-[2] float-left overflow-hidden list-none text-left rounded-lg mt-1 m-0 bg-clip-padding border-none"
                                              >
                                                <li>
                                                  <a
                                                    href="#"
                                                    className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                                      dark:hover:text-white"
                                                  >
                                                    View
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    href="#"
                                                    className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                                      dark:hover:text-white"
                                                  >
                                                    Edit
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    href="#"
                                                    className="text-slate-600 dark:text-white block font-Inter font-normal px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600
                                      dark:hover:text-white"
                                                  >
                                                    Delete
                                                  </a>
                                                </li>
                                              </ul>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </td> */}
                                  </tr>))}
                                 
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>):''}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- BEGIN: Footer For Desktop and tab -->
      <footer id="footer">
        <div className="site-footer px-6 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 py-4 ltr:ml-[248px] rtl:mr-[248px]">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
            <div className="text-center ltr:md:text-start rtl:md:text-right text-sm">
              COPYRIGHT ©
              <span id="thisYear"></span>
              DashCode, All rights Reserved
            </div>
            <div className="ltr:md:text-right rtl:md:text-end text-center text-sm">
              Hand-crafted &amp; Made by
              <a href="https://codeshaper.net/" target="_blank" className="text-primary-500 font-semibold">
                Codeshaper
              </a>
            </div>
          </div>
        </div>
      </footer>
      <!-- END: Footer For Desktop and tab -->
      <div className="bg-white bg-no-repeat custom-dropshadow footer-bg dark:bg-slate-700 flex justify-around items-center
    backdrop-filter backdrop-blur-[40px] fixed left-0 bottom-0 w-full z-[9999] bothrefm-0 py-[12px] px-4 md:hidden">
        <a href="chat.html">
          <div>
            <span className="relative cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center mb-1 dark:text-white
          text-slate-900 ">
        <iconify-icon icon="heroicons-outline:mail"></iconify-icon>
        <span className="absolute right-[5px] lg:hrefp-0 -hrefp-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
            justify-center rounded-full text-white z-[99]">
          10
        </span>
            </span>
            <span className="block text-[11px] text-slate-600 dark:text-slate-300">
        Messages
      </span>
          </div>
        </a>
        <a href="profile.html" className="relative bg-white bg-no-repeat backdrop-filter backdrop-blur-[40px] rounded-full footer-bg dark:bg-slate-700
      h-[65px] w-[65px] z-[-1] -mt-[40px] flex justify-center items-center">
          <div className="h-[50px] w-[50px] rounded-full relative left-[0px] hrefp-[0px] custom-dropshadow">
            <img src="assets/images/users/user-1.jpg" alt="" className="w-full h-full rounded-full border-2 border-slate-100">
          </div>
        </a>
        <a href="#">
          <div>
            <span className=" relative cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center mb-1 dark:text-white
          text-slate-900">
        <iconify-icon icon="heroicons-outline:bell"></iconify-icon>
        <span className="absolute right-[17px] lg:hrefp-0 -hrefp-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
            justify-center rounded-full text-white z-[99]">
          2
        </span>
            </span>
            <span className=" block text-[11px] text-slate-600 dark:text-slate-300">
        Notifications
      </span>
          </div>
        </a>
      </div> */}
      </div>
    </>
  );
};

export default Wallet;
