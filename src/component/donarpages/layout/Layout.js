import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/logo.png";
import Sidebar from "../sidebar/Sidebar";
import {
  useGetDonarQuery,
  useGetDashboardTotalStudentsQuery,
  useGetDashboardTotalDonationQuery,
  useGetDashboardPendingQuery,
  useGetDonarProfileImageQuery
} from "../../../services/signUpApi";
import DonarNotification from "../donarNotification/DonarNotification";

const Layout = () => {
  const [name, setName] = useState("");
  const [totalStudents,setTotalStudents]=useState('');
  const [totalDonations,setTotalDonations]=useState('');
  const [pending,setPending]=useState('');
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const { data, isSuccess } = useGetDonarQuery();
  console.log(data)
  const { data: profileData, isSuccess: profileIsSuccess } =
  useGetDonarProfileImageQuery();

  const weights = {
    mobileNumber: 25,
    email: 25,
    name: 20,
    image: 5,
    address: 25,
  };

  useEffect(() => {
    if (isSuccess || profileIsSuccess) {
      const calculatedPercentage = calculateCompletionPercentage();
      setCompletionPercentage(calculatedPercentage);
    }
  }, [isSuccess, profileIsSuccess]);
  
  const calculateCompletionPercentage = () => {
    const totalWeight = Object.values(weights).reduce((acc, weight) => acc + weight, 0);
    const filledWeight = Object.keys(weights).reduce((acc, field) => {
      if (field === 'image') {
        return profileData ? acc + weights[field] : acc;
      }
      
      const fieldValue = data.data[field];
      if (fieldValue !== null && fieldValue !== undefined && fieldValue !== '') {
        return acc + weights[field];
      }
      
      return acc;
    }, 0);
  
    return Math.round((filledWeight / totalWeight) * 100);
  };

  // const completionPercentage = calculateCompletionPercentage();


  const [isSidebarVisible, setSidebarVisible] = useState(false);
 

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };



  //  console.log(data)

 

  const { data: dashboardStudent, isSuccess: dashboardStudentIsSuccess } =
 useGetDashboardTotalStudentsQuery();

 useEffect(() => {
  if (dashboardStudent && dashboardStudentIsSuccess && dashboardStudent.data) {
    const totalValue = dashboardStudent.data.totalStudent;
    setTotalStudents(totalValue);
  }
}, [dashboardStudent, dashboardStudentIsSuccess]);

const { data: totalDonation, isSuccess: totalDonationIsSuccess } =
useGetDashboardTotalDonationQuery();

const { data: pendingData, isSuccess: pendingDataIsSuccess } =
useGetDashboardPendingQuery();
console.log(pendingData)
console.log(dashboardStudent);

useEffect(() => {
  if (pendingData && pendingDataIsSuccess && pendingData.data) {
    setPending(pendingData.data.pendingRaiseFund)
  }
}, [pendingData, pendingDataIsSuccess]);

//  console.log(totalStudents)
//  console.log(dashboardStudent)

useEffect(() => {
  if (totalDonation && totalDonationIsSuccess && totalDonation.data) {
    const totalValue = totalDonation.data[0].total;
    setTotalDonations(totalValue === null ?  0 :totalValue);  
  
  }
}, [totalDonation, totalDonationIsSuccess]);




  useEffect(() => {
    if (data && isSuccess) {
      setName(data.data.name);
    }
  });

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
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
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
               
                {/* <div className="nav-tools flex items-center lg:space-x-5 space-x-3 rtl:space-x-reverse leading-0">
                
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
                    <!-- Dropdown menu -->
                    {isDropdownOpen && (
                      <div
                        className=" z-10  bg-white divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-700 top-[23px] rounded-md
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
                              <LogoutIcon style={{ fontSize: "medium" }} />{" "}
                              &nbsp;
                              <span className="font-Inter">Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <!-- END: Header -->
                  <button className="smallDeviceMenuController md:hidden block leading-0">
                    <iconify-icon
                      className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon>
                  </button>
                  <!-- end mobile menu -->
                </div> */}
                <DonarNotification />
                {/* <!-- end nav tools --> */}
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
                      <p
                        style={{
                          color: "#8e8e8e",
                          fontSize: "16px",
                          fontFamily: "Poppins",
                        }}
                      >
                        Hii, {name}. Welcome back to GET.
                      </p>
                    </div>
                    <div>
                      <p>Profile Progress: {completionPercentage}%</p>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${completionPercentage}%` }}
                        />
                      </div>
                      {/* Render your profile fields here */}
                    </div>
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
                                  Total Donation
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  {totalDonations}
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
                                  {totalStudents}
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
                                  {pending}
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
