import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu, Search } from "react-feather";
import logo from "../../../assets/images/logo.png";
import {
  useUpdateCourseMutation,
  useGetCourseQuery,
} from "../../../services/signUpApi";
import Sidebar from "../../sidebar/Sidebar";
import StudentNotification from "../../studentNotification/StudentNotification";

const HighSchoolCourse = () => {
  const navigate = useNavigate();
  const [highSchoolData, setHighSchoolData] = useState([]);
  const [highFullName, setHighFullName] = useState("");
  const [highCourseName, setHighCourseName] = useState("");
  const [highBoardOrUniversityName, setHighBoardOrUniversityName] =
    useState("");

  const [highSchoolOrCollageName, setHighSchoolOrCollageName] = useState("");
  const [highId, setHighId] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // for HighSchool duration Type
  const [highDurationType, setHighDurationType] = useState("default");

  const handleHighDurationType = (event) => {
    setHighDurationType(event.target.value);
  };

  // for HighSchool Course Type
  const [highCourseType, setHighCourseType] = useState("default");

  const handleHighCourseType = (event) => {
    setHighCourseType(event.target.value);
  };

  const { data, isSuccess } = useGetCourseQuery();
  useEffect(() => {
    if (data && isSuccess && data.data.length > 0) {
      const highSchoolCourse = data.data.find(
        (item) => item.courseLevel === "High School" && item.onGoing === false
      );
      setHighSchoolData(highSchoolCourse ? [highSchoolCourse] : []);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    const ids = highSchoolData.map((item) => item.id).join(", ");
    setHighId(ids);
  }, [highSchoolData]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const [updateCourse] = useUpdateCourseMutation();

  const clearHighTextInput = () => {
    setHighFullName("");
    setHighCourseName("");
    setHighSchoolOrCollageName("");
    setHighBoardOrUniversityName("");
    setHighCourseType("default");
    setHighDurationType("default");
  };

  const handleHighSubmit = async (e) => {
    e.preventDefault();
    try {
      const highData ={courseId:highId,fullName:highFullName,courseName:highCourseName,schoolOrCollageName:highSchoolOrCollageName,boardOrUniversityName:highBoardOrUniversityName,durationType:highDurationType,
     courseType:highCourseType }
      console.log(highData);
      const res = await updateCourse(highData);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        clearHighTextInput();
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate("/student/course");
      }
    } catch (error) {
      console.log(error);
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
                    <Menu onClick={toggleSidebar} />
                    {isSidebarVisible && <Sidebar toggle={toggleSidebar} />}
                  </button>
                  <button className="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 rtl:rotate-180 md:hidden">
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
                <div className="card xl:col-span-2 mt-5">
                  <div className="card-body flex flex-col p-6">
                    <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-2 -mx-6 px-6">
                      <div className="flex-1">
                        <div className="card-title text-slate-900 dark:text-white">
                          HighSchool
                        </div>
                      </div>
                    </header>
                    <div className="card-text h-full ">
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Full Name
                            </label>
                            <input
                              style={{ fontSize: "12px" }}
                              type="text"
                              className="form-control"
                              placeholder="Full Name"
                              value={highFullName}
                              onChange={(e) => setHighFullName(e.target.value)}
                            />
                          </div>
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Course Name
                            </label>
                            <input
                              style={{ fontSize: "12px" }}
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Course"
                              value={highCourseName}
                              onChange={(e) =>
                                setHighCourseName(e.target.value)
                              }
                            />
                          </div>

                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Board Name
                            </label>
                            <input
                              style={{ fontSize: "12px" }}
                              type="text"
                              className="form-control"
                              placeholder="Board Name"
                              value={highBoardOrUniversityName}
                              onChange={(e) =>
                                setHighBoardOrUniversityName(e.target.value)
                              }
                            />
                          </div>
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              School Name
                            </label>
                            <input
                              style={{ fontSize: "12px" }}
                              type="text"
                              className="form-control"
                              placeholder="School Name"
                              value={highSchoolOrCollageName}
                              onChange={(e) =>
                                setHighSchoolOrCollageName(e.target.value)
                              }
                            />
                          </div>

                          <div className="input-area">
                            <label
                              htmlFor="highschooldurationtype"
                              className="form-label"
                            >
                              Duration Type
                            </label>
                            <select
                              id="highschooldurationtype"
                              className="form-control"
                              value={highDurationType}
                              onChange={handleHighDurationType}
                              style={{ fontSize: "12px" }}
                            >
                              <option
                                value="default"
                                className="dark:bg-slate-700"
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
                          <div className="input-area">
                            <label
                              htmlFor="highcoursetype"
                              className="form-label"
                            >
                              Course Type
                            </label>
                            <select
                              id="highcoursetype"
                              className="form-control"
                              value={highCourseType}
                              onChange={handleHighCourseType}
                              style={{ fontSize: "12px" }}
                            >
                              <option
                                value="default"
                                className="dark:bg-slate-700"
                                disabled
                              >
                                Select Course Type
                              </option>
                              <option
                                value="certification"
                                className="dark:bg-slate-700"
                              >
                                Certification
                              </option>
                              <option
                                value="diploma"
                                className="dark:bg-slate-700"
                              >
                                Diploma
                              </option>
                              <option
                                value="degree"
                                className="dark:bg-slate-700"
                              >
                                Degree
                              </option>
                            </select>
                          </div>
                          <div className="input-area">
                            <label htmlFor="typeOfGrade" className="form-label">
                              Type Of Grade
                            </label>
                            <select
                              id="currentcoursetype"
                              className="form-control"
                              // value={currentCourseType}
                              // onChange={handleCurrentCourseType}
                              style={{ fontSize: "12px" }}
                            >
                              <option
                                value="default"
                                className="dark:bg-slate-700"
                                selected
                              >
                                Select an Option
                              </option>
                              <option
                                value="Percentage"
                                className="dark:bg-slate-700"
                              >
                                Percentage
                              </option>
                              <option
                                value="Cgpa"
                                className="dark:bg-slate-700"
                              >
                                CGPA
                              </option>
                              <option
                                value="Sgpa"
                                className="dark:bg-slate-700"
                              >
                                SGPA
                              </option>
                              {/* <option
                                value="others"
                                className="dark:bg-slate-700"
                              >
                                Others
                              </option> */}
                            </select>
                          </div>
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Obtained Marks
                            </label>
                            <input
                              style={{ fontSize: "12px" }}
                              type="text"
                              className="form-control"
                              placeholder="Obtained Marks"
                            />
                          </div>
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Total Marks
                            </label>
                            <input
                              style={{ fontSize: "12px" }}
                              type="text"
                              className="form-control"
                              placeholder="Total Marks"
                            />
                          </div>
                        </div>

                        <button
                          className="btn inline-flex justify-center btn-dark"
                          type="submit"
                          onClick={(e) => handleHighSubmit(e)}
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
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default HighSchoolCourse;
