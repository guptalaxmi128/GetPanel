import React,{useState,useEffect} from 'react';
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import user from "../../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import {
    useGetProfileQuery,
    useGetNotificationQuery,
    useGetUpdationResponseQuery,
  } from "../../services/signUpApi";

const StudentNotification = () => {
    const [name, setName] = useState("");
    const [notification, setNotification] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        alert("Student logout successfully!");
      };

      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    const { data, isSuccess } = useGetProfileQuery();


    const { data: studentNotification, isSuccess: studentIsSuccess } =
      useGetNotificationQuery();
  
      const { data: updateAccountNotification, isSuccess: updateAccountIsSuccess } =
      useGetUpdationResponseQuery();
  
    // console.log(updateAccountNotification);
    // console.log("data", notification);
  
  
  
    useEffect(() => {
      if (studentNotification && studentIsSuccess && studentNotification.data) {
        setNotification(studentNotification.data);
      }
      if (updateAccountNotification && updateAccountIsSuccess && updateAccountNotification.data) {
        setNotification(prevNotification => [...prevNotification, ...updateAccountNotification.data]);
      }
    }, [studentNotification, studentIsSuccess, updateAccountNotification, updateAccountIsSuccess]);
  
    console.log(notification)
  
    useEffect(() => {
      if (data && isSuccess) {
        setName(data.name);
      }
    }, [data, isSuccess]);
 
  
    return (
        <>
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
                        className="z-10  bg-white divide-y divide-slate-100 dark:divide-slate-900 shadow w-[335px]
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
                                <div >
                                  <div className="text-slate-600 text-xs leading-4">
                                    {notification.message}
                                  </div>
                                  <div  className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white">
                                    {notification.link}
                                  </div>
                                  {notification.postingTime && (
                                    <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                                      {notification.createdAt}
                                    </div>
                                  )}
                                </div>
                                {notification.otp  && (
                                  <div>
                                    {/* <div className="flex-1"> */}
                                      <div className="text-slate-600 text-xs leading-4">
                                        {notification.responseMessage}
                                      </div>
                                      <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                                        {notification.createdAt}
                                      </div>
                                    </div>
                                
                                )}
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
                              {/* <iconify-icon
                              icon="heroicons-outline:login"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <LogoutIcon
                                style={{ fontSize: "medium" }}
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
        </>
    );
}



export default StudentNotification;