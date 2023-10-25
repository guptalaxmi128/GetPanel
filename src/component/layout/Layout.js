import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ToastContainer, toast } from "react-toastify";
import { FaStar, FaBookmark, FaFileAlt, FaUserFriends } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/images/logo.png";
import Sidebar from "../sidebar/Sidebar";
import { Link, NavLink } from "react-router-dom";
import { useGetFundRaisedQuery, useGetFundRequiredQuery, useGetProfileQuery } from "../../services/signUpApi";
import StudentNotification from "../studentNotification/StudentNotification";
import { IoIosArrowForward } from "react-icons/io";
import user from "../../assets/user.png";
import course1 from "../../assets/images/course/classic-lms-01.jpg";
import course2 from "../../assets/images/course/classic-lms-02.jpg";
import course3 from "../../assets/images/course/classic-lms-03.jpg";

const Layout = () => {
  const [name, setName] = useState("");
  const [UID, setUID] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [raised,setRaised]=useState('');
  const [required,setRequired]=useState('');
 
  const { data, isSuccess } = useGetProfileQuery();


  



  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const fields = [
    { name: "Name", weight: 10 },
    { name: "Email", weight: 10 },
    { name: "Phone", weight: 10 },
    { name: "Address", weight: 15 },
    { name: "Education", weight: 25 },
  ];

  const [filledFields, setFilledFields] = useState({
    Name: true,
    Email: true,
    Phone: true,
    Address: false,
    Education: false,
  });

  const totalWeight = fields.reduce((acc, field) => acc + field.weight, 0);

  // Calculate the weight of the filled fields
  const filledWeight = fields.reduce(
    (acc, field) => (filledFields[field.name] ? acc + field.weight : acc),
    0
  );

  // Calculate the percentage of the profile that is completed
  const percentageComplete = Math.round((filledWeight / totalWeight) * 100);

  const { data:fundRaised,isSuccess:fundRaisedIsSuccess} = useGetFundRaisedQuery();
  // console.log(fundRaised)

  const { data:fundRequired,isSuccess:fundRequiredIsSuccess}=useGetFundRequiredQuery();
  // console.log(fundRequired)

    useEffect(() => {
    if (fundRaised && fundRaisedIsSuccess &&  fundRaised.data) {
     setRaised(fundRaised.data)
    }
  }, [fundRaised,fundRaisedIsSuccess]);

  useEffect(() => {
    if (fundRequired && fundRequiredIsSuccess &&  fundRequired.data) {
     setRequired(fundRequired.data)
    }
  }, [fundRequired,fundRequiredIsSuccess]);

  useEffect(() => {
    if (data && isSuccess) {
      setName(data.name);
      setUID(data.UID);
    }
  }, [data, isSuccess]);
  // console.log(data)
  function convertToInteger(input) {
    const numericValue = Number(input);

    if (isNaN(numericValue)) {
      throw new Error("Input is not a valid number.");
    }

    return Math.floor(numericValue);
  }
 

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
            <div className="app-header z-[999] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700 xl:w-[248px]  ml-0 ml-248px">
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
                    {/* <img
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
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
                    {/* <iconify-icon icon="ph:arrow-right-bold"></iconify-icon> */}
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
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
                </div>
                {/* <!-- end horizental --> */}

                {/* <!-- end top menu --> */}
                <StudentNotification />
                {/* <!-- end nav tools --> */}
              </div>
            </div>
          </div>

          {/* <div
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
          </div> */}
          {/* <!-- END: Search Modal --> */}
          {/* <!-- END: Header --> */}
          {/* <!-- END: Header --> */}
          <div
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]  ml-0 ml-248px"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div className="page-content">
              <div id="content_layout">
                <div>
                  <div className="flex justify-between flex-wrap items-center mb-6">
                    <div>
                      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-4 sm:mb-0 flex space-x-3 rtl:space-x-reverse">
                        Dashboard
                      </h4>
                      <p style={{ color: "#8e8e8e" }}>
                        Hii, {name} ({UID}) . Welcome back to GET.
                      </p>
                    </div>
                    <div>
                      <p>Profile Progress: {percentageComplete}%</p>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${percentageComplete}%` }}
                        />
                      </div>
                      {/* Render your profile fields here */}
                    </div>
                  </div>
                  <div className=" grid grid-cols-12  mb-5">
                  
                    <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
                      <div className="p-4 card">
                        <div className="grid md:grid-cols-4 col-span-1 gap-4  ">
                          {/* <!-- BEGIN: Group Chart2 --> */}

                          <div className="py-[18px] px-4 rounded-[6px] bg-[#FFEDE5] dark:bg-slate-900	 ">
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                              <div className="flex-none">
                                <div id="wline1"></div>
                              </div>
                              <NavLink to="/student/raise-fund">
                                <div className="flex-1">
                                  <div
                                    className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium"
                                    style={{ fontSize: "15px" }}
                                  >
                                    Raise Fund For Education
                                  </div>
                                </div>
                              </NavLink>
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
            
                  </div>

                  <div className=" space-y-5">
                  <div className="card">
                    <header className="card-header">
                      <div className="card-title">Course Offered</div>
                    </header>
                    <div className="card-body p-6">
                      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative z-[1] bg-warning-500">
                            <img
                              src={course1}
                              alt=""
                              className="ml-auto block"
                            />

                          {/* <div className="space-x-4  flex items-center mb-5 rtl:space-x-reverse">
                              <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">
                                Save 20%
                              </span>
                            </div> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "15px",
                            }}
                          >
                            <div class="rbt-review">
                              <div style={{ display: "flex" }}>
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                &nbsp;
                                <span style={{ fontSize: "12px" }}>
                                  {" "}
                                  (15 Reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <h4
                            style={{
                              fontSize: "22px",
                              fontWeight: 600,
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            <a href="#">React Front To Back</a>
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              className="text-sm leading-5 text-slate-600 dark:text-slate-300"
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <FaFileAlt
                                style={{
                                  stroke: "#000",
                                  strokeWidth: "10px",
                                  marginTop: "2px",
                                  fontSize: "medium",
                                }}
                              />{" "}
                              &nbsp; 12 Lessons
                            </p>

                            <p
                              className="text-sm leading-5 text-slate-600 dark:text-slate-300"
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <FaUserFriends
                                style={{
                                  stroke: "#000",
                                  strokeWidth: "10px",
                                  marginTop: "2px",
                                  fontSize: "medium",
                                }}
                              />{" "}
                              &nbsp; 50 Students
                            </p>
                          </div>
                          <div
                            className="price-body space-y-8"
                            style={{ marginTop: "20px", marginBottom: "5px" }}
                          >
                            <p className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                            <div>
                              <div style={{ display: "flex" }}>
                                <img
                                  src={user}
                                  alt="user"
                                  className="block object-cover rounded-full"
                                  style={{ width: "40px", height: "40px" }}
                                />
                                &nbsp; &nbsp;
                                <p className="text-sm leading-5 text-slate-600 dark:text-slate-300 mt-3">
                                  By{" "}
                                  <span
                                    style={{ color: "#000", fontWeight: 600 }}
                                  >
                                    Angela
                                  </span>{" "}
                                  In{" "}
                                  <span
                                    style={{ color: "#000", fontWeight: 600 }}
                                  >
                                    Development
                                  </span>
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "10px",
                                }}
                              >
                                <button
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    border: "1px solid orange",
                                    width: "80px",
                                    height: "40px",
                                    borderRadius: "5px",
                                    margin: "10px",
                                  }}
                                >
                                  {" "}
                                  ₹196
                                </button>
                                {/* <Link to={"/learn-more"}> */}
                                <button
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    justifyContent: "space-between",
                                    width: "150px",
                                    height: "40px",
                                    borderRadius: "5px",
                                    margin: "10px",
                                    display: "flex",
                                    background:
                                      "linear-gradient(to bottom, #ffcc99 0%, #ff9900 100%)",
                                    color: "#fff",
                                    padding: "10px",
                                    marginLeft: "4px",
                                  }}
                                >
                                  Learn More &nbsp;{" "}
                                  <IoIosArrowForward
                                    style={{
                                      marginTop: "3px",
                                      marginRight: "3px",
                                    }}
                                  />
                                </button>

                                {/* </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative z-[1] bg-info-500">
                        
                            <img
                              src={course3}
                              alt=""
                              className="ml-auto block"
                            />
                          

                          {/* <div className="space-x-4  flex items-center mb-5 rtl:space-x-reverse">
                              <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">
                                Save 20%
                              </span>
                            </div> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "15px",
                            }}
                          >
                            <div class="rbt-review">
                              <div style={{ display: "flex" }}>
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                &nbsp;
                                <span style={{ fontSize: "12px" }}>
                                  {" "}
                                  (5 Reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <h4
                            style={{
                              fontSize: "22px",
                              fontWeight: 600,
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            <a href="#">Graphics Design Courses</a>
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              className="text-sm leading-5 text-slate-600 dark:text-slate-300"
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <FaFileAlt
                                style={{
                                  stroke: "#000",
                                  strokeWidth: "10px",
                                  marginTop: "2px",
                                  fontSize: "medium",
                                }}
                              />{" "}
                              &nbsp; 12 Lessons
                            </p>
                            &nbsp;
                            <p
                              className="text-sm leading-5 text-slate-600 dark:text-slate-300"
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <FaUserFriends
                                style={{
                                  stroke: "#000",
                                  strokeWidth: "10px",
                                  marginTop: "2px",
                                  fontSize: "medium",
                                }}
                              />{" "}
                              &nbsp; 50 Students
                            </p>
                          </div>
                          <div
                            className="price-body space-y-8"
                            style={{ marginTop: "20px", marginBottom: "5px" }}
                          >
                            <p className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                            <div>
                              <div style={{ display: "flex" }}>
                                <img
                                  src={user}
                                  alt="user"
                                  className="block object-cover rounded-full"
                                  style={{ width: "40px", height: "40px" }}
                                />
                                &nbsp; &nbsp;
                                <p className="text-sm leading-5 text-slate-600 dark:text-slate-300 mt-3">
                                  By{" "}
                                  <span
                                    style={{ color: "#000", fontWeight: 600 }}
                                  >
                                    Angela
                                  </span>{" "}
                                  In{" "}
                                  <span
                                    style={{ color: "#000", fontWeight: 600 }}
                                  >
                                    Development
                                  </span>
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "10px",
                                }}
                              >
                                <button
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    border: "1px solid lightblue",
                                    width: "80px",
                                    height: "40px",
                                    borderRadius: "5px",
                                    margin: "10px",
                                  }}
                                >
                                  {" "}
                                  ₹196
                                </button>
                                {/* <Link to={"/learn-more"}> */}
                                <button
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    justifyContent: "space-between",
                                    width: "150px",
                                    height: "40px",
                                    borderRadius: "5px",
                                    margin: "10px",
                                    display: "flex",
                                    background:
                                      "linear-gradient(to top right, #ccffff 0%, #66ccff 100%)",
                                    color: "#fff",
                                    padding: "10px",
                                    marginLeft: "4px",
                                  }}
                                >
                                  Learn More &nbsp;{" "}
                                  <IoIosArrowForward
                                    style={{
                                      marginTop: "3px",
                                      marginRight: "3px",
                                    }}
                                  />
                                </button>

                                {/* </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative z-[1] bg-success-500">
                       
                            <img
                              src={course2}
                              alt=""
                              className="ml-auto block"
                            />
                        

                          {/* <div className="space-x-4  flex items-center mb-5 rtl:space-x-reverse">
                              <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">
                                Save 20%
                              </span>
                            </div> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "15px",
                            }}
                          >
                            <div class="rbt-review">
                              <div style={{ display: "flex" }}>
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "orange",
                                    fontSize: "medium",
                                  }}
                                />
                                &nbsp;
                                <span style={{ fontSize: "12px" }}>
                                  {" "}
                                  (15 Reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <h4
                            style={{
                              fontSize: "22px",
                              fontWeight: 600,
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            <a href="#">Web Front To Back</a>
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              className="text-sm leading-5 text-slate-600 dark:text-slate-300"
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <FaFileAlt
                                style={{
                                  stroke: "#000",
                                  strokeWidth: "10px",
                                  marginTop: "2px",
                                  fontSize: "medium",
                                }}
                              />{" "}
                              &nbsp; 12 Lessons
                            </p>
                            &nbsp;
                            <p
                              className="text-sm leading-5 text-slate-600 dark:text-slate-300"
                              style={{ display: "flex", fontSize: "14px" }}
                            >
                              <FaUserFriends
                                style={{
                                  stroke: "#000",
                                  strokeWidth: "10px",
                                  marginTop: "2px",
                                  fontSize: "medium",
                                }}
                              />{" "}
                              &nbsp; 50 Students
                            </p>
                          </div>
                          <div
                            className="price-body space-y-8"
                            style={{ marginTop: "20px", marginBottom: "5px" }}
                          >
                            <p className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                            <div>
                              <div style={{ display: "flex" }}>
                                <img
                                  src={user}
                                  alt="user"
                                  className="block object-cover rounded-full"
                                  style={{ width: "40px", height: "40px" }}
                                />
                                &nbsp; &nbsp;
                                <p className="text-sm leading-5 text-slate-600 dark:text-slate-300 mt-3">
                                  By{" "}
                                  <span
                                    style={{ color: "#000", fontWeight: 600 }}
                                  >
                                    Angela
                                  </span>{" "}
                                  In{" "}
                                  <span
                                    style={{ color: "#000", fontWeight: 600 }}
                                  >
                                    Development
                                  </span>
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "10px",
                                }}
                              >
                                <button
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    border: "1px solid lightgreen",
                                    width: "80px",
                                    height: "40px",
                                    borderRadius: "5px",
                                    margin: "10px",
                                  }}
                                >
                                  {" "}
                                  ₹196
                                </button>
                                {/* <Link to={"/learn-more"}> */}
                                <button
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    justifyContent: "space-between",
                                    width: "150px",
                                    height: "40px",
                                    borderRadius: "5px",
                                    margin: "10px",
                                    display: "flex",
                                    background:
                                      "linear-gradient(to top right, #ccffcc 0%, #99ff99 100%)",
                                    color: "#fff",
                                    padding: "10px",
                                    marginLeft: "4px",
                                  }}
                                >
                                  Learn More &nbsp;{" "}
                                  <IoIosArrowForward
                                    style={{
                                      marginTop: "3px",
                                      marginRight: "3px",
                                    }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                 
                      </div>
                    </div>
                  </div>
                </div>
                 
                </div>

              </div>
            
            </div>
            
       
      
          </div>
       
        </div>

        {/* <div
          className="bg-white bg-no-repeat custom-dropshadow footer-bg dark:bg-slate-700 flex justify-around items-center
    backdrop-filter backdrop-blur-[40px] fixed left-0 bottom-0 w-full z-[9999] bothrefm-0 py-[12px] px-4 md:hidden"
        >
          <a href="chat.html">
            <div>
              <span
                className="relative cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center mb-1 dark:text-white
          text-slate-900 "
              >
                <iconify-icon icon="heroicons-outline:mail"></iconify-icon>
                <span
                  className="absolute right-[5px] lg:hrefp-0 -hrefp-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
            justify-center rounded-full text-white z-[99]"
                >
                  10
                </span>
              </span>
              <span className="block text-[11px] text-slate-600 dark:text-slate-300">
                Messages
              </span>
            </div>
          </a>
          <a
            href="profile.html"
            className="relative bg-white bg-no-repeat backdrop-filter backdrop-blur-[40px] rounded-full footer-bg dark:bg-slate-700
      h-[65px] w-[65px] z-[-1] -mt-[40px] flex justify-center items-center"
          >
            <div className="h-[50px] w-[50px] rounded-full relative left-[0px] hrefp-[0px] custom-dropshadow">
              <img
                src="assets/images/users/user-1.jpg"
                alt=""
                className="w-full h-full rounded-full border-2 border-slate-100"
              />
            </div>
          </a>
          <a href="#">
            <div>
              <span
                className=" relative cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center mb-1 dark:text-white
          text-slate-900"
              >
                <iconify-icon icon="heroicons-outline:bell"></iconify-icon>
                <span
                  className="absolute right-[17px] lg:hrefp-0 -hrefp-2 h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
            justify-center rounded-full text-white z-[99]"
                >
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
      <ToastContainer />
    

    </>
  );
};

export default Layout;
