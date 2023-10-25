import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/logo.png";
import Sidebar from "../sidebar/Sidebar";
import ResourceNotification from "../notification/ResourceNotification";


const Layout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="sidebar-wrapper group w-0  xl:w-[248px] xl:block hidden md:hidden sm:hidden">
        <Sidebar />
      </div>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
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
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                </div>
                {/* <!-- end vertcial --> */}

           <ResourceNotification />
              </div>
            </div>
          </div>

          {/* <!-- END: Header --> */}
          {/* <!-- END: Header --> */}
          <div
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] ml-0 ml-248px"
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
                      {/* <p
                        style={{
                          color: "#8e8e8e",
                          fontSize: "16px",
                          fontFamily: "Poppins",
                        }}
                      >
                        Hii, {name}. Welcome back to GET.
                      </p> */}
                    </div>
                    {/* <div>
                      <p>Profile Progress: {completionPercentage}%</p>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${completionPercentage}%` }}
                        />
                      </div>
                  
                    </div> */}
                  </div>
                  <div className="grid  grid-cols-12  mb-5 ">
                    <div className="2xl:col-span-9 lg:col-span-12 col-span-12">
                      <div className="p-4 card">
                        <div className="grid md:grid-cols-3 col-span-1 gap-4 ">
                          {/* <!-- BEGIN: Group Chart2 --> */}

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
                                  Total Resources
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  22
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
                                  Total Students
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  300
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
                                  Pending
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  200
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- END: Group Chart2 --> */}
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
    </>
  );
};

export default Layout;
