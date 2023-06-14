import React , {useState} from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from '../sidebar/Sidebar';
import user from "../../../assets/images/user/user-1.jpg";

const Course = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    return (
        <>
        <Sidebar />
        <div className="flex flex-col justify-between min-h-screen" style={{marginLeft:'248px'}}>
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
                              <span className="leading-[1]">Project Dashboard</span>
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
                              <span className="leading-[1]">Banking Dashboard</span>
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
                              <span className="leading-[1]">Advanced table</span>
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
                      //   type="button"
                      //   data-bs-toggle="dropdown"
                      //   aria-expanded="false"
                    >
                      {/* <iconify-icon
                        className="animate-tada text-slate-800 dark:text-white text-xl"
                        icon="heroicons-outline:bell"
                      ></iconify-icon> */}
                      <NotificationsIcon />
                      <span
                        className="absolute -right-1 lg:top-0 -top-[6px] h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
        justify-center rounded-full text-white z-[99]"
                      >
                        4
                      </span>
                    </button>
                    {/* <!-- Notifications Dropdown --> */}
                    <div
                      className="dropdown-menu z-10 hidden bg-white divide-y divide-slate-100 dark:divide-slate-900 shadow w-[335px]
      dark:bg-slate-800 border dark:border-slate-900 !top-[23px] rounded-md overflow-hidden lrt:origin-top-right rtl:origin-top-left"
                    >
                      <div className="flex items-center justify-between py-4 px-4">
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
                      <div
                        className="divide-y divide-slate-100 dark:divide-slate-900"
                        role="none"
                      >
                        <div className="bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 text-slate-800 block w-full px-4 py-2 text-sm relative">
                          <div className="flex ltr:text-left rtl:text-right">
                            <div className="flex-none ltr:mr-3 rtl:ml-3">
                              <div className="h-8 w-8 bg-white rounded-full">
                                <img
                                  src={user}
                                  alt="user"
                                  className="border-white block w-full h-full object-cover rounded-full border"
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <a
                                href="#"
                                className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                              >
                                Your order is placed
                              </a>
                              <div className="text-slate-500 dark:text-slate-200 text-xs leading-4">
                                Amet minim mollit non deser unt ullamco est sit
                                aliqua.
                              </div>
                              <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                                3 min ago
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                          <div className="flex ltr:text-left rtl:text-right relative">
                            <div className="flex-none ltr:mr-3 rtl:ml-3">
                              <div className="h-8 w-8 bg-white rounded-full">
                                <img
                                  src={user}
                                  alt="user"
                                  className="border-transparent block w-full h-full object-cover rounded-full border"
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <a
                                href="#"
                                className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
                before:top-0 before:left-0"
                              >
                                Congratulations Darlene 🎉
                              </a>
                              <div className="text-slate-600 dark:text-slate-300 text-xs leading-4">
                                Won the monthly best seller badge
                              </div>
                              3 min ago
                            </div>
                          </div>
                          <div className="flex-0">
                            <span className="h-[10px] w-[10px] bg-danger-500 border border-white dark:border-slate-400 rounded-full inline-block"></span>
                          </div>
                        </div>
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                        <div className="flex ltr:text-left rtl:text-right relative">
                          <div className="flex-none ltr:mr-3 rtl:ml-3">
                            <div className="h-8 w-8 bg-white rounded-full">
                              <img
                                src={user}
                                alt="user"
                                className="border-transparent block w-full h-full object-cover rounded-full border"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <a
                              href="#"
                              className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
              before:top-0 before:left-0"
                            >
                              Revised Order 👋
                            </a>
                            <div className="text-slate-600 dark:text-slate-300 text-xs leading-4">
                              Won the monthly best seller badge
                            </div>
                            <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                              3 min ago
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm">
                        <div className="flex ltr:text-left rtl:text-right relative">
                          <div className="flex-none ltr:mr-3 rtl:ml-3">
                            <div className="h-8 w-8 bg-white rounded-full">
                              <img
                                src={user}
                                alt="user"
                                className="border-transparent block w-full h-full object-cover rounded-full border"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <a
                              href="#"
                              className="text-slate-600 dark:text-slate-300 text-sm font-medium mb-1 before:w-full before:h-full before:absolute
              before:top-0 before:left-0"
                            >
                              Brooklyn Simmons
                            </a>
                            <div className="text-slate-600 dark:text-slate-300 text-xs leading-4">
                              Added you to Top Secret Project group...
                            </div>
                            <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                              3 min ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        Albert Flores
                      </span>
                      {/*   <svg
                        className="w-[16px] h-[16px] dark:text-white hidden lg:inline-block text-base inline-block ml-[10px] rtl:mr-[10px]"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                       <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path> 
  
                      </svg> */}

                      <KeyboardArrowDownIcon onClick={toggleDropdown} />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    {isDropdownOpen && (
                      <div
                        className="dropdown-menu z-10  bg-white divide-y divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-700 !top-[23px] rounded-md
      overflow-hidden
      "
                      >
                        <ul className="py-1 text-sm text-slate-800 dark:text-slate-200">
                          <li>
                            <a
                              href="/"
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:user"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <span className="font-Inter">Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:chat"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <span className="font-Inter">Course Details</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:mail"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <span className="font-Inter">Account Details</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:clipboard-check"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <span className="font-Inter">Wallet</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:cog"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <span className="font-Inter">Profile</span>
                            </a>
                          </li>
                          {/* <li>
                          <a
                            href="pricing.html"
                            className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                          >
                            <iconify-icon
                              icon="heroicons-outline:credit-card"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon>
                            <span className="font-Inter">Price</span>
                          </a>
                        </li> */}
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:login"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <span className="font-Inter">Logout</span>
                            </a>
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

        {/* <!-- BEGIN: Breadcrumb --> */}
              <div className="mb-5" >
                <ul className="m-0 p-0 list-none">
                  <li className="inline-block relative top-[3px] text-base text-primary-500 font-Inter ">
                    <a href="/">
                    <HomeRoundedIcon  style={{marginLeft:5}}/>
                      <KeyboardArrowRightRoundedIcon  />
                    </a>
                  </li>
                  <li className="inline-block relative text-sm text-primary-500 font-Inter pt-3 ">
                    Utility
                    <KeyboardArrowRightRoundedIcon  />
                  </li>
                  <li className="inline-block relative text-sm text-slate-500 font-Inter dark:text-white pt-3">
                    Course</li>
                </ul>
              </div>
              {/* <!-- END: BreadCrumb --> */}


              <div className=" space-y-5" >
                <div className="card">
                  <header className="card-header">
                    <div className="card-title">Packages</div>
                  </header>
                  <div className="card-body p-6">
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

                      <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative
                overflow-hidden z-[1] bg-warning-500">
                        <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                          <img src="assets/images/all-img/big-shap1.png" alt="" className="ml-auto block" /> 
                        </div>

                        <header className="mb-6">
                          <h4 className="text-xl mb-5">Advanced</h4>
                          <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                            <span className="text-[32px] leading-10 font-medium">
                    $96
                  </span>
                            <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">Save
                    20%</span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-300 text-sm">
                            per user/month, annually
                          </p>
                        </header>
                        <div className="price-body space-y-8">
                          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                            Designed for teams who need to manage complex workflows with more automation and integration.
                          </p>
                          <div>
                            <button className="btn-outline-dark dark:border-slate-400 w-full btn">
                              Buy now</button>
                          </div>
                        </div>
                      </div>

                      <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative
                overflow-hidden z-[1] bg-info-500">
                        <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                          <img src="assets/images/all-img/big-shap2.png" alt="" className="ml-auto block" />
                        </div>

                        <div className="text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px]
                    rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45">
                          Most popular
                        </div>

                        <header className="mb-6">
                          <h4 className="text-xl mb-5">Business</h4>
                          <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                            <span className="text-[32px] leading-10 font-medium">
                    $196
                  </span>
                            <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">Save
                    20%</span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-300 text-sm">
                            per user/month, annually
                          </p>
                        </header>
                        <div className="price-body space-y-8">
                          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                            Designed for teams who need to manage complex workflows with more automation and integration.
                          </p>
                          <div>
                            <button className="btn-outline-dark dark:border-slate-400 w-full btn">
                              Buy now</button>
                          </div>
                        </div>
                      </div>

                      <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative
                overflow-hidden z-[1] bg-success-500">
                        <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                          <img src="assets/images/all-img/big-shap3.png" alt="" className="ml-auto block" />
                        </div>

                        <header className="mb-6">
                          <h4 className="text-xl mb-5">Basic</h4>
                          <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                            <span className="text-[32px] leading-10 font-medium">
                    $26
                  </span>
                            <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">Save
                    20%</span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-300 text-sm">
                            per user/month, annually
                          </p>
                        </header>
                        <div className="price-body space-y-8">
                          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                            Designed for teams who need to manage complex workflows with more automation and integration.
                          </p>
                          <div>
                            <button className="btn-outline-dark dark:border-slate-400 w-full btn">
                              Try it free</button>
                          </div>
                        </div>
                      </div>

                      <div className="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative
                overflow-hidden z-[1] bg-primary-500">
                        <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                          <img src="assets/images/all-img/big-shap4.png" alt="" className="ml-auto block" />
                        </div>

                        <header className="mb-6">
                          <h4 className="text-xl mb-5">Got a large team?</h4>
                          <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                            <span className="text-[32px] leading-10 font-medium">
                    $126
                  </span>
                            <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">Save
                    20%</span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-300 text-sm">
                            per user/month, annually
                          </p>
                        </header>
                        <div className="price-body space-y-8">
                          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                            Designed for teams who need to manage complex workflows with more automation and integration.
                          </p>
                          <div>
                            <button className="btn-outline-dark dark:border-slate-400 w-full btn">
                              Request a quote</button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
               </div>



               </div>
                
              </div>
        </>
    );
}



export default Course;