import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaStar, FaBookmark, FaFileAlt, FaUserFriends } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from "../sidebar/Sidebar";
import user from "../../assets/user.png";
import {
  useGetProfileQuery,
  useGetNotificationQuery,
} from "../../services/signUpApi";
import course1 from "../../assets/images/course/classic-lms-01.jpg";
import course2 from "../../assets/images/course/classic-lms-02.jpg";
import course3 from "../../assets/images/course/classic-lms-03.jpg";
import StudentNotification from "../studentNotification/StudentNotification";

const CourseOffered = () => {
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
                    href="index.html"
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

          <div
            class="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div class="page-content">
              <div id="content_layout">
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

                        {/* <div
                          className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative
                overflow-hidden z-[1] bg-primary-500"
                        >
                          <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                            <img
                              src="assets/images/all-img/big-shap4.png"
                              alt=""
                              className="ml-auto block"
                            />
                          </div>

                          <header className="mb-6">
                            <h4 className="text-xl mb-5">Got a large team?</h4>
                            <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                              <span className="text-[32px] leading-10 font-medium">
                                ₹126
                              </span>
                              <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">
                                Save 20%
                              </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-300 text-sm">
                              per user/month, annually
                            </p>
                          </header>
                          <div className="price-body space-y-8">
                            <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                              Designed for teams who need to manage complex
                              workflows with more automation and integration.
                            </p>
                            <div>
                              <button className="btn-outline-dark dark:border-slate-400 w-full btn">
                                Enroll now
                              </button>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Start Course Area --> */}
                {/* <div class="rbt-course-area bg-color-white rbt-section-gap p-6">
        <div class="container">
            <div class="row mb--55 g-5 align-items-end " style={{display:'flex',justifyContent:'space-between'}}>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="section-title text-start">
                        <span class="subtitle bg-pink-opacity">Top Popular Course</span>
                        <h3 class="title">Most Popular <br/> <span class="color-primary">Courses</span></h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="load-more-btn text-start text-md-end">
                        <a class="rbt-btn rbt-switch-btn bg-primary-opacity" href="course.html">
                            <span data-text="View All Course">View All Course</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Start Card Area -->
            <div class="row g-5">
                <!-- Start Single Course  -->
                <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-img">
                            <a href="course-details.html">
                                <img src={course1} alt="Card image" />
                                <div class="rbt-badge-3 bg-white">
                                    <span>-40%</span>
                                    <span>Off</span>
                                </div>
                            </a>
                        </div>
                        <div class="rbt-card-body">
                            <div class="rbt-card-top">
                                <div class="rbt-review">
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count"> (15 Reviews)</span>
                                </div>
                                <div class="rbt-bookmark-btn">
                                    <a class="rbt-round-btn" title="Bookmark" href="#"><i
                                            class="feather-bookmark"></i></a>
                                </div>
                            </div>

                            <h4 class="rbt-card-title"><a href="course-details.html">React Front To Back</a>
                            </h4>

                            <ul class="rbt-meta">
                                <li><i class="feather-book"></i>12 Lessons</li>
                                <li><i class="feather-users"></i>50 Students</li>
                            </ul>

                            <p class="rbt-card-text">It is a long established fact that a reader will be
                                distracted.</p>
                            <div class="rbt-author-meta mb--10">
                                <div class="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div class="rbt-author-info">
                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                </div>
                            </div>
                            <div class="rbt-card-bottom">
                                <div class="rbt-price">
                                    <span class="current-price">$60</span>
                                    <span class="off-price">$120</span>
                                </div>
                                <a class="rbt-btn-link" href="course-details.html">Learn
                                    More<i class="feather-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Course  -->

                <!-- Start Single Course  -->
                <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                    <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-img">
                            <a href="course-details.html">
                                <img src="assets/images/course/classic-lms-02.jpg" alt="Card image" />
                                <div class="rbt-badge-3 bg-white">
                                    <span>-40%</span>
                                    <span>Off</span>
                                </div>
                            </a>
                        </div>
                        <div class="rbt-card-body">
                            <div class="rbt-card-top">
                                <div class="rbt-review">
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count"> (15 Reviews)</span>
                                </div>
                                <div class="rbt-bookmark-btn">
                                    <a class="rbt-round-btn" title="Bookmark" href="#"><i
                                            class="feather-bookmark"></i></a>
                                </div>
                            </div>
                            <h4 class="rbt-card-title"><a href="course-details.html">PHP Beginner Advanced</a>
                            </h4>
                            <ul class="rbt-meta">
                                <li><i class="feather-book"></i>12 Lessons</li>
                                <li><i class="feather-users"></i>50 Students</li>
                            </ul>

                            <p class="rbt-card-text">It is a long established fact that a reader will be
                                distracted.</p>
                            <div class="rbt-author-meta mb--10">
                                <div class="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div class="rbt-author-info">
                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                </div>
                            </div>
                            <div class="rbt-card-bottom">
                                <div class="rbt-price">
                                    <span class="current-price">$60</span>
                                    <span class="off-price">$120</span>
                                </div>
                                <a class="rbt-btn-link left-icon" href="course-details.html"><i
                                        class="feather-shopping-cart"></i> Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Course  -->

                <!-- Start Single Course  -->
                <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                    <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-img">
                            <a href="course-details.html">
                                <img src="assets/images/course/classic-lms-03.jpg" alt="Card image" />
                                <div class="rbt-badge-3 bg-white">
                                    <span>-40%</span>
                                    <span>Off</span>
                                </div>
                            </a>
                        </div>
                        <div class="rbt-card-body">
                            <div class="rbt-card-top">
                                <div class="rbt-review">
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count"> (5 Reviews)</span>
                                </div>
                                <div class="rbt-bookmark-btn">
                                    <a class="rbt-round-btn" title="Bookmark" href="#"><i
                                            class="feather-bookmark"></i></a>
                                </div>
                            </div>
                            <h4 class="rbt-card-title"><a href="course-details.html">Angular Zero to Mastery</a>
                            </h4>
                            <ul class="rbt-meta">
                                <li><i class="feather-book"></i>8 Lessons</li>
                                <li><i class="feather-users"></i>30 Students</li>
                            </ul>
                            <p class="rbt-card-text">Angular Js long fact that a reader will be distracted by
                                the readable.</p>

                            <div class="rbt-author-meta mb--20">
                                <div class="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div class="rbt-author-info">
                                    By <a href="profile.html">Slaughter</a> In <a href="#">Languages</a>
                                </div>
                            </div>
                            <div class="rbt-card-bottom">
                                <div class="rbt-price">
                                    <span class="current-price">$80</span>
                                    <span class="off-price">$100</span>
                                </div>
                                <a class="rbt-btn-link" href="course-details.html">Learn
                                    More<i class="feather-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Course  -->

                <!-- Start Single Card  -->
                <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-img">
                            <a href="course-details.html">
                                <img src="assets/images/course/classic-lms-04.jpg" alt="Card image" />
                                <div class="rbt-badge-3 bg-white">
                                    <span>-40%</span>
                                    <span>Off</span>
                                </div>
                            </a>
                        </div>
                        <div class="rbt-card-body">
                            <div class="rbt-card-top">
                                <div class="rbt-review">
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count"> (15 Reviews)</span>
                                </div>
                                <div class="rbt-bookmark-btn">
                                    <a class="rbt-round-btn" title="Bookmark" href="#"><i
                                            class="feather-bookmark"></i></a>
                                </div>
                            </div>

                            <h4 class="rbt-card-title"><a href="course-details.html">Web Front To Back</a>
                            </h4>
                            <ul class="rbt-meta">
                                <li><i class="feather-book"></i>20 Lessons</li>
                                <li><i class="feather-users"></i>40 Students</li>
                            </ul>
                            <p class="rbt-card-text">Web Js long fact that a reader will be distracted by
                                the readable.</p>
                            <div class="rbt-author-meta mb--20">
                                <div class="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avater-01.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div class="rbt-author-info">
                                    By <a href="profile.html">Patrick</a> In <a href="#">Languages</a>
                                </div>
                            </div>

                            <div class="rbt-card-bottom">
                                <div class="rbt-price">
                                    <span class="current-price">$60</span>
                                    <span class="off-price">$120</span>
                                </div>
                                <a class="rbt-btn-link" href="course-details.html">Learn
                                    More<i class="feather-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Card  -->

                <!-- Start Single Card  -->
                <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                    <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-img">
                            <a href="course-details.html">
                                <img src="assets/images/course/classic-lms-05.jpg" alt="Card image" />
                                <div class="rbt-badge-3 bg-white">
                                    <span>-40%</span>
                                    <span>Off</span>
                                </div>
                            </a>
                        </div>
                        <div class="rbt-card-body">
                            <div class="rbt-card-top">
                                <div class="rbt-review">
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count"> (15 Reviews)</span>
                                </div>
                                <div class="rbt-bookmark-btn">
                                    <a class="rbt-round-btn" title="Bookmark" href="#"><i
                                            class="feather-bookmark"></i></a>
                                </div>
                            </div>
                            <h4 class="rbt-card-title"><a href="course-details.html">SQL Beginner Advanced</a>
                            </h4>
                            <ul class="rbt-meta">
                                <li><i class="feather-book"></i>12 Lessons</li>
                                <li><i class="feather-users"></i>50 Students</li>
                            </ul>
                            <p class="rbt-card-text">It is a long established fact that a reader will be
                                distracted
                                by the readable.</p>
                            <div class="rbt-author-meta mb--20">
                                <div class="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div class="rbt-author-info">
                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                </div>
                            </div>
                            <div class="rbt-card-bottom">
                                <div class="rbt-price">
                                    <span class="current-price">$60</span>
                                    <span class="off-price">$120</span>
                                </div>
                                <a class="rbt-btn-link left-icon" href="course-details.html"><i
                                        class="feather-shopping-cart"></i> Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Card  -->

                <!-- Start Single Card  -->
                <div class="col-lg-4 col-md-6 col-sm-12 col-12" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
                    <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-img">
                            <a href="course-details.html">
                                <img src="assets/images/course/classic-lms-06.jpg" alt="Card image" />
                                <div class="rbt-badge-3 bg-white">
                                    <span>-40%</span>
                                    <span>Off</span>
                                </div>
                            </a>
                        </div>
                        <div class="rbt-card-body">
                            <div class="rbt-card-top">
                                <div class="rbt-review">
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count"> (5 Reviews)</span>
                                </div>
                                <div class="rbt-bookmark-btn">
                                    <a class="rbt-round-btn" title="Bookmark" href="#"><i
                                            class="feather-bookmark"></i></a>
                                </div>
                            </div>
                            <h4 class="rbt-card-title"><a href="course-details.html">JS Zero to Mastery</a>
                            </h4>
                            <ul class="rbt-meta">
                                <li><i class="feather-book"></i>8 Lessons</li>
                                <li><i class="feather-users"></i>30 Students</li>
                            </ul>
                            <p class="rbt-card-text">Angular Js long fact that a reader will be distracted by
                                the readable.</p>

                            <div class="rbt-author-meta mb--20">
                                <div class="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div class="rbt-author-info">
                                    By <a href="profile.html">Slaughter</a> In <a href="#">Languages</a>
                                </div>
                            </div>
                            <div class="rbt-card-bottom">
                                <div class="rbt-price">
                                    <span class="current-price">$80</span>
                                    <span class="off-price">$100</span>
                                </div>
                                <a class="rbt-btn-link" href="course-details.html">Learn
                                    More<i class="feather-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Card  -->
            </div>
            <!-- End Card Area -->
        </div>
    </div> 
    {/* <!-- End Course Area --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOffered;
