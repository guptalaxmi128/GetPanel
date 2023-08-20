import React, { useState, useEffect } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/logo.png";
import {
  useAddDonarProfileImageMutation,
  useGetDonarQuery,
  useUpdateDonarProfileMutation,
  useGetDonarProfileImageQuery,
  useUpdateDonarImageMutation,
} from "../../../services/signUpApi";
import Sidebar from "../sidebar/Sidebar";

import DonarNotification from "../donarNotification/DonarNotification";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [donarData, setDonarData] = useState("");
  const [id, setId] = useState("");

  // const localHost = "http://localhost:5000";
  const localHost="https://global-education-t.onrender.com"

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const { data, isSuccess } = useGetDonarQuery();

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setDonarData(data.data);
      setName(data.data.name);
      setEmail(data.data.email);
      setMobileNumber(data.data.mobileNumber);
    }
  }, [data, isSuccess]);

  const { data: profileData, isSuccess: profileIsSuccess } =
    useGetDonarProfileImageQuery();
  // console.log("image", profileData);

  useEffect(() => {
    if (profileData && profileIsSuccess && profileData.data) {
      const firstProfileImage = profileData.data.profileImage_FileName;
      const id = profileData.data.id;
      if (firstProfileImage) {
        setProfileImage(firstProfileImage);
        setId(id);
      }
    }
  }, [profileData, profileIsSuccess]);
  // console.log(id);

  const [updateDonar] = useUpdateDonarProfileMutation();
  const [addDonarProfileImage] = useAddDonarProfileImageMutation();
  const [updateDonarImage] = useUpdateDonarImageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      address,
      email,
      mobileNumber,
    };
    // console.log(formData);
    const res = await updateDonar(formData);
    console.log(res);
    // clearTextInput();
    if(res.data.success){
      toast.success(res.data.message);
    }
  };


  const handleProfileChange = async (event) => {
    try {
      const formData = new FormData();
      formData.append("donarProfileImage", event.target.files[0]);
      formData.append("id", id);
      let response;
      let isUpdate = false;

      if (profileImage) {
        response = await updateDonarImage(formData);
        isUpdate = true;
      } else {
        response = await addDonarProfileImage(formData);
      }
      // console.log("API Response:", response);

      if (response.data.success) {
        const message = isUpdate
          ? response.data.message
          : response.data.message;
        toast.success(message);
        setProfileImage(Date.now());
      } else {
        toast.error("Failed to update profile image.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating profile image.");
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("fileInput").click();
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
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
                    <MenuIcon onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                </div>
                {/* <!-- end vertcial --> */}

                <DonarNotification />
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
                              src={`${localHost}/donarProfile/${profileImage}`}
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
                                    justify-center md:top-[140px] top-[100px] cursor-pointer"
                              onClick={handleImageSubmit}
                            >
                              {/* <iconify-icon icon="heroicons:pencil-square"></iconify-icon> */}
                              <CreateRoundedIcon />
                            </p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-4">
                            {name}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end profile box --> */}
                    <div
                      className="profile-info-500 md:flex md:text-start text-center flex-1 md:space-y-0 space-y-4"
                      style={{ maxWidth: "530px" }}
                    >
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
                    <header className="flex mb-3 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
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
                                Name
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
                    ) : (
                      <div className="card-text h-full">
                        <form className="space-y-4" id="multipleValidation">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="input-area">
                              <label htmlFor="name" className="form-label">
                                Name
                              </label>
                              <div className="relative">
                                <input
                                  id="name"
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Name"
                                  value={name}
                                  onChange={(e)=>setName(e.target.value)}
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
                      </div>
                    )}

                    <div></div>
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

export default Profile;
