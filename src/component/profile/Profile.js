import React, { useState, useEffect } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "../sidebar/Sidebar";
import logo from "../../assets/images/logo.png";
import close from "../../assets/close.png";
import edit from "../../assets/edit.png";
import { Menu } from "react-feather";
import {
  useAddProfileImageMutation,
  useGetProfileImageQuery,
  useGetProfileQuery,
  useGetQRCodeQuery,
  useUpdateStudentImageMutation,
  useUpdateProfileMutation,
  useGetCourseQuery,
  useAddverifyOTPForUpdateProfileMutation,
  useAddOTPForUpdateProfileMutation,
} from "../../services/signUpApi";

import StudentNotification from "../studentNotification/StudentNotification";

const countries = [
  { country: "Afghanistan", nationality: "Afghan" },
  { country: "Albania", nationality: "Albanian" },
  { country: "Algeria", nationality: "Algerian" },
  { country: "Andorra", nationality: "Andorran" },
  { country: "Argentina", nationality: "Argentinian" },
  { country: "Australia", nationality: "Australian" },
  { country: "Austria", nationality: "Austrian" },
  { country: "Belgium", nationality: "Belgian" },
  { country: "Bolivia", nationality: "Bolivian" },
  { country: "Brazil", nationality: "Brazilian" },
  { country: "Bulgaria", nationality: "Bulgarian" },
  { country: "Cambodia", nationality: "Cambodian" },
  { country: "Canada", nationality: "Canadian" },
  { country: "Chile", nationality: "Chilean" },
  { country: "China", nationality: "Chinese" },
  { country: "Colombia", nationality: "Colombian" },
  { country: "Croatia", nationality: "Croatian" },
  { country: "Cuba", nationality: "Cuban" },
  { country: "Czech Republic", nationality: "Czech" },
  { country: "Denmark", nationality: "Danish" },
  { country: "Ecuador", nationality: "Ecuadorians" },
  { country: "Egypt", nationality: "Egyptian" },
  { country: "England", nationality: "English" },
  { country: "Ethiopia", nationality: "Ethiopian" },
  { country: "Finland", nationality: "Finnish" },
  { country: "France", nationality: "French" },
  { country: "Georgia", nationality: "Georgian" },
  { country: "Germany", nationality: "German" },
  { country: "Greece", nationality: "Greek" },
  { country: "Holland / the Netherlands", nationality: "Dutch" },
  { country: "Honduras", nationality: "Honduran" },
  { country: "Hungary", nationality: "Hungarian" },
  { country: "Iceland", nationality: "Icelander" },
  { country: "India", nationality: "Indian" },
  { country: "Iran", nationality: "Iranian" },
  { country: "Iraq", nationality: "Iraqi" },
  { country: "Ireland", nationality: "Irish" },
  { country: "Israel", nationality: "Israeli" },
  { country: "Italy", nationality: "Italian" },
  { country: "Jamaica", nationality: "Jamaican" },
  { country: "Japan", nationality: "Japanese" },
  { country: "Jordan", nationality: "Jordanian" },
  { country: "Kenya", nationality: "Kenyan" },
  { country: "Korea", nationality: "Korean" },
  { country: "Kuwait", nationality: "Kuwaiti" },
  { country: "Laos", nationality: "Laotian" },
  { country: "Latvia", nationality: "Latvian" },
  { country: "Lebanon", nationality: "Lebanese" },
  { country: "Lithuania", nationality: "Lithuanian" },
  { country: "Malaysia", nationality: "Malaysian" },
  { country: "Mexico", nationality: "Mexican" },
  { country: "New Zealand", nationality: "New Zealander" },
  { country: "Nicaragua", nationality: "Nicaraguan" },
  { country: "Norway", nationality: "Norwegian" },
  { country: "Pakistan", nationality: "Pakistani" },
  { country: "Panama", nationality: "Panamanian" },
  { country: "Peru", nationality: "Peruvian" },
  { country: "Philippines", nationality: "Filipino" },
  { country: "Poland", nationality: "Polish" },
  { country: "Portugal", nationality: "Portuguese" },
  { country: "Puerto Rico", nationality: "Puerto Rican" },
  { country: "Romania", nationality: "Romanian" },
  { country: "Russia", nationality: "Russian" },
  { country: "Saudi Arabia", nationality: "Saudi" },
  { country: "Slovakia", nationality: "Slovak" },
  { country: "Spain", nationality: "Spanish" },
  { country: "Sweden", nationality: "Swedish" },
  { country: "Switzerland", nationality: "Swiss" },
  { country: "Talwan", nationality: "Taiwanese" },
  { country: "Thailand", nationality: "Thai" },
  { country: "Turkey", nationality: "Turkish" },
  { country: "Ukraine", nationality: "Ukrainian" },
  { country: "United States", nationality: "American" },
  { country: "Venezuela", nationality: "Venezuelan" },
  { country: "Vietnam", nationality: "Vietnamese" },
];

const religions = [
  { religion: "Christianity" },
  { religion: "Islam" },
  { religion: "Hinduism" },
  { religion: "Buddhism" },
  { religion: "Sikhism" },
  { religion: "Judaism" },
  { religion: "Baháʼí Faith" },
  { religion: "Confucianism" },
  { religion: "Jainism" },
  { religion: "Shinto" },
  { religion: "Taoism" },
  { religion: "Zoroastrianism" },
];

const Profile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [UID, setUID] = useState("");
  const [name, setName] = useState("");
  const [qRCode, setQRCode] = useState("");
  const [id, setId] = useState("");
  const [userData, setUserData] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("default");
  const [nationality, setNationality] = useState("default");
  const [gender, setGender] = useState("default");
  const [currentAddress, setCurrentAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [religion, setReligion] = useState("default");
  const [occupation, setOccupation] = useState("");
  const [qualification, setQualification] = useState("");
  const [fromWhereHearAboutUs, setFromWhereHearAboutUs] = useState("default");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [currentCourse, setCurrentCourse] = useState("");
  const [verifyOtp, setVerifyOtp] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);

  const { data, isSuccess } = useGetProfileQuery();

  const handleDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setDateOfBirth(formattedDate);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const { data: course, isSuccess: courseIsSuccess } = useGetCourseQuery();
  useEffect(() => {
    if (course && courseIsSuccess && course.data.length > 0) {
      const currentCourse = course.data.find((item) => item.onGoing === true);

      const courseLevels = [currentCourse].map((item) => item.courseLevel);
      setCurrentCourse(courseLevels[0]);
    }
  }, [course, courseIsSuccess]);

  const [updateProfile] = useUpdateProfileMutation();

  const clearTextInput = () => {
    setName("");
    setFatherName("");
    setMotherName("");
    setDateOfBirth(null);
    setCurrentAddress("");
    setDistrict("");
    setGender("default");
    setMaritalStatus("default");
    setQualification("");
    setNationality("default");
    setMaritalStatus("default");
    setOccupation("");
    setReligion("default");
    setFromWhereHearAboutUs("default");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      fatherName,
      motherName,
      maritalStatus,
      nationality,
      gender,
      currentAddress,
      district,
      religion,
      occupation,
      fromWhereHearAboutUs,
      dateOfBirth,
      Qualification: qualification,
      email,
      mobileNumber,
    };
    console.log(formData);
    const res = await updateProfile(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      clearTextInput();
    }
  };

  useEffect(() => {
    if (data && isSuccess) {
      setUserData(data);
      setName(data.name);
      setMobileNumber(data.mobileNumber);
      setEmail(data.email);
      setUID(data.UID);
    }
  }, [data, isSuccess]);
  console.log(userData);

  // To change date format
  function formatDate(dateString) {
    if (!dateString) {
      console.error("Invalid date string.");
      return "";
    }

    const dateParts = dateString.split("-");

    if (dateParts.length !== 3) {
      console.error("Invalid date format. Expected format: yyyy-mm-dd");
      return "";
    }

    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const date = new Date(year, month - 1, day);

    if (isNaN(date)) {
      console.error("Invalid date.");
      return "";
    }

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formattedDate;
  }

  const formattedDate = formatDate(userData.dateOfBirth);

  const status = userData.maritalStatus;
  const response = status ? "married" : "unmarried";

  // const localHost = "http://localhost:5000";
  const localHost = "https://global-education-t.onrender.com";

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const { data: user, isSuccess: userIsSuccess } = useGetQRCodeQuery();
  const [addProfileImage] = useAddProfileImageMutation();
  const [updateStudentImage] = useUpdateStudentImageMutation();

  // console.log(userData)
  useEffect(() => {
    if (user && userIsSuccess) {
      setQRCode(user.data.qRCode);
    }
  }, [user, userIsSuccess]);

  const { data: profileData, isSuccess: profileIsSuccess } =
    useGetProfileImageQuery();
  // console.log("image", profileData);

  useEffect(() => {
    if (profileData && profileIsSuccess && profileData) {
      const firstProfileImage = profileData?.data.profileImage_FileName;
      const id = profileData?.data.id;
      if (firstProfileImage) {
        setProfileImage(firstProfileImage);
        setId(id);
      }
    }
  }, [profileData, profileIsSuccess]);
  // console.log(profileImage);

  // console.log(qRCode);

  const handleProfileChange = async (event) => {
    try {
      const formData = new FormData();
      formData.append("profileImage", event.target.files[0]);
      formData.append("id", id);
      let response;
      let isUpdate = false;

      if (profileImage) {
        response = await updateStudentImage(formData);
        isUpdate = true;
      } else {
        response = await addProfileImage(formData);
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

  const [addverifyOTPForUpdateProfile] =
    useAddverifyOTPForUpdateProfileMutation();

  const handleEditVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: verifyOtp,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateProfile(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      setVerifyOtp("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/student/edit-profile");
    }
  };

  const [addOTPForUpdateProfile] = useAddOTPForUpdateProfileMutation();

  const handleRequest = async () => {
    const { data } = await addOTPForUpdateProfile();

    if (data) {
      if (data.success) {
        toast.success(data.message);
        setShowEditModal(false);
      } else {
        toast.error(data.message);
      }
    } else {
      toast.error("Request already sent to Global Education Trust!");
    }
  };

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
            <div className="app-header z-[999] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700  ml-0 ml-248px">
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

          {/* <!-- BEGIN: Search Modal --> */}

          {/* <!-- END: Search Modal --> */}
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
                    className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0
                space-y-6 justify-between items-end relative z-[1]"
                  >
                    <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg flex justify-end">
                      <img
                        src={qRCode}
                        alt="qrCode-image"
                        className="bg-white"
                        style={{
                          margin: "30px",
                        }}
                      />
                    </div>

                    <div className="profile-box flex-none md:text-start text-center">
                      <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                        <div className="flex-none">
                          <div
                            className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4
                                ring-slate-100 relative"
                          >
                            <img
                              src={`${localHost}/studentFile/${profileImage}`}
                              alt="profile"
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
                    <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[525px] md:space-y-0 space-y-4">
                      <div className="flex-1 ">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1 ">
                          Current Course
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300 ">
                          {currentCourse}
                        </div>
                      </div>
                      {/* <!-- end single --> */}
                      <div className="flex-1">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                          UID
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                          {UID}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {userData.fatherName ? (
                  <div
                    className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
                    id="content_wrapper"
                    style={{ backgroundColor: "#F1F5F9" }}
                  >
                    <div className="page-content">
                      <div id="content_layout">
                        <div className="card xl:col-span-2 mt-5">
                          <div className="card-body flex flex-col p-6">
                            <header className="flex mb-3 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
                              <div className="flex-1">
                                <div className="card-title text-slate-900 dark:text-white">
                                  Profile
                                </div>
                              </div>
                              <div
                                className="flex"
                                style={{ marginRight: "22px" }}
                              >
                                <img
                                  src={edit}
                                  alt="edit"
                                  style={{ width: "17px", height: "17px" }}
                                />{" "}
                                &nbsp;
                                <div
                                  className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                                  onClick={() =>
                                    setShowEditModal(!showEditModal)
                                  }
                                >
                                  Edit
                                </div>
                              </div>
                            </header>
                            {showEditModal && (
                              <>
                                <div className="alert-modal">
                                  <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                                    <div
                                      className="bg-white rounded-md p-6 "
                                      style={{ width: "auto", height: "auto" }}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <div
                                          className="text-lg font-bold mb-3 text-center"
                                          style={{ flex: 1 }}
                                        >
                                          Update Request For Profile
                                        </div>
                                        <img
                                          src={close}
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            cursor: "pointer",
                                            marginBottom: "20px",
                                          }}
                                          alt="close"
                                          onClick={() =>
                                            setShowEditModal(false)
                                          }
                                        />
                                      </div>

                                      <div className="input-area ">
                                        <label
                                          htmlFor="verifyOtp"
                                          className="form-label"
                                        >
                                          Enter OTP
                                        </label>
                                        <div className="relative">
                                          <input
                                            id="verifyOtp"
                                            type="number"
                                            name="verifyOtp"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                            value={verifyOtp}
                                            onChange={(e) =>
                                              setVerifyOtp(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div
                                          className="text-slate-600 text-xs leading-4"
                                          style={{
                                            fontSize: "10px",
                                            margin: "8px",
                                          }}
                                        >
                                          {" "}
                                          Don't have OTP.{" "}
                                          <span
                                            onClick={handleRequest}
                                            style={{
                                              color: "blue",
                                              cursor: "pointer",
                                            }}
                                          >
                                            Click here
                                          </span>{" "}
                                          to send a request to the admin to edit
                                          your account details.
                                        </div>

                                        <button
                                          className="btn btn-dark block w-full text-center mt-3"
                                          onClick={handleEditVerifyOtp}
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            <>
                              <div className="card-text h-full">
                                <form
                                  className="space-y-4"
                                  id="multipleValidation"
                                >
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div className="input-area">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Student's Name
                                      </label>
                                      <div className="relative form-control">
                                        {userData.name}
                                      </div>
                                    </div>
                                    <div className="input-area">
                                      <label
                                        htmlFor="father_name"
                                        className="form-label"
                                      >
                                        Father's Name
                                      </label>
                                      <div className="relative form-control">
                                        {userData.fatherName}
                                      </div>
                                    </div>
                                    <div className="input-area">
                                      <label
                                        htmlFor="mother_name"
                                        className="form-label"
                                      >
                                        Mother's Name
                                      </label>
                                      <div className="relative form-control">
                                        {userData.motherName}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <div>
                                        <label
                                          htmlFor="default-picker"
                                          className="form-label"
                                        >
                                          Date of Birth
                                        </label>
                                        <div className="relative form-control">
                                          {formattedDate}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Gender
                                      </label>
                                      <div className="relative form-control">
                                        {userData.gender}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="nationality"
                                        className="form-label"
                                      >
                                        Nationality{" "}
                                      </label>
                                      <div className="relative form-control">
                                        {userData.nationality}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="current_address"
                                        className="form-label"
                                      >
                                        Current Address
                                      </label>
                                      <div className="relative form-control">
                                        {userData.currentAddress}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="district"
                                        className="form-label"
                                      >
                                        District
                                      </label>
                                      <div className="relative form-control">
                                        {userData.district}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="religion"
                                        className="form-label"
                                      >
                                        Religion
                                      </label>
                                      <div className="relative form-control">
                                        {userData.religion}
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
                                        {userData.mobileNumber}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="email"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                      <div className="relative form-control">
                                        {userData.email}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="occupation"
                                        className="form-label"
                                      >
                                        Occupation
                                      </label>
                                      <div className="relative form-control">
                                        {userData.occupation}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="status"
                                        className="form-label"
                                      >
                                        Marital Status
                                      </label>
                                      <div className="relative form-control">
                                        {response}
                                      </div>
                                    </div>

                                    <div className="input-area">
                                      <label
                                        htmlFor="qualification"
                                        className="form-label"
                                      >
                                        Qualification
                                      </label>
                                      <div className="relative form-control">
                                        {userData.Qualification}
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
                    id="content_wrapper"
                    style={{ backgroundColor: "#F1F5F9" }}
                  >
                    <div className="page-content">
                      <div id="content_layout">
                        <div className="card xl:col-span-2 mt-5">
                          <div className="card-body flex flex-col p-6">
                            <header className="flex mb-3 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
                              <div className="flex-1">
                                <div className="card-title text-slate-900 dark:text-white">
                                  Profile
                                </div>
                              </div>
                            </header>
                            <div className="card-text h-full">
                              <form
                                className="space-y-4"
                                id="multipleValidation"
                              >
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div className="input-area">
                                    <label
                                      htmlFor="name"
                                      className="form-label"
                                    >
                                      Student's Name
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Student's Name"
                                        value={name}
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                  <div className="input-area">
                                    <label
                                      htmlFor="father_name"
                                      className="form-label"
                                    >
                                      Father's Name
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="father_name"
                                        type="text"
                                        name="father_name"
                                        className="form-control"
                                        placeholder="Father's Name"
                                        required="required"
                                        value={fatherName}
                                        onChange={(e) =>
                                          setFatherName(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="input-area">
                                    <label
                                      htmlFor="mother_name"
                                      className="form-label"
                                    >
                                      Mother's Name
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="mother_name"
                                        type="text"
                                        name="mother_name"
                                        className="form-control"
                                        placeholder="Mother's Name"
                                        required="required"
                                        value={motherName}
                                        onChange={(e) =>
                                          setMotherName(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <div>
                                      <label
                                        htmlFor="default-picker"
                                        className="form-label"
                                      >
                                        Date of Birth
                                      </label>
                                      <div className="relative">
                                        <Flatpickr
                                          className="form-control"
                                          id="default-picker"
                                          value={dateOfBirth}
                                          onChange={handleDateChange}
                                          options={{
                                            dateFormat: "Y-m-d",
                                            enableTime: false,
                                            time_24hr: true, // Use 24-hour time format
                                            utc: false, // Set to false if you want to display local time
                                            timeZone: "UTC", // Set the desired time zone
                                          }}
                                          required="required"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="gender"
                                      className="form-label"
                                    >
                                      Gender
                                    </label>
                                    <div className="relative">
                                      <select
                                        id="gender"
                                        className="form-control"
                                        value={gender}
                                        onChange={handleGenderChange}
                                      >
                                        <option
                                          value="default"
                                          className="dark:bg-slate-700"
                                          disabled
                                        >
                                          Select Gender
                                        </option>
                                        <option
                                          value="Male"
                                          className="dark:bg-slate-700"
                                        >
                                          Male
                                        </option>
                                        <option
                                          value="Female"
                                          className="dark:bg-slate-700"
                                        >
                                          Female
                                        </option>
                                        <option
                                          value="Other"
                                          className="dark:bg-slate-700"
                                        >
                                          Other
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="nationality"
                                      className="form-label"
                                    >
                                      Nationality{" "}
                                    </label>
                                    <div className="relative">
                                      <select
                                        id="nationality"
                                        className="form-control"
                                        value={nationality}
                                        onChange={handleNationalityChange}
                                      >
                                        <option
                                          value="default"
                                          className="dark:bg-slate-700"
                                          disabled
                                        >
                                          Select Nationality
                                        </option>
                                        {countries.map((country, index) => (
                                          <option
                                            key={index}
                                            value={country.nationality}
                                            className="dark:bg-slate-700"
                                          >
                                            {country.nationality}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="current_address"
                                      className="form-label"
                                    >
                                      Current Address
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="current_address"
                                        type="text"
                                        name="current_address"
                                        className="form-control"
                                        placeholder="Current Address"
                                        required="required"
                                        value={currentAddress}
                                        onChange={(e) =>
                                          setCurrentAddress(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="district"
                                      className="form-label"
                                    >
                                      District
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="district"
                                        type="text"
                                        name="district"
                                        className="form-control"
                                        placeholder="District"
                                        required="required"
                                        value={district}
                                        onChange={(e) =>
                                          setDistrict(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="religion"
                                      className="form-label"
                                    >
                                      Religion
                                    </label>
                                    <div className="relative">
                                      <select
                                        id="religion"
                                        className="form-control"
                                        value={religion}
                                        onChange={(e) =>
                                          setReligion(e.target.value)
                                        }
                                      >
                                        <option value="default" disabled>
                                          Select Religion
                                        </option>
                                        {religions.map((religion, index) => (
                                          <option
                                            key={index}
                                            value={religion.religion}
                                          >
                                            {religion.religion}
                                          </option>
                                        ))}
                                      </select>
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
                                        value={mobileNumber}
                                        disabled
                                        // onChange={(e) =>
                                        //   setMobileNumber(e.target.value)
                                        // }
                                        // required="required"
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        disabled
                                        // onChange={(e) => setEmail(e.target.value)}
                                        // required="required"
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="occupation"
                                      className="form-label"
                                    >
                                      Occupation
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="occupation"
                                        type="text"
                                        name="occupation"
                                        className="form-control"
                                        placeholder="Occupation"
                                        required="required"
                                        value={occupation}
                                        onChange={(e) =>
                                          setOccupation(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="status"
                                      className="form-label"
                                    >
                                      Marital Status
                                    </label>
                                    <div className="relative">
                                      <select
                                        id="status"
                                        className="form-control"
                                        value={maritalStatus}
                                        onChange={(e) =>
                                          setMaritalStatus(e.target.value)
                                        }
                                      >
                                        <option
                                          value="default"
                                          className="dark:bg-slate-700"
                                          selected
                                          disabled
                                        >
                                          Select Status
                                        </option>
                                        <option
                                          value="false"
                                          className="dark:bg-slate-700"
                                        >
                                          Unmarried
                                        </option>
                                        <option
                                          value="true"
                                          className="dark:bg-slate-700"
                                        >
                                          Married
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="qualification"
                                      className="form-label"
                                    >
                                      Qualification
                                    </label>
                                    <div className="relative">
                                      <input
                                        id="qualification"
                                        type="text"
                                        name="qualification"
                                        className="form-control"
                                        placeholder="Qualification"
                                        required="required"
                                        value={qualification}
                                        onChange={(e) =>
                                          setQualification(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div className="input-area">
                                    <label
                                      htmlFor="social"
                                      className="form-label"
                                    >
                                      From where you here about us ?
                                    </label>
                                    <div className="relative">
                                      <select
                                        id="social"
                                        className="form-control"
                                        value={fromWhereHearAboutUs}
                                        onChange={(e) =>
                                          setFromWhereHearAboutUs(
                                            e.target.value
                                          )
                                        }
                                      >
                                        <option
                                          value="default"
                                          className="dark:bg-slate-700"
                                          disabled
                                        >
                                          Select Option
                                        </option>
                                        <option
                                          value="socialmedia"
                                          className="dark:bg-slate-700"
                                        >
                                          Social Media
                                        </option>
                                        <option
                                          value="option2"
                                          className="dark:bg-slate-700"
                                        >
                                          Option 2
                                        </option>
                                      </select>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form Start */}

      {/* Form End */}

      <ToastContainer />
    </>
  );
};

export default Profile;
