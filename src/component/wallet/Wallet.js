import React, { useState,useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import {
  useGetProfileQuery,
  useGetNotificationQuery,
} from "../../services/signUpApi";
import user from "../../assets/user.png";
import background from "../../assets/images/widget-bg-1.png";
import customer from "../../assets/customer_1.png";
import Sidebar from "../sidebar/Sidebar";

const Wallet = () => {
  const [name, setName] = useState("");
  const [notification, setNotification] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [moreIcon, setMoreIcon] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Student logout successfully!");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function toggleMoreIcon(index) {
    const updatedVisibility = [...moreIcon];
    updatedVisibility[index] = !updatedVisibility[index];
    setMoreIcon(updatedVisibility);
  }

  const { data, isSuccess } = useGetProfileQuery();
  const { data: studentNotification, isSuccess: studentIsSuccess } =
    useGetNotificationQuery();

  console.log(studentNotification);
  console.log("data", notification);

  useEffect(() => {
    if (studentNotification && studentIsSuccess && studentNotification.data) {
      setNotification(studentNotification.data);
    }
  }, [studentNotification, studentIsSuccess]);

  useEffect(() => {
    if (data && isSuccess) {
      setName(data.name);
    }
  }, [data, isSuccess]);

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

                      {/* <!-- Dropdown menu --> */}

                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons:presentation-chart-line"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">
                                Analytics Dashboard
                              </span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons:shopping-cart"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">
                                Ecommerce Dashboard
                              </span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons:briefcase"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">
                                Project Dashboard
                              </span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="ri:customer-service-2-fill"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">CRM Dashboard</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons:wrench-screwdriver"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">
                                Banking Dashboard
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>

                      {/* <!-- Megamenu --> */}
                    </li>

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
                            <iconify-icon icon="heroicons-outline:chip">
                              {" "}
                            </iconify-icon>
                          </span>
                          <div className="text-box">App</div>
                        </div>
                        <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                          <iconify-icon icon="heroicons-outline:chevron-down">
                            {" "}
                          </iconify-icon>
                        </div>
                      </a>

                      {/* <!-- Dropdown menu --> */}

                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:chat"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Chat</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:mail"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Email</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:calendar"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Calendar</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:view-boards"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Kanban</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:clipboard-check"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Todo</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:document"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Projects</span>
                            </div>
                          </a>
                        </li>
                      </ul>

                      {/* <!-- Megamenu --> */}
                    </li>

                    <li
                      className="
              menu-item-has-children has-megamenu
            "
                    >
                      {/* <!--  Single menu --> */}

                      {/* <!-- has dropdown --> */}

                      <a href="javascript:void()">
                        <div className="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
                          <span className="icon-box">
                            <iconify-icon icon="heroicons-outline:view-boards">
                              {" "}
                            </iconify-icon>
                          </span>
                          <div className="text-box">Pages</div>
                        </div>
                        <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                          <iconify-icon icon="heroicons-outline:chevron-down">
                            {" "}
                          </iconify-icon>
                        </div>
                      </a>

                      {/* <!-- Dropdown menu --> */}

                      {/* <!-- Megamenu --> */}

                      <div className="rt-mega-menu">
                        <div className="flex flex-wrap space-x-8 justify-between rtl:space-x-reverse">
                          <div>
                            {/* <!-- mega menu title --> */}
                            <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                              <span> Authentication</span>
                            </div>
                            {/* <!-- single menu item* --> */}

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Signin One
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Signin Two
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Signin Three
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Signup One
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Signup Two
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Signup Three
                                </span>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Forget Password One
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Forget Password Two
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Forget Password Three
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Lock Screen One
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Lock Screen Two
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Lock Screen Three
                                </span>
                              </div>
                            </a>
                          </div>

                          <div>
                            {/* <!-- mega menu title --> */}
                            <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                              <span> Components</span>
                            </div>
                            {/* <!-- single menu item* --> */}

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  typography
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  colors
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  alert
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  button
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  card
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  carousel
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  dropdown
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  image
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  modal
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Progress bar
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Placeholder
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Tab &amp; Accordion
                                </span>
                              </div>
                            </a>
                          </div>

                          <div>
                            {/* <!-- mega menu title --> */}
                            <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                              <span> Forms</span>
                            </div>
                            {/* <!-- single menu item* --> */}

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Input
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Input group
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Input layout
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Form validation
                                </span>
                              </div>
                            </a>

                            <a href="#">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Wizard
                                </span>
                              </div>
                            </a>

                            <a href="input-mask.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Input mask
                                </span>
                              </div>
                            </a>

                            <a href="file-input-2.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  File input
                                </span>
                              </div>
                            </a>

                            <a href="form-repeater.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Form repeater
                                </span>
                              </div>
                            </a>

                            <a href="textarea.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Textarea
                                </span>
                              </div>
                            </a>

                            <a href="checkbox.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Checkbox
                                </span>
                              </div>
                            </a>

                            <a href="radio-button.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Radio button
                                </span>
                              </div>
                            </a>

                            <a href="switch.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Switch
                                </span>
                              </div>
                            </a>
                          </div>

                          <div>
                            {/* <!-- mega menu title --> */}
                            <div className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center">
                              <span> Utility</span>
                            </div>
                            {/* <!-- single menu item* --> */}

                            <a href="invoice.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Invoice
                                </span>
                              </div>
                            </a>

                            <a href="pricing.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Pricing
                                </span>
                              </div>
                            </a>

                            <a href="faq.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  FAQ
                                </span>
                              </div>
                            </a>

                            <a href="blank-page.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Blank page
                                </span>
                              </div>
                            </a>

                            <a href="blog.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Blog
                                </span>
                              </div>
                            </a>

                            <a href="404.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  404 page
                                </span>
                              </div>
                            </a>

                            <a href="comming-soon.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Coming Soon
                                </span>
                              </div>
                            </a>

                            <a href="under-maintanance.html">
                              <div className="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse">
                                <span className="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none"></span>
                                <span className="capitalize text-slate-600 dark:text-slate-300">
                                  Under Maintanance page
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>

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
                            <iconify-icon icon="heroicons-outline:view-grid-add">
                              {" "}
                            </iconify-icon>
                          </span>
                          <div className="text-box">Widgets</div>
                        </div>
                        <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                          <iconify-icon icon="heroicons-outline:chevron-down">
                            {" "}
                          </iconify-icon>
                        </div>
                      </a>

                      {/* <!-- Dropdown menu --> */}

                      <ul className="sub-menu">
                        <li>
                          <a href="basic-widgets.html">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:document-text"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Basic</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="statistics-widgets.html">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:document-text"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Statistic</span>
                            </div>
                          </a>
                        </li>
                      </ul>

                      {/* <!-- Megamenu --> */}
                    </li>

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
                            <iconify-icon icon="heroicons-outline:template">
                              {" "}
                            </iconify-icon>
                          </span>
                          <div className="text-box">Extra</div>
                        </div>
                        <div className="flex-none text-sm ltr:ml-3 rtl:mr-3 leading-[1] relative top-1">
                          <iconify-icon icon="heroicons-outline:chevron-down">
                            {" "}
                          </iconify-icon>
                        </div>
                      </a>

                      {/* <!-- Dropdown menu --> */}

                      <ul className="sub-menu">
                        <li>
                          <a href="basic-table.html">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:table"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Basic Table</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="advance-table.html">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:table"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">
                                Advanced table
                              </span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="apex-chart.html">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:chart-bar"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Apex chart</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:chart-bar"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Chart js</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <div className="flex space-x-2 items-start rtl:space-x-reverse">
                              <iconify-icon
                                icon="heroicons-outline:map"
                                className="leading-[1] text-base"
                              >
                                {" "}
                              </iconify-icon>
                              <span className="leading-[1]">Map</span>
                            </div>
                          </a>
                        </li>
                      </ul>

                      {/* <!-- Megamenu --> */}
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
                            </div>&nbsp;&nbsp;
                              <div className="flex-1">
                                  <div className="text-slate-600 text-xs leading-4">
                                    {notification.message}
                                  </div>
                                  <div  className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white">
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
                      {/* <svg className="w-[16px] h-[16px] dark:text-white  lg:inline-block text-base inline-block ml-[10px] rtl:mr-[10px]" aria-hidden="true" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg> */}

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
                              <LogoutIcon
                                style={{ fontSize: "medium" }}
                                onClick={handleLogout}
                              />{" "}
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
          <div
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] bg-[#F1F5F9] xl:rtl:mr-[248px]"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div className="page-content">
              <div id="content_layout">
                <div>
                  <div className="grid grid-cols-12 gap-5 mb-5">
                    <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
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
                            left: "40%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "1",
                            flexDirection: "row",
                            position: "absolute",
                          }}
                          onClick={() => setShowAlert(!showAlert)}
                        >
                          <div className="text-xl font-medium text-slate-900 mb-2">
                            Withdrawal Amount
                          </div>
                        </div>
                      </div>
                    </div>
                    {showAlert && (
                      <>
                        <div className="alert-modal">
                          <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-md p-6 " style={{ width: "500px", height: "220px" }}>
                              <div className="text-lg font-bold mb-3 text-center">
                                Withdrawal Amount
                              </div>
                              {/* <div className="grid md:grid-cols-2 gap-6 m-auto" > */}
                                <div className="input-area ">
                                  <label
                                    htmlFor="amount"
                                    className="form-label"
                                  >
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
                              {/* </div> */}
                            
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
                      <div className="p-4 card">
                        <div className="grid md:grid-cols-3 col-span-1 gap-4">
                          {/* <!-- BEGIN: Group Chart2 --> */}

                          <div className="py-[18px] px-4 rounded-[6px] bg-[#E5F9FF] dark:bg-slate-900	 ">
                            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                              <div className="flex-none">
                                <div id="wline1"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
                                  Total Fund Raised
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  3,564
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
                                <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
                                  Fund required
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  564
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
                                <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
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
                      <header className=" card-header noborder">
                        <h4 className="card-title">Transactions Details</h4>
                      </header>
                      <div className="card-body px-6 pb-6">
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
                                    <th scope="col" className=" table-th ">
                                      Id
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Order
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Customer
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Date
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Quantity
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Amount
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Status
                                    </th>

                                    <th scope="col" className=" table-th ">
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                                  <tr>
                                    <td className="table-td">1</td>
                                    <td className="table-td ">#951</td>
                                    <td className="table-td">
                                      <span className="flex">
                                        <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                                          <img
                                            src={customer}
                                            alt="1"
                                            className="object-cover w-full h-full rounded-full"
                                          />
                                        </span>{" "}
                                        &nbsp;&nbsp;
                                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                                          Jenny Wilson
                                        </span>
                                      </span>
                                    </td>
                                    <td className="table-td ">3/26/2022</td>
                                    <td className="table-td ">
                                      <div>13</div>
                                    </td>
                                    <td className="table-td ">
                                      <div>₹1779.53</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
                              bg-success-500"
                                      >
                                        paid
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                              // aria-expanded="false"
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(1)
                                                }
                                              />
                                              {/* <iconify-icon icon="heroicons-outline:dots-vertical"></iconify-icon> */}
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
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-td">2</td>
                                    <td className="table-td ">#238</td>
                                    <td className="table-td">
                                      <span className="flex">
                                        <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                                          <img
                                            src={customer}
                                            alt="2"
                                            className="object-cover w-full h-full rounded-full"
                                          />
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                                          Jenny Wilson
                                        </span>
                                      </span>
                                    </td>
                                    <td className="table-td ">2/6/2022</td>
                                    <td className="table-td ">
                                      <div>13</div>
                                    </td>
                                    <td className="table-td ">
                                      <div>₹2215.78</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
                              bg-warning-500"
                                      >
                                        due
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton2"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(2)
                                                }
                                              />
                                              {/* <iconify-icon icon="heroicons-outline:dots-vertical"></iconify-icon> */}
                                            </button>
                                            {moreIcon[2] && (
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
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-td">3</td>
                                    <td className="table-td ">#339</td>
                                    <td className="table-td">
                                      <span className="flex">
                                        <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                                          <img
                                            src={customer}
                                            alt="3"
                                            className="object-cover w-full h-full rounded-full"
                                          />
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                                          Jenny Wilson
                                        </span>
                                      </span>
                                    </td>
                                    <td className="table-td ">9/6/2021</td>
                                    <td className="table-td ">
                                      <div>1</div>
                                    </td>
                                    <td className="table-td ">
                                      <div>₹3183.60</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
                              bg-warning-500"
                                      >
                                        due
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton3"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(3)
                                                }
                                              />
                                              {/* <iconify-icon icon="heroicons-outline:dots-vertical"></iconify-icon> */}
                                            </button>
                                            {moreIcon[3] && (
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
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-td">4</td>
                                    <td className="table-td ">#365</td>
                                    <td className="table-td">
                                      <span className="flex">
                                        <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                                          <img
                                            src={customer}
                                            alt="4"
                                            className="object-cover w-full h-full rounded-full"
                                          />
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                                          Jenny Wilson
                                        </span>
                                      </span>
                                    </td>
                                    <td className="table-td ">11/7/2021</td>
                                    <td className="table-td ">
                                      <div>13</div>
                                    </td>
                                    <td className="table-td ">
                                      <div>₹2587.86</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500
                              bg-danger-500"
                                      >
                                        cancled
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton4"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(4)
                                                }
                                              />
                                              {/* <iconify-icon icon="heroicons-outline:dots-vertical"></iconify-icon> */}
                                            </button>
                                            {moreIcon[4] && (
                                              <ul
                                                className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white bg-white dark:bg-slate-700
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
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-td">5</td>
                                    <td className="table-td ">#513</td>
                                    <td className="table-td">
                                      <span className="flex">
                                        <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                                          <img
                                            src={customer}
                                            alt="5"
                                            className="object-cover w-full h-full rounded-full"
                                          />
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                                          Jenny Wilson
                                        </span>
                                      </span>
                                    </td>
                                    <td className="table-td ">5/6/2022</td>
                                    <td className="table-td ">
                                      <div>12</div>
                                    </td>
                                    <td className="table-td ">
                                      <div>₹3840.73</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
                              bg-success-500"
                                      >
                                        paid
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton5"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(5)
                                                }
                                              />
                                              {/* <iconify-icon icon="heroicons-outline:dots-vertical"></iconify-icon> */}
                                            </button>
                                            {moreIcon[5] && (
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
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-td">6</td>
                                    <td className="table-td ">#534</td>
                                    <td className="table-td">
                                      <span className="flex">
                                        <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                                          <img
                                            src={customer}
                                            alt="6"
                                            className="object-cover w-full h-full rounded-full"
                                          />
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                                          Jenny Wilson
                                        </span>
                                      </span>
                                    </td>
                                    <td className="table-td ">2/14/2022</td>
                                    <td className="table-td ">
                                      <div>12</div>
                                    </td>
                                    <td className="table-td ">
                                      <div>₹4764.18</div>
                                    </td>
                                    <td className="table-td ">
                                      <div
                                        className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500
                              bg-danger-500"
                                      >
                                        cancled
                                      </div>
                                    </td>
                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <div className="dropdown relative">
                                            <button
                                              className="text-xl text-center block w-full "
                                              type="button"
                                              id="tableDropdownMenuButton6"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false"
                                            >
                                              <MoreVertIcon
                                                onClick={() =>
                                                  toggleMoreIcon(6)
                                                }
                                              />
                                              {/* <iconify-icon icon="heroicons-outline:dots-vertical"></iconify-icon> */}
                                            </button>
                                            {moreIcon[6] && (
                                              <ul
                                                className=" dropdown-menu min-w-[120px] absolute text-sm text-slate-700 dark:text-white bg-white dark:bg-slate-700
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
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
