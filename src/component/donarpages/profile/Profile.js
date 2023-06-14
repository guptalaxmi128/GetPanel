import React, { useState, useEffect } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import {
  useAddDonarProfileImageMutation,
  useGetDonarQuery,
  useGetDonarNotificationQuery,
  useUpdateDonarProfileMutation,
  useGetDonarProfileImageQuery
} from "../../../services/signUpApi";
import Sidebar from "../sidebar/Sidebar";
import user from "../../../assets/images/user/user-1.jpg";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [donarData,setDonarData]=useState('');
  const [notification, setNotification] = useState("");
  const [isNotification, setIsNotification] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Donar logout successfully!");
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { data, isSuccess } = useGetDonarQuery();
  const { data: donarNotification, isSuccess: donarIsSuccess } =
    useGetDonarNotificationQuery();

//   // console.log(studentNotification);
//   // console.log("data", data);

  useEffect(() => {
    if (donarNotification && donarIsSuccess && donarNotification.data) {
      setNotification(donarNotification.data);
    }
  }, [donarNotification, donarIsSuccess]);

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setDonarData(data.data)
      setName(data.data.name);
      setEmail(data.data.email);
      setMobileNumber(data.data.mobileNumber);
    }
  }, [data, isSuccess]);

  const { data: profileData, isSuccess: profileIsSuccess } =
  useGetDonarProfileImageQuery();
// // console.log("image", profileData.data[0].profileImage);

useEffect(() => {
  if (profileData && profileIsSuccess && profileData.data[0]) {
    const firstProfileImage = profileData.data[0].profileImage;
    if (firstProfileImage) {
      setProfileImage(firstProfileImage);
    }
  }
}, [profileData, profileIsSuccess]);
// console.log(profileImage);

  const [updateDonar] = useUpdateDonarProfileMutation();
  const [addDonarProfileImage]=useAddDonarProfileImageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      address,
      email,
      mobileNumber
    };
    console.log(formData);
    const res = await updateDonar(formData);
    alert("Profile updated successfully!");
    console.log(res);
    // clearTextInput();
  };

  const handleProfileChange = async (event) => {
    try {
      const formData = new FormData();
      formData.append("donarProfileImage", event.target.files[0]);

      const res = await addDonarProfileImage(formData);
      console.log(res);
      alert("Profile Image added successfully !");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("fileInput").click();
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
                              <LogoutIcon
                                style={{ fontSize: "medium" }}
                              />
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
            class="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div class="page-content">
              <div id="content_layout">
                <div className="space-y-5 profile-page">
                  <div
                    className="profile-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0
                space-y-6 justify-between items-end relative z-[1]"
                  >
                    <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
                    <div className="profile-box flex-none md:text-start text-center">
                      <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                        <div className="flex-none">
                          <div
                            className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4
                                ring-slate-100 relative"
                          >
                            <img
                              src={user}
                              alt="profile-image"
                              className="w-full h-full object-cover rounded-full"
                            />
                            <input
                              type="file"
                              id="fileInput"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={handleProfileChange}
                            />
                            <p
                              
                              className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center
                                    justify-center md:top-[140px] top-[100px]"
                              onClick={handleImageSubmit}
                            >
                              {/* <iconify-icon icon="heroicons:pencil-square"></iconify-icon> */}
                              <CreateRoundedIcon />
                            </p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                            {name}
                          </div>
                          <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                            Front End Developer
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end profile box --> */}
                    <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
                      <div className="flex-1 ">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1 mt-3 ">
                          EMAIL
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300 ">
                          {email}
                        </div>
                      </div>
                      {/* <!-- end single --> */}
                      <div className="flex-1">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1 mt-3">
                          PHONE
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                          +91{mobileNumber}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1 mt-3">
                          LOCATION
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                       {donarData.address}
                        </div>
                      </div>
                    </div>
                    {/* <img src={qrCode} alt="qrCode-image" style={{width:'100px' ,height:'100px',marginTop:'auto'}} /> */}
                    {/* <!-- profile info-500 --> */}
                  </div>
                  {/* <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-4 col-span-12">
                      <div className="card h-full">
                        <header className="card-header">
                          <h4 className="card-title">Info</h4>
                        </header>
                        <div className="card-body p-6">
                          <ul className="list space-y-8">
                            <li className="flex space-x-3 rtl:space-x-reverse">
                              <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                                <iconify-icon icon="heroicons:envelope"></iconify-icon>
                              </div>
                              <div className="flex-1">
                                <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                                  EMAIL
                                </div>
                                <a
                                  href="mailto:someone@example.com"
                                  className="text-base text-slate-600 dark:text-slate-50"
                                >
                                  info-example@email.com
                                </a>
                              </div>
                            </li>
                            <!-- end single list -->
                            <li className="flex space-x-3 rtl:space-x-reverse">
                              <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                                <iconify-icon icon="heroicons:phone-arrow-up-right"></iconify-icon>
                              </div>
                              <div className="flex-1">
                                <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                                  PHONE
                                </div>
                                <a
                                  href="#"
                                  className="text-base text-slate-600 dark:text-slate-50"
                                >
                                  +919540478632
                                </a>
                              </div>
                            </li>
                            <!-- end single list -->
                            <li className="flex space-x-3 rtl:space-x-reverse">
                              <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                                <iconify-icon icon="heroicons:map"></iconify-icon>
                              </div>
                              <div className="flex-1">
                                <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                                  LOCATION
                                </div>
                                <div className="text-base text-slate-600 dark:text-slate-50">
                                  #K-60, GF, RHS, JUNGPURA EXT.,
                                  <br />
                                  NEW DELHI - 110014
                                </div>
                              </div>
                            </li>
                            <!-- end single list -->
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <div className="lg:col-span-8 col-span-12">
                    <div className="card ">
                      <header className="card-header">
                        <h4 className="card-title">User Overview
                        </h4>
                      </header>
                      <div className="card-body">
                        <div id="areaChart"></div>
                      </div>
                    </div>
                  </div> */}
                </div>



                <div className="card xl:col-span-2 mt-5">
                  <div className="card-body flex flex-col p-6">
                    <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                      <div className="flex-1">
                        <div className="card-title text-slate-900 dark:text-white">
                          Profile
                        </div>
                      </div>
                    </header>
                    {data && donarData.address ? (
                      <div className="card-text h-full">
                      <form className="space-y-4" id="multipleValidation">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="input-area">
                            <label htmlFor="name" className="form-label">
                              Donar Name
                            </label>
                            <div className="relative form-control">
                           {donarData.name}
                            </div>
                          </div>
                          <div className="input-area">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <div className="relative form-control">
                           {donarData.email}
                            </div>
                          </div>
                          <div className="input-area">
                            <label
                              htmlFor="mobile_number"
                              className="form-label"
                            >
                              Mobile Number
                            </label>
                            <div className="relative form-control">
                            {donarData.mobileNumber}
                            </div>
                          </div>
                          <div className="input-area">
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                            <div className="relative form-control">
                           {donarData.address}
                            </div>
                          </div>
                        </div>
                       
                      </form>
                    </div>
                    ):(  <div className="card-text h-full">
                      <form className="space-y-4" id="multipleValidation">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="input-area">
                            <label htmlFor="name" className="form-label">
                              Student's Name
                            </label>
                            <div className="relative">
                              <input
                                id="name"
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Donar Name"
                                value={name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="input-area">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <div className="relative">
                              <input
                                id="email"
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                required="required"
                                value={email}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="input-area">
                            <label
                              htmlFor="mobile_number"
                              className="form-label"
                            >
                              Mobile Number
                            </label>
                            <div className="relative">
                              <input
                                id="mobile_number"
                                type="number"
                                name="mobile_number"
                                className="form-control"
                                placeholder="Mobile Number"
                                required="required"
                                value={mobileNumber}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="input-area">
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                            <div className="relative">
                              <input
                                id="address"
                                type="text"
                                name="address"
                                className="form-control"
                                placeholder="Current Address"
                                required="required"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
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
                    </div>)}
                  
                    <div></div>
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

export default Profile;
