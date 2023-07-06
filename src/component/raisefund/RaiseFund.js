import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from "../sidebar/Sidebar";
import user from "../../assets/images/user/user-1.jpg";
import close from "../../assets/close.png";
import edit from "../../assets/edit.png";
import {
  useAddRaiseFundCourseMutation,
  useGetGapYearQuery,
  useGetProfileQuery,
} from "../../services/signUpApi";

const RaiseFund = () => {
  const [name, setName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [boardOrUniversityName, setBoardOrUniversityName] = useState("");
  const [schoolOrCollageName, setSchoolOrCollageName] = useState("");
  const [gapInEducation, setGapInEducation] = useState("");
  const [durationType, setDurationType] = useState("");
  const [feeReceipt, setFeeReceipt] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [currentCourse, setCurrentCourse] = useState("");
  const [qualification, setQualification] = useState("");
  const [gapJustification, setGapJustification] = useState("");
  const [financialHelp, setFinancialHelp] = useState("");
  const [extraFees, setExtraFees] = useState("default");
  const [gapDocument, setGapDocument] = useState([]);
  const [currentCourseId, setCurrentCourseId] = useState("");
  const [fullName, setFullName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [gapJustificationError, setGapJustificationError] = useState("");
  const [financialHelpError, setFinancialHelpError] = useState("");

  const [courseFees, setCourseFees] = useState("");
  const [yourContribution, setYourContribution] = useState("");
  const [requiredAmount, setRequiredAmount] = useState(
    courseFees - yourContribution
  );
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  const { data, isSuccess } = useGetGapYearQuery();
  console.log("Raise Fund", data);

  useEffect(() => {
    if (data && isSuccess) {
      setFullName(data.data.studentName);
      setCourseName(data.data.courseName);
      setCurrentCourse(data.data.currentCourse); //modified currentCourse
      setBoardOrUniversityName(data.data.boardOrUniversityName);
      setSchoolOrCollageName(data.data.schoolOrCollageName);
      setGapInEducation(data.data.gapInEducation);
      // setDocument(data.data.document);
      setDurationType(data.data.durationType);
      setCurrentCourseId(data.data.currentCourseId);
    }
  }, [data, isSuccess]);

  // const handleSubmit = () => {
  //   setShowAlert(true);
  // };

  const handleFeeReceiptChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;

    // Check if the selected file is either an image or a PDF
    if (fileType.startsWith("image/") || fileType === "application/pdf") {
      setFeeReceipt(file);
      setErrorMessage("");
    } else {
      // Reset the selected file if it's not an image or PDF
      setFeeReceipt(null);
      setErrorMessage("Please select a valid image or PDF file.");
    }
  };

  const handleGapJustificationChange = (event) => {
    const text = event.target.value;

    if (text.length >= 100 && text.length <= 2000) {
      setGapJustification(text);
      setGapJustificationError("");
    } else {
      setGapJustification(text);
      setGapJustificationError(
        "Please enter at least 100 and at most 2000 characters."
      );
    }
  };

  const handleFinancialHelpChange = (event) => {
    const text = event.target.value;

    if (text.length >= 200 && text.length <= 3000) {
      setFinancialHelp(text);
      setFinancialHelpError("");
    } else {
      setFinancialHelp(text);
      setFinancialHelpError(
        "Please enter at least 200 and at most 2000 characters."
      );
    }
  };
  const { data: userData, isSuccess: userIsSuccess } = useGetProfileQuery();

  useEffect(() => {
    if (userData && userIsSuccess) {
      setName(userData.name);
    }
  }, [userData, userIsSuccess]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCourseFeeChange = (event) => {
    const newCourseFee = parseInt(event.target.value);
    const newRequiredAmount = newCourseFee - yourContribution;
    setCourseFees(newCourseFee);
    setRequiredAmount(newRequiredAmount);
  };

  const handleYourContributionChange = (event) => {
    const newYourContribution = parseInt(event.target.value);
    const newRequiredAmount = courseFees - newYourContribution;
    setYourContribution(newYourContribution);
    setRequiredAmount(newRequiredAmount);
  };

  // for multiple images and pdf
  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setGapDocument(fileList);
  };

  const handleExtraFeesChange = (event) => {
    const value = event.target.value;
    setExtraFees(value);
  };

  const [addRaiseFundCourse] = useAddRaiseFundCourseMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("studentName", fullName);
      formData.append("currentCourse", currentCourse);
      formData.append("courseName", courseName);
      formData.append("schoolOrCollageName", schoolOrCollageName);
      formData.append("boardOrUniversityName", boardOrUniversityName);
      formData.append("durationType", durationType);
      formData.append("whyDoYouRequiredFinancialHelf", financialHelp);
      formData.append("extraFees", extraFees);
      formData.append("gapInEducation", gapInEducation);
      formData.append("courseFees", courseFees);
      formData.append("yourContribution", yourContribution);
      formData.append("yourRequirements", requiredAmount);
      formData.append("qualification", qualification);
      formData.append("currentCourseId", currentCourseId);
      formData.append("feeReceipt", feeReceipt);
      if (gapJustification) {
        formData.append("gapJustification", gapJustification);
      }

      if (gapDocument && gapDocument.length > 0) {
        gapDocument.forEach((file) => {
          formData.append("gapDocument", file);
        });
      }
      const res = await addRaiseFundCourse(formData);
      setShowAlert(true);
      console.log(res);
      if (res.data.success) {
        setShowAlert(!showAlert);
        setShowAlertModal(true);
        clearTextInput();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearTextInput = () => {
    setCourseFees("");
    setExtraFees("default");
    // setRequiredAmount("");
    setGapDocument(null);
    setQualification("");
    setFinancialHelp("");
    // setYourContribution('');
    setGapJustification("");
    setGapDocument(null);
  };

  //  console.log(document);
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

                <div className="main-menu">
                  <ul>
                    <li
                      className="
             menu-item-has-children 
              "
                    >
                      {/* <!--  Single menu --> */}

                      {/* <!-- has dropdown --> */}

                      {/* <a href="javascript:void()">
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
                      </a> */}
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
                        {name}
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
                        className="dropdown-menu z-10  bg-white divide-y divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-700 top-[23px] rounded-md
      overflow-hidden absolute
      "
                      >
                        <ul className="py-1 text-sm text-slate-800 dark:text-slate-200">
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
                              <LogoutIcon style={{ fontSize: "medium" }} />{" "}
                              &nbsp;
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

          <div
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div className="page-content">
              <div id="content_layout">
                <div className="card xl:col-span-2">
                  <div className="card-body flex flex-col p-6">
                    <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                      <div className="flex-1 flex justify-between">
                        <div className="card-title text-slate-900 dark:text-white">
                          {" "}
                          Raise Fund for your Education
                        </div>
                        <div className="flex">
                          <img
                            src={edit}
                            alt="edit"
                            style={{ width: "17px", height: "17px" }}
                          />{" "}
                          &nbsp;
                          <div className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white">
                            Edit
                          </div>
                        </div>
                      </div>
                    </header>
                    {data && data.data.extraFees ? (
                      <div className="card-text h-full">
                        <form
                          className="space-y-4"
                          //   id="multipleValidation"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Full Name
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {fullName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Current Course
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {currentCourse}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Qualification
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {data.data.qualification}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board / University Name
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {boardOrUniversityName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                School / College Name
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {schoolOrCollageName}
                              </div>
                            </div>

                            {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Fee Receipt Upload 
                            </label>
                          
                            
                          </div> */}

                            {/* <div className="grid md:grid-cols-2 gap-6"> */}
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Name
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {courseName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label
                                for="largeInput"
                                className="form-label"
                                style={{ fontSize: "13px" }}
                              >
                                Gap in Education
                              </label>
                              <div className="relative form-control">
                                {gapInEducation}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="durationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {durationType}
                              </div>
                            </div>
                            {/* <div class="input-area">
                            <label for="description" class="form-label">
                              Could you please provide some insight into the
                              reasons or circumstances that led to the gap in
                              your education?
                            </label>
                            <div className="relative form-control">
                                {data.data.gapJustification }
                              </div>
                             
                          </div> */}
                            {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Certificate Upload (Could you please upload the
                              document or file that provides information about
                              your education gap?)
                            </label>
                          </div> */}

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Fees
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {data.data.courseFees}
                              </div>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Your Contribution
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {data.data.yourContribution}
                              </div>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Your Requirements
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {data.data.yourRequirements}
                              </div>
                            </div>

                            <div className="input-area">
                              <label htmlFor="extraFees" className="form-label">
                                Extra Fees (if any)
                              </label>
                              <div
                                className="relative form-control"
                                style={{ fontSize: "13px" }}
                              >
                                {data.data.extraFees}
                              </div>
                            </div>
                            {/* <div class="input-area">
                            <label for="description" class="form-label">
                              Why do you required Financial
                              Assessment/Additional Help{" "}
                            </label>
                            <div className="relative form-control">
                                {data.data.financialHelp}
                              </div>
                          </div> */}
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="card-text h-full">
                        <form
                          className="space-y-4"
                          //   id="multipleValidation"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Full Name
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                value={fullName}
                                disabled
                              />
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Current Course
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="Current Course"
                                value={currentCourse}
                                disabled
                              />
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Qualification
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="Qualification"
                                value={qualification}
                                onChange={(e) =>
                                  setQualification(e.target.value)
                                }
                              />
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board / University Name
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="Board / University Name"
                                value={boardOrUniversityName}
                                disabled
                              />
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                School / College Name
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="School / College Name"
                                value={schoolOrCollageName}
                                disabled
                              />
                            </div>

                            <div className="input-area relative">
                              <label for="fileInput" className="form-label">
                                Fee Receipt Upload
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="file"
                                id="fileInput"
                                className="form-control"
                                accept="image/*,.pdf"
                                onChange={handleFeeReceiptChange}
                              />
                              {errorMessage && (
                                <p style={{ fontSize: "12px", color: "red" }}>
                                  {errorMessage}
                                </p>
                              )}
                            </div>

                            {/* <div className="grid md:grid-cols-2 gap-6"> */}
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Name
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="Course Name"
                                value={courseName}
                                disabled
                              />
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Gap in Education
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="text"
                                className="form-control"
                                placeholder="Your Answer"
                                value={gapInEducation}
                                disabled
                              />
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="durationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <select
                                id="durationtype"
                                className="form-control"
                                value={durationType}
                                style={{ fontSize: "13px" }}
                                disabled
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  selected
                                  disabled
                                >
                                  Select Duration Type
                                </option>
                                <option
                                  value="semester"
                                  className="dark:bg-slate-700"
                                >
                                  Semester
                                </option>
                                <option
                                  value="yearly"
                                  className="dark:bg-slate-700"
                                >
                                  Yearly
                                </option>
                                <option
                                  value="monthly"
                                  className="dark:bg-slate-700"
                                >
                                  Monthly
                                </option>
                              </select>
                            </div>
                            <div class="input-area">
                              <label for="description" class="form-label">
                                Could you please provide some insight into the
                                reasons or circumstances that led to the gap in
                                your education?
                              </label>
                              <textarea
                                style={{ fontSize: "13px" }}
                                id="description"
                                rows="5"
                                class="form-control"
                                placeholder="Your Answer"
                                value={gapJustification}
                                onChange={handleGapJustificationChange}
                              />
                              {gapJustificationError && (
                                <p style={{ fontSize: "12px", color: "red" }}>
                                  {gapJustificationError}
                                </p>
                              )}
                            </div>
                            <div className="input-area relative">
                              <label for="fileInput" className="form-label">
                                Certificate Upload (Could you please upload the
                                document or file that provides information about
                                your education gap?)
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="file"
                                id="fileInput"
                                className="form-control"
                                multiple
                                accept="image/*,.pdf"
                                onChange={handleFileChange}
                              />
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Fees
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="number"
                                className="form-control"
                                placeholder="Course Fees"
                                value={courseFees}
                                onChange={handleCourseFeeChange}
                              />
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Your Contribution
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="number"
                                className="form-control"
                                placeholder="Your Contribution"
                                value={yourContribution}
                                onChange={handleYourContributionChange}
                              />
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Your Requirements
                              </label>
                              <input
                                style={{ fontSize: "13px" }}
                                type="number"
                                className="form-control"
                                placeholder="Your Requirements"
                                value={requiredAmount}
                                readOnly
                              />
                            </div>

                            <div className="input-area">
                              <label htmlFor="extraFees" className="form-label">
                                Extra Fees (if any)
                              </label>
                              <select
                                id="extraFees"
                                className="form-control"
                                value={extraFees}
                                onChange={handleExtraFeesChange}
                                style={{ fontSize: "13px" }}
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  selected
                                  disabled
                                >
                                  Select Extra Fees
                                </option>
                                <option
                                  value="exam"
                                  className="dark:bg-slate-700"
                                >
                                  Exam Fees
                                </option>
                                <option
                                  value="test"
                                  className="dark:bg-slate-700"
                                >
                                  Test Fees
                                </option>
                                <option
                                  value="book"
                                  className="dark:bg-slate-700"
                                >
                                  Book Fees
                                </option>
                                <option
                                  value="tour"
                                  className="dark:bg-slate-700"
                                >
                                  Tour Fees
                                </option>
                              </select>
                            </div>
                            <div class="input-area">
                              <label for="description" class="form-label">
                                Why do you required Financial
                                Assessment/Additional Help{" "}
                              </label>
                              <textarea
                                style={{ fontSize: "13px" }}
                                id="description"
                                rows="5"
                                class="form-control"
                                placeholder="Your Answer"
                                value={financialHelp}
                                onChange={handleFinancialHelpChange}
                              />
                              {financialHelpError && (
                                <p style={{ fontSize: "12px", color: "red" }}>
                                  {financialHelpError}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="relative">
                            <button
                              className="btn inline-flex justify-center btn-dark"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                            {showAlert && (
                              <div className="alert-modal">
                                <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                                  <div className="bg-white rounded-md p-6">
                                    <div className="text-lg font-bold mb-3">
                                      Alert
                                    </div>
                                    <div className="alert alert-danger light-mode">
                                      Your contribution is ₹{yourContribution}{" "}
                                      and your requirement is ₹{requiredAmount}.
                                      You cannot change it in future.
                                    </div>
                                    <div className="flex justify-end mt-6">
                                      {/* <button
                                      onClick={() => setShowAlert(false)}
                                      className="mr-3"
                                    >
                                      Edit
                                    </button> */}
                                      <button
                                        onClick={() => setShowAlert(false)}
                                      >
                                        OK
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </form>
                      </div>
                    )}

                    {showAlertModal && (
                      <>
                        <div className="alert-modal">
                          <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                            <div
                              className="bg-white rounded-md p-6 "
                              style={{
                                width: "500px",
                                height: "150px",
                                borderRadius: "5px",
                                padding: "20px",
                              }}
                            >
                              <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  marginLeft: "445px",
                                  marginTop: "3px",
                                  marginBottom: "5px",
                                  pointer: "cursor",
                                }}
                                alt="close"
                                onClick={() => setShowAlertModal(false)}
                              />
                              <div className="alert alert-danger light-mode">
                                Raise Fund created successfully! Thank you for
                                raising funds.
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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

export default RaiseFund;
