import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Search } from "react-feather";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../sidebar/Sidebar";
import logo from "../../assets/images/logo.png";
import {
  useAddRaiseFundCourseMutation,
  useGetGapYearQuery,
  useGetProfileQuery,
  useUpdateRaiseFundMutation,
} from "../../services/signUpApi";
import StudentNotification from "../studentNotification/StudentNotification";

const EditRaiseFund = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
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
  const [requiredAmount, setRequiredAmount] = useState("");

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const { data, isSuccess } = useGetGapYearQuery();
  console.log("Raise Fund", data);

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setFullName(data.data.studentName);
      setCourseName(data.data.courseName);
      setCurrentCourse(data.data.currentCourse); //modified currentCourse
      setBoardOrUniversityName(data.data.boardOrUniversityName);
      setSchoolOrCollageName(data.data.schoolOrCollageName);
      setGapInEducation(data.data.gapInEducation);
      setCourseFees(data.data.courseFees);
      setDurationType(data.data.durationType);
      setCurrentCourseId(data.data.currentCourseId);
      setId(data.data.id);
      setYourContribution(data.data.yourContribution);
      setRequiredAmount(data.data.yourRequirements);
      setExtraFees(data.data.extraFees);
      setQualification(data.data.qualification);
    }
  }, [data, isSuccess]);

  console.log(id);

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

  const handleCourseFeeChange = (event) => {
    const newCourseFee = parseInt(event.target.value);
    const newRequiredAmount = newCourseFee - yourContribution;
    setCourseFees(newCourseFee);
    // setRequiredAmount(newRequiredAmount);
  };

  const handleYourContributionChange = (event) => {
    const newYourContribution = parseInt(event.target.value);
    const newRequiredAmount = courseFees - newYourContribution;
    setYourContribution(newYourContribution);
    // setRequiredAmount(newRequiredAmount);
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

  const [updateRaiseFund] = useUpdateRaiseFundMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        raiseFundId: id,
        studentName: fullName,
        courseName,
        schoolOrCollageName,
        boardOrUniversityName,
        durationType,
        whyDoYouRequiredFinancialHelf: financialHelp,
        extraFees,
        courseFees,
        yourContribution,
        qualification,
        currentCourseId,
      };
      if (gapJustification) {
        formData.gapJustification = gapJustification;
      }
      // formData.append("raiseFundId",id);
      // formData.append("studentName", fullName);
      // formData.append("currentCourse", currentCourse);
      // formData.append("courseName", courseName);
      // formData.append("schoolOrCollageName", schoolOrCollageName);
      // formData.append("boardOrUniversityName", boardOrUniversityName);
      // formData.append("durationType", durationType);
      // formData.append("whyDoYouRequiredFinancialHelf", financialHelp);
      // formData.append("extraFees", extraFees);
      // formData.append("gapInEducation", gapInEducation);
      // formData.append("courseFees", courseFees);
      // formData.append("yourContribution", yourContribution);
      // formData.append("yourRequirements", requiredAmount);
      // formData.append("qualification", qualification);
      // formData.append("currentCourseId", currentCourseId);
      // formData.append("feeReceipt", feeReceipt);
      // if (gapJustification) {
      //   formData.append("gapJustification", gapJustification);
      // }

      // if (gapDocument && gapDocument.length > 0) {
      //   gapDocument.forEach((file) => {
      //     formData.append("gapDocument", file);
      //   });
      // }

      console.log(formData);
      const res = await updateRaiseFund(formData);

      console.log(res);
      if (res.data.success) {
        toast.success(` Your contribution is ₹ ${yourContribution}
       
        You cannot change it in future.`);
        toast.success(res.data.message);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/student/raise-fund");
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
                    {/* <img
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
                    <Menu onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
                    {/* <iconify-icon icon="ph:arrow-right-bold"></iconify-icon> */}
                    <Menu onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button
                    className="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 focus:outline-none focus:shadow-none px-1 space-x-3
        rtl:space-x-reverse search-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <Search />
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
                    <Search />
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
                      <Search />
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
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] ml-0 ml-248px"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div className="page-content">
              <div id="content_layout">
                <div className="card xl:col-span-2">
                  <div className="card-body flex flex-col p-6">
                    <header className="flex mb-3 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
                      <div className="flex-1">
                        <div
                          className="card-title text-slate-900 dark:text-white"
                          style={{ fontSize: "18px" }}
                        >
                          {" "}
                          Raise Fund for your Education
                        </div>
                      </div>
                    </header>
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
                              onChange={(e) => setFullName(e.target.value)}
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
                              onChange={(e) => setQualification(e.target.value)}
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
                              onChange={(e) =>
                                setBoardOrUniversityName(e.target.value)
                              }
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
                              onChange={(e) =>
                                setSchoolOrCollageName(e.target.value)
                              }
                            />
                          </div>

                          {/* <div className="input-area relative">
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
                            </div> */}

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
                              onChange={(e) => setCourseName(e.target.value)}
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
                              onChange={(e) => setDurationType(e.target.value)}
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
                          {gapInEducation > 0 && (
                            <>
                              <div className="input-area">
                                <label for="description" className="form-label">
                                  Could you please provide some insight into the
                                  reasons or circumstances that led to the gap
                                  in your education?
                                </label>
                                <textarea
                                  style={{ fontSize: "13px" }}
                                  id="description"
                                  rows="5"
                                  className="form-control"
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
                              {/* <div className="input-area relative">
                                  <label for="fileInput" className="form-label">
                                    Certificate Upload (Could you please upload
                                    the document or file that provides
                                    information about your education gap?)
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
                                </div> */}
                            </>
                          )}

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
                          <div className="input-area">
                            <label for="description" className="form-label">
                              Why do you required Financial
                              Assessment/Additional Help{" "}
                            </label>
                            <textarea
                              style={{ fontSize: "13px" }}
                              id="description"
                              rows="5"
                              className="form-control"
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
                        </div>
                      </form>
                    </div>
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

export default EditRaiseFund;
