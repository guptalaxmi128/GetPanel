import React, { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../sidebar/Sidebar";
import edit from "../../assets/edit.png";
import {
  useAddCourseMutation,
  useGetCourseQuery,
} from "../../services/signUpApi";
import StudentNotification from "../studentNotification/StudentNotification";

const CurrentCourse = () => {
  const [currentData, setCurrentData] = useState("");
  const [highSchoolData, setHighSchoolData] = useState("");
  const [interData, setInterData] = useState("");
  const [graduationData, setGraduationData] = useState("");
  const [postGraduationData, setPostGraduationData] = useState("");

  const [showHighSchoolForm, setShowHighSchoolForm] = useState(false);
  const [showIntermediateForm, setShowIntermediateForm] = useState(false);
  const [showGraduationForm, setShowGraduationForm] = useState(false);
  const [showPostGraduationForm, setShowPostGraduationForm] = useState(false);

  const [selectedCurrentFile, setSelectedCurrentFile] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [completeDate, setCompleteDate] = useState(null);
  const [fullName, setFullName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [boardOrUniversityName, setBoardOrUniversityName] = useState("");
  const [schoolOrCollageName, setSchoolOrCollageName] = useState("");
  const [highestEducation, setHighestEducation] = useState("default");
  const [studentUID, setStudentUID] = useState("");
  // const handleCurrentFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedCurrentFile(file);
  // };

  //for select multiple images
  const handleCurrentFileChange = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setSelectedCurrentFile(fileList);
  };

  const [selectedHighFile, setSelectedHighFile] = useState([]);
  const [startHighDate, setStartHighDate] = useState(null);
  const [completeHighDate, setCompleteHighDate] = useState(null);
  const [highFullName, setHighFullName] = useState("");
  const [highCourseName, setHighCourseName] = useState("");
  const [highBoardOrUniversityName, setHighBoardOrUniversityName] =
    useState("");
  const [highSchoolOrCollageName, setHighSchoolOrCollageName] = useState("");
  // const handleHighFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedHighFile(file);
  // };

  // for multiple images and pdf
  const handleHighFileChange = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setSelectedHighFile(fileList);
  };

  //for graduation state
  const [graduationFullName, setGraduationFullName] = useState("");
  const [selectedGraduationFile, setSelectedGraduationFile] = useState([]);
  const [startGraduationDate, setStartGraduationDate] = useState(null);
  const [completeGraduationDate, setCompleteGraduationDate] = useState(null);
  const [graduationCourseName, setGraduationCourseName] = useState("");
  const [graduationBoardOrUniversityName, setGraduationBoardOrUniversityName] =
    useState("");
  const [graduationSchoolOrCollageName, setGraduationSchoolOrCollageName] =
    useState("");

  // for multiple images and pdf
  const handleGraduationFileChange = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setSelectedGraduationFile(fileList);
  };

  //for postgraduation state
  const [postGraduationFullName, setPostGraduationFullName] = useState("");
  const [selectedPostGraduationFile, setSelectedPostGraduationFile] = useState(
    []
  );
  const [startPostGraduationDate, setStartPostGraduationDate] = useState(null);
  const [completePostGraduationDate, setCompletePostGraduationDate] =
    useState(null);
  const [postGraduationCourseName, setPostGraduationCourseName] = useState("");
  const [
    postGraduationBoardOrUniversityName,
    setPostGraduationBoardOrUniversityName,
  ] = useState("");
  const [
    postGraduationSchoolOrCollageName,
    setPostGraduationSchoolOrCollageName,
  ] = useState("");

  // for multiple images and pdf
  const handlePostGraduationFileChange = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setSelectedPostGraduationFile(fileList);
  };

  const [selectedInterFile, setSelectedInterFile] = useState([]);
  const [startInterDate, setStartInterDate] = useState(null);
  const [completeInterDate, setCompleteInterDate] = useState(null);
  const [interFullName, setInterFullName] = useState("");
  const [interCourseName, setInterCourseName] = useState("");
  const [interBoardOrUniversityName, setInterBoardOrUniversityName] =
    useState("");
  const [interSchoolOrCollageName, setInterSchoolOrCollageName] = useState("");
  // const handleInterFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedInterFile(file);
  // };

  // for multiple images and pdf
  const handleInterFileChange = (event) => {
    const files = event.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setSelectedInterFile(fileList);
  };
  //for high course duration
  const [selectedMonths, setSelectedMonths] = useState("default");

  const handleSelectChange = (event) => {
    const months = event.target.value;
    setSelectedMonths(months);
  };

  const calculateYearsAndMonths = (totalMonths) => {
    const months = parseInt(totalMonths, 10);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = "";

    if (years > 0) {
      duration += years + " year";
      if (years > 1) duration += "s";
    }

    if (remainingMonths > 0) {
      if (duration !== "") duration += " ";
      duration += remainingMonths + " month";
      if (remainingMonths > 1) duration += "s";
    }

    return duration;
  };

  //for current course duration
  const [currentCourseMonths, setCurrentCourseMonths] = useState("default");

  const handleCurrentCourseChange = (event) => {
    const months = event.target.value;
    setCurrentCourseMonths(months);
  };

  const [intermediateCourseMonths, setIntermediateCourseMonths] =
    useState("default");

  const handleIntermediateChange = (event) => {
    const months = event.target.value;
    setIntermediateCourseMonths(months);
  };

  const [graduationCourseMonths, setGraduationCourseMonths] =
    useState("default");

  const handleGraduationChange = (event) => {
    const months = event.target.value;
    setGraduationCourseMonths(months);
  };

  const [postGraduationCourseMonths, setPostGraduationCourseMonths] =
    useState("default");

  const handlePostGraduationChange = (event) => {
    const months = event.target.value;
    setPostGraduationCourseMonths(months);
  };

  // For Current duration Type
  const [currentDurationType, setCurrentDurationType] = useState("default");

  const handleCurrentDurationType = (event) => {
    setCurrentDurationType(event.target.value);
  };

  // for HighSchool duration Type
  const [highDurationType, setHighDurationType] = useState("default");

  const handleHighDurationType = (event) => {
    setHighDurationType(event.target.value);
  };

  //  For Intermediate duration Type
  const [interDurationType, setInterDurationType] = useState("default");

  const handleInterDurationType = (event) => {
    setInterDurationType(event.target.value);
  };

  //  For graduation duration Type
  const [graduationDurationType, setGraduationDurationType] =
    useState("default");

  const handleGraduationDurationType = (event) => {
    setGraduationDurationType(event.target.value);
  };

  //  For postgraduation duration Type
  const [postGraduationDurationType, setPostGraduationDurationType] =
    useState("default");

  const handlePostGraduationDurationType = (event) => {
    setPostGraduationDurationType(event.target.value);
  };

  // For Current Course Type
  const [currentCourseType, setCurrentCourseType] = useState("default");

  const handleCurrentCourseType = (event) => {
    setCurrentCourseType(event.target.value);
  };

  // for HighSchool Course Type
  const [highCourseType, setHighCourseType] = useState("default");

  const handleHighCourseType = (event) => {
    setHighCourseType(event.target.value);
  };

  //  For Intermediate Course Type
  const [interCourseType, setInterCourseType] = useState("default");

  const handleInterCourseType = (event) => {
    setInterCourseType(event.target.value);
  };

  //  For graduration Course Type
  const [graduationCourseType, setGraduationCourseType] = useState("default");

  const handleGraduationCourseType = (event) => {
    setGraduationCourseType(event.target.value);
  };

  //  For postgraduration Course Type
  const [postGraduationCourseType, setPostGraduationCourseType] =
    useState("default");

  const handlePostGraduationCourseType = (event) => {
    setPostGraduationCourseType(event.target.value);
  };

  const [courseLevel, setCourseLevel] = useState("default");
  const [showOthersFields, setShowOthersFields] = useState(false);

  function handleCourseLevelChange(event) {
    const selectedValue = event.target.value;
    setCourseLevel(selectedValue);
    setShowHighSchoolForm(
      selectedValue === "Intermediate" ||
        selectedValue === "Graduation" ||
        selectedValue === "Post Graduation"
    );
    setShowIntermediateForm(
      selectedValue === "Graduation" || selectedValue === "Post Graduation"
    );
    setShowGraduationForm(selectedValue === "Post Graduation");
    setShowOthersFields(selectedValue === "Certification");
  }

  function handleHighestEducation(event) {
    const selectedValue = event.target.value;
    setHighestEducation(selectedValue);
    setShowHighSchoolForm(
      selectedValue === "High School" ||
        selectedValue === "Intermediate" ||
        selectedValue === "Graduation" ||
        selectedValue === "Post Graduation"
    );
    setShowIntermediateForm(
      selectedValue === "Graduation" ||
        selectedValue === "Post Graduation" ||
        selectedValue === "Intermediate"
    );
    setShowGraduationForm(
      selectedValue === "Graduation" || selectedValue === "Post Graduation"
    );
    setShowPostGraduationForm(selectedValue === "Post Graduation");
  }
  // For highSchool

  const [highCourseLevel, setHighCourseLevel] = useState("default");

  function handleHighCourseLevel(event) {
    const selectedValue = event.target.value;
    setHighCourseLevel(selectedValue);
  }

  // for  Intermediate

  const [interCourseLevel, setInterCourseLevel] = useState("default");

  function handleInterCourseLevel(event) {
    const selectedValue = event.target.value;
    setInterCourseLevel(selectedValue);
  }

  // for  graduation

  const [graduationCourseLevel, setGraduationCourseLevel] = useState("default");

  function handleGraduationCourseLevel(event) {
    const selectedValue = event.target.value;
    setGraduationCourseLevel(selectedValue);
  }

  // for  postgraduation

  const [postGraduationCourseLevel, setPostGraduationCourseLevel] =
    useState("default");

  function handlePostGraduationCourseLevel(event) {
    const selectedValue = event.target.value;
    setPostGraduationCourseLevel(selectedValue);
  }

  const handleStartDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setStartDate(formattedDate);
  };

  const handleCompleteDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setCompleteDate(formattedDate);
  };

  const handleStartInterDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setStartInterDate(formattedDate);
  };

  const handleStartGraduationDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setStartGraduationDate(formattedDate);
  };

  const handleCompleteGraduationDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setCompleteGraduationDate(formattedDate);
  };

  const handleStartPostGraduationDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setStartPostGraduationDate(formattedDate);
  };

  const handleCompletePostGraduationDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setCompletePostGraduationDate(formattedDate);
  };

  const handleCompleteInterDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setCompleteInterDate(formattedDate);
  };

  const handleStartHighDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setStartHighDate(formattedDate);
  };

  const handleCompleteHighDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setCompleteHighDate(formattedDate);
  };

  const [addCourse] = useAddCourseMutation();
  const { data, isSuccess } = useGetCourseQuery();

  // console.log("course", data);
  useEffect(() => {
    if (data && data.success && data.data.length > 0) {
      const currentCourse = data.data.find((item) => item.onGoing === true);
      const highSchoolCourse = data.data.find(
        (item) => item.courseLevel === "High School" && item.onGoing === false
      );
      const interCourse = data.data.find(
        (item) => item.courseLevel === "Intermediate" && item.onGoing === false
      );
      const graduationCourse = data.data.find(
        (item) => item.courseLevel === "Graduation" && item.onGoing === false
      );
      const postGraduationCourse = data.data.find(
        (item) =>
          item.courseLevel === "Post Graduation" && item.onGoing === false
      );
      setCurrentData(currentCourse);
      setHighSchoolData(highSchoolCourse);
      setInterData(interCourse);
      setGraduationData(graduationCourse);
      setPostGraduationData(postGraduationCourse);
    }
  }, [data, isSuccess]);

  console.log(currentData);

  const clearTextInput = () => {
    setFullName("");
    setCourseLevel("default");
    setCourseName("");
    setStartDate(null);
    setCompleteDate(null);
    setSchoolOrCollageName("");
    setCurrentCourseMonths("default");
    setBoardOrUniversityName("");
    setSelectedCurrentFile(null);
    setCurrentCourseType("default");
    setCurrentDurationType("default");
    setHighestEducation("default");
    setSelectedCurrentFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("courseLevel", courseLevel);
      formData.append("courseName", courseName);
      formData.append("schoolOrCollageName", schoolOrCollageName);
      formData.append("courseDuration", currentCourseMonths);
      formData.append("boardOrUniversityName", boardOrUniversityName);
      formData.append("startDate", startDate);
      formData.append("endDate", completeDate);
      formData.append("durationType", currentDurationType);
      formData.append("courseType", currentCourseType);
      formData.append("highestEducation", highestEducation);
      selectedCurrentFile.forEach((file) => {
        formData.append("courseDocument", file);
      });
      const res = await addCourse(formData);
      alert("Course details added successfully !");
      console.log(res);
      clearTextInput();
    } catch (error) {
      console.log(error);
    }
  };

  const clearHighTextInput = () => {
    setHighFullName("");
    setHighCourseLevel("default");
    setHighCourseName("");
    setStartHighDate(null);
    setCompleteHighDate(null);
    setHighSchoolOrCollageName("");
    setSelectedMonths("default");
    setHighBoardOrUniversityName("");
    setSelectedHighFile(null);
    setHighCourseType("default");
    setHighDurationType("default");
  };

  const handleHighSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", highFullName);
      formData.append("courseLevel", highCourseLevel);
      formData.append("courseName", highCourseName);
      formData.append("schoolOrCollageName", highSchoolOrCollageName);
      formData.append("courseDuration", selectedMonths);
      formData.append("boardOrUniversityName", highBoardOrUniversityName);
      formData.append("startDate", startHighDate);
      formData.append("endDate", completeHighDate);
      formData.append("durationType", highDurationType);
      formData.append("courseType", highCourseType);
      // formData.append("document", selectedHighFile);
      selectedHighFile.forEach((file) => {
        formData.append("courseDocument", file);
      });
      const res = await addCourse(formData);
      alert("HighSchool details added successfully !");
      console.log(res);
      clearHighTextInput();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInterSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", interFullName);
      formData.append("courseLevel", interCourseLevel);
      formData.append("courseName", interCourseName);
      formData.append("schoolOrCollageName", interSchoolOrCollageName);
      formData.append("courseDuration", intermediateCourseMonths);
      formData.append("boardOrUniversityName", interBoardOrUniversityName);
      formData.append("startDate", startInterDate);
      formData.append("endDate", completeInterDate);
      formData.append("durationType", interDurationType);
      formData.append("courseType", interCourseType);
      // formData.append("document", selectedInterFile);
      selectedInterFile.forEach((file) => {
        formData.append("courseDocument", file);
      });
      const res = await addCourse(formData);
      alert("Intermediate details added successfully !");
      console.log(res);
      clearInterTextInput();
    } catch (error) {
      console.log(error);
    }
  };

  const clearInterTextInput = () => {
    setInterFullName("");
    setInterCourseLevel("default");
    setInterCourseName("");
    setStartInterDate(null);
    setCompleteInterDate(null);
    setInterSchoolOrCollageName("");
    setIntermediateCourseMonths("default");
    setInterBoardOrUniversityName("");
    setSelectedInterFile(null);
    setInterCourseType("default");
    setInterDurationType("default");
  };

  const handleGraduationSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", graduationFullName);
      formData.append("courseLevel", graduationCourseLevel);
      formData.append("courseName", graduationCourseName);
      formData.append("schoolOrCollageName", graduationSchoolOrCollageName);
      formData.append("courseDuration", graduationCourseMonths);
      formData.append("boardOrUniversityName", graduationBoardOrUniversityName);
      formData.append("startDate", startGraduationDate);
      formData.append("endDate", completeGraduationDate);
      formData.append("durationType", graduationDurationType);
      formData.append("courseType", graduationCourseType);

      selectedGraduationFile.forEach((file) => {
        formData.append("courseDocument", file);
      });
      const res = await addCourse(formData);
      alert("Graduation details added successfully !");
      console.log(res);
      clearGraduationTextInput();
    } catch (error) {
      console.log(error);
    }
  };

  const clearGraduationTextInput = () => {
    setGraduationFullName("");
    setGraduationCourseLevel("default");
    setGraduationCourseName("");
    setStartGraduationDate(null);
    setCompleteGraduationDate(null);
    setGraduationSchoolOrCollageName("");
    setGraduationCourseMonths("default");
    setGraduationBoardOrUniversityName("");
    setSelectedGraduationFile(null);
    setGraduationCourseType("default");
    setGraduationDurationType("default");
  };

  const handlePostGraduationSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", postGraduationFullName);
      formData.append("courseLevel", postGraduationCourseLevel);
      formData.append("courseName", postGraduationCourseName);
      formData.append("schoolOrCollageName", postGraduationSchoolOrCollageName);
      formData.append("courseDuration", postGraduationCourseMonths);
      formData.append(
        "boardOrUniversityName",
        postGraduationBoardOrUniversityName
      );
      formData.append("startDate", startPostGraduationDate);
      formData.append("endDate", completePostGraduationDate);
      formData.append("durationType", postGraduationDurationType);
      formData.append("courseType", postGraduationCourseType);

      selectedPostGraduationFile.forEach((file) => {
        formData.append("courseDocument", file);
      });
      const res = await addCourse(formData);
      alert(" Post Graduation details added successfully !");
      console.log(res);
      clearPostGraduationTextInput();
    } catch (error) {
      console.log(error);
    }
  };

  const clearPostGraduationTextInput = () => {
    setPostGraduationFullName("");
    setPostGraduationCourseLevel("default");
    setPostGraduationCourseName("");
    setStartPostGraduationDate(null);
    setCompletePostGraduationDate(null);
    setPostGraduationSchoolOrCollageName("");
    setPostGraduationCourseMonths("default");
    setPostGraduationBoardOrUniversityName("");
    setSelectedPostGraduationFile(null);
    setPostGraduationCourseType("default");
    setPostGraduationDurationType("default");
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
                  ></a>
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
                <StudentNotification />
                {/* <!-- END: Notification Dropdown --> */}
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
                {/* current course detail begin*/}

                {data && currentData && currentData.onGoing === true ? (
                  <div className="card xl:col-span-2">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1 flex justify-between">
                          <div className="card-title text-slate-900 dark:text-white">
                            Current Course Details
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
                      <div className="card-text h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Full Name
                            </label>
                            <div className="relative form-control">
                              {currentData.fullName}
                            </div>
                          </div>
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Course Name
                            </label>
                            <div className="relative form-control">
                              {currentData.courseName}
                            </div>
                          </div>

                          <div className="input-area">
                            <label
                              htmlFor="currentcourseLevel"
                              className="form-label"
                            >
                              Current Course Level
                            </label>
                            <div className="relative form-control">
                              {currentData.courseLevel}
                            </div>
                          </div>

                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              Board Name
                            </label>
                            <div className="relative form-control">
                              {currentData.boardOrUniversityName}
                            </div>
                          </div>
                          <div className="input-area relative">
                            <label for="largeInput" className="form-label">
                              School / College Name
                            </label>
                            <div className="relative form-control">
                              {currentData.schoolOrCollageName}
                            </div>
                          </div>
                          {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Document Upload
                            </label>
                            <div className="relative form-control">
                            
                            </div>
                          </div> */}
                          <div className="input-area">
                            <label
                              for="selectcurrentcourse"
                              className="form-label"
                            >
                              Course Duration
                            </label>
                            <div className="relative form-control">
                              {currentData.courseDuration}
                            </div>
                          </div>

                          <div>
                            <label for="default-picker" class="form-label">
                              Start Date
                            </label>
                            <div className="relative form-control">
                              {currentData.startDate}
                            </div>
                          </div>
                          <div>
                            <label for="default-picker" class="form-label">
                              Expected Complete Date
                            </label>
                            <div className="relative form-control">
                              {currentData.endDate}
                            </div>
                          </div>
                          <div className="input-area">
                            <label
                              htmlFor="currentdurationtype"
                              className="form-label"
                            >
                              Duration Type
                            </label>
                            <div className="relative form-control">
                              {currentData.durationType}
                            </div>
                          </div>
                          <div className="input-area">
                            <label
                              htmlFor="currentcoursetype"
                              className="form-label"
                            >
                              Course Type
                            </label>
                            <div className="relative form-control">
                              {currentData.courseType}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card xl:col-span-2">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1">
                          <div className="card-title text-slate-900 dark:text-white">
                            Current Course Details
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
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                              />
                            </div>

                            <div className="input-area">
                              <label
                                htmlFor="currentcourseLevel"
                                className="form-label"
                              >
                                Current Course Level
                              </label>
                              <select
                                id="currentcourseLevel"
                                className="form-control"
                                value={courseLevel}
                                onChange={handleCourseLevelChange}
                                style={{ fontSize: "12px" }}
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  disabled
                                >
                                  Select Course Level
                                </option>
                                <option value="High School">High School</option>
                                <option value="Intermediate">
                                  Intermediate
                                </option>
                                {/* <option value="diploma">diploma</option> */}
                                <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">
                                  Post Graduation
                                </option>
                                <option value="Certification">
                                  Certification Course(3 months,6 months,6 week
                                  and other)
                                </option>
                              </select>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board Name
                              </label>
                              <input
                                style={{ fontSize: "12px" }}
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
                                style={{ fontSize: "12px" }}
                                type="text"
                                className="form-control"
                                placeholder="School / College Name"
                                value={schoolOrCollageName}
                                onChange={(e) =>
                                  setSchoolOrCollageName(e.target.value)
                                }
                              />
                            </div>
                            <div className="input-area relative">
                              <label for="fileInput" className="form-label">
                                Document Upload
                              </label>
                              <input
                                style={{ fontSize: "12px" }}
                                type="file"
                                id="fileInput"
                                className="form-control"
                                multiple
                                // accept=".pdf,.doc,.docx"
                                accept="image/*,.pdf"
                                onChange={handleCurrentFileChange}
                              />
                            </div>
                            <div className="input-area">
                              <label
                                for="selectcurrentcourse"
                                className="form-label"
                              >
                                Course Duration
                              </label>
                              <select
                                id="selectcurrentcourse"
                                className="form-control"
                                value={currentCourseMonths}
                                onChange={handleCurrentCourseChange}
                                style={{ fontSize: "12px" }}
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  disabled
                                >
                                  Select Course Duration
                                </option>
                                <option
                                  value="3 months"
                                  className="dark:bg-slate-700"
                                >
                                  3 months
                                </option>
                                <option
                                  value="6 months"
                                  className="dark:bg-slate-700"
                                >
                                  6 months
                                </option>
                                <option
                                  value="9 months"
                                  className="dark:bg-slate-700"
                                >
                                  9 months
                                </option>
                                <option
                                  value="12 months"
                                  className="dark:bg-slate-700"
                                >
                                  12 months
                                </option>
                                <option
                                  value="18 months"
                                  className="dark:bg-slate-700"
                                >
                                  18 months
                                </option>
                                <option
                                  value="24 months"
                                  className="dark:bg-slate-700"
                                >
                                  24 months
                                </option>
                                <option
                                  value="30 months"
                                  className="dark:bg-slate-700"
                                >
                                  30 months
                                </option>
                                <option
                                  value="36 months"
                                  className="dark:bg-slate-700"
                                >
                                  36 months
                                </option>
                                <option
                                  value="42 months"
                                  className="dark:bg-slate-700"
                                >
                                  42 months
                                </option>
                                <option
                                  value="48 months"
                                  className="dark:bg-slate-700"
                                >
                                  48 months
                                </option>
                              </select>
                              {currentCourseMonths !== "default" && (
                                <p className="duration-text">
                                  duration :
                                  {calculateYearsAndMonths(currentCourseMonths)}
                                </p>
                              )}
                            </div>

                            <div>
                              <label for="default-picker" class="form-label">
                                Start Date
                              </label>
                              <Flatpickr
                                style={{ fontSize: "12px" }}
                                className="form-control"
                                id="default-picker"
                                value={startDate}
                                onChange={handleStartDateChange}
                                options={{
                                  dateFormat: "Y-m-d",
                                  enableTime: false,
                                  // time_24hr: true, // Use 24-hour time format
                                  // utc: false, // Set to false if you want to display local time
                                  //timeZone: "UTC", // Set the desired time zone
                                }}
                              />
                            </div>
                            <div>
                              <label for="default-picker" class="form-label">
                                Expected Complete Date
                              </label>
                              <Flatpickr
                                style={{ fontSize: "12px" }}
                                className="form-control"
                                id="default-picker"
                                value={completeDate}
                                onChange={handleCompleteDateChange}
                                options={{
                                  dateFormat: "Y-m-d",
                                  enableTime: false,
                                  //  time_24hr: true, // Use 24-hour time format
                                  // utc: false, // Set to false if you want to display local time
                                  // timeZone: "UTC", // Set the desired time zone
                                }}
                              />
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentdurationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <select
                                id="currentdurationtype"
                                className="form-control"
                                value={currentDurationType}
                                onChange={handleCurrentDurationType}
                                style={{ fontSize: "12px" }}
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
                            <div className="input-area">
                              <label
                                htmlFor="currentcoursetype"
                                className="form-label"
                              >
                                Course Type
                              </label>
                              <select
                                id="currentcoursetype"
                                className="form-control"
                                value={currentCourseType}
                                onChange={handleCurrentCourseType}
                                style={{ fontSize: "12px" }}
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  selected
                                >
                                  Select Course Type
                                </option>
                                <option
                                  value="Certification"
                                  className="dark:bg-slate-700"
                                >
                                  Certification
                                </option>
                                <option
                                  value="Diploma"
                                  className="dark:bg-slate-700"
                                >
                                  Diploma
                                </option>
                                <option
                                  value="Degree"
                                  className="dark:bg-slate-700"
                                >
                                  Degree
                                </option>
                                {/* <option
                                value="others"
                                className="dark:bg-slate-700"
                              >
                                Others
                              </option> */}
                              </select>
                            </div>
                            {showOthersFields && (
                              <div className="input-area relative">
                                <label for="largeInput" className="form-label">
                                  Your Highest Education
                                </label>

                                <select
                                  id="currentcourseLevel"
                                  className="form-control"
                                  value={highestEducation}
                                  onChange={handleHighestEducation}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Highest Education
                                  </option>
                                  <option value="High School">
                                    High School
                                  </option>
                                  <option value="Intermediate">
                                    Intermediate
                                  </option>
                                  {/* <option value="diploma">diploma</option> */}
                                  <option value="Graduation">Graduation</option>
                                  <option value="Post Graduation">
                                    Post Graduation
                                  </option>
                                </select>
                              </div>
                            )}
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
                )}

                {/* Current course detail  end*/}
                {/* Highschool section Begin */}
                {data && highSchoolData && highSchoolData.onGoing === false ? (
                  <div className="card xl:col-span-2 mt-5">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1 flex justify-between">
                          <div className="card-title text-slate-900 dark:text-white">
                            HighSchool
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
                      <div className="card-text h-full ">
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Full Name
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.fullName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Name
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.courseName}
                              </div>
                            </div>

                            <div className="input-area">
                              <label
                                htmlFor="currentcourseLevel"
                                className="form-label"
                              >
                                Current Course Level
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.courseLevel}
                              </div>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board Name
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.boardOrUniversityName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                School / College Name
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.schoolOrCollageName}
                              </div>
                            </div>
                            {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Document Upload
                            </label>
                            <div className="relative form-control">
                            
                            </div>
                          </div> */}
                            <div className="input-area">
                              <label
                                for="selectcurrentcourse"
                                className="form-label"
                              >
                                Course Duration
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.courseDuration}
                              </div>
                            </div>

                            <div>
                              <label for="default-picker" class="form-label">
                                Start Date
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.startDate}
                              </div>
                            </div>
                            <div>
                              <label for="default-picker" class="form-label">
                                Complete Date
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.endDate}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentdurationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.durationType}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentcoursetype"
                                className="form-label"
                              >
                                Course Type
                              </label>
                              <div className="relative form-control">
                                {highSchoolData.courseType}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  showHighSchoolForm && (
                    <div className="card xl:col-span-2 mt-5">
                      <div className="card-body flex flex-col p-6">
                        <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
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
                                  onChange={(e) =>
                                    setHighFullName(e.target.value)
                                  }
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

                              <div className="input-area">
                                <label
                                  htmlFor="highschoolcourseLevel"
                                  className="form-label"
                                >
                                  Course Level
                                </label>
                                <select
                                  id="highschoolcourseLevel"
                                  className="form-control"
                                  value={highCourseLevel}
                                  onChange={handleHighCourseLevel}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Level
                                  </option>
                                  <option
                                    value="High School"
                                    className="dark:bg-slate-700"
                                  >
                                    High School
                                  </option>
                                  <option
                                    value="Intermediate"
                                    className="dark:bg-slate-700"
                                  >
                                    Intermediate
                                  </option>
                                </select>
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
                              <div className="input-area relative">
                                <label for="fileInput" className="form-label">
                                  Document Upload
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="file"
                                  id="fileInput"
                                  className="form-control"
                                  multiple
                                  accept="image/*,.pdf,.doc,.docx"
                                  onChange={handleHighFileChange}
                                  // accept=".pdf,.doc,.docx"
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  for="selecthighschool"
                                  className="form-label"
                                >
                                  Course Duration
                                </label>
                                <select
                                  id="selectcurrentcourse"
                                  className="form-control"
                                  value={selectedMonths}
                                  onChange={handleSelectChange}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Duration
                                  </option>

                                  <option
                                    value="12 months"
                                    className="dark:bg-slate-700"
                                  >
                                    12 months
                                  </option>
                                </select>
                                {selectedMonths !== "default" && (
                                  <p className="duration-text">
                                    duration :
                                    {calculateYearsAndMonths(selectedMonths)}
                                  </p>
                                )}
                              </div>

                              <div>
                                <label for="default-picker" class="form-label">
                                  Start Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={startHighDate}
                                  onChange={handleStartHighDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div>
                                <label for="default-picker" class="form-label">
                                  Complete Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={completeHighDate}
                                  onChange={handleCompleteHighDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
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
                  )
                )}

                {/* Highschool section end */}

                {/* Intermediate Begin */}

                {data && interData && interData.onGoing === false ? (
                  <div className="card xl:col-span-2 mt-5">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1 flex justify-between">
                          <div className="card-title text-slate-900 dark:text-white">
                            Intermediate
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
                      <div className="card-text h-full ">
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Full Name
                              </label>
                              <div className="relative form-control">
                                {interData.fullName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Name
                              </label>
                              <div className="relative form-control">
                                {interData.courseName}
                              </div>
                            </div>

                            <div className="input-area">
                              <label
                                htmlFor="currentcourseLevel"
                                className="form-label"
                              >
                                Current Course Level
                              </label>
                              <div className="relative form-control">
                                {interData.courseLevel}
                              </div>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board Name
                              </label>
                              <div className="relative form-control">
                                {interData.boardOrUniversityName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                School / College Name
                              </label>
                              <div className="relative form-control">
                                {interData.schoolOrCollageName}
                              </div>
                            </div>
                            {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Document Upload
                            </label>
                            <div className="relative form-control">
                            
                            </div>
                          </div> */}
                            <div className="input-area">
                              <label
                                for="selectcurrentcourse"
                                className="form-label"
                              >
                                Course Duration
                              </label>
                              <div className="relative form-control">
                                {interData.courseDuration}
                              </div>
                            </div>

                            <div>
                              <label for="default-picker" class="form-label">
                                Start Date
                              </label>
                              <div className="relative form-control">
                                {interData.startDate}
                              </div>
                            </div>
                            <div>
                              <label for="default-picker" class="form-label">
                                Complete Date
                              </label>
                              <div className="relative form-control">
                                {interData.endDate}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentdurationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <div className="relative form-control">
                                {interData.durationType}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentcoursetype"
                                className="form-label"
                              >
                                Course Type
                              </label>
                              <div className="relative form-control">
                                {interData.courseType}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  showIntermediateForm && (
                    <div className="card xl:col-span-2 mt-5">
                      <div className="card-body flex flex-col p-6">
                        <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                          <div className="flex-1">
                            <div className="card-title text-slate-900 dark:text-white">
                              Intermediate
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
                                  value={interFullName}
                                  onChange={(e) =>
                                    setInterFullName(e.target.value)
                                  }
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
                                  value={interCourseName}
                                  onChange={(e) =>
                                    setInterCourseName(e.target.value)
                                  }
                                />
                              </div>

                              <div className="input-area">
                                <label
                                  htmlFor="intermediatecourseLevel"
                                  className="form-label"
                                >
                                  Current Course Level
                                </label>
                                <select
                                  id="intermediatecourseLevel"
                                  className="form-control"
                                  value={interCourseLevel}
                                  onChange={handleInterCourseLevel}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Level
                                  </option>
                                  <option value="High School">
                                    High School
                                  </option>
                                  <option value="Intermediate">
                                    Intermediate
                                  </option>
                                  {/* <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">
                                  Post Graduation
                                </option> */}
                                </select>
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
                                  value={interBoardOrUniversityName}
                                  onChange={(e) =>
                                    setInterBoardOrUniversityName(
                                      e.target.value
                                    )
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
                                  value={interSchoolOrCollageName}
                                  onChange={(e) =>
                                    setInterSchoolOrCollageName(e.target.value)
                                  }
                                />
                              </div>
                              <div className="input-area relative">
                                <label for="fileInput" className="form-label">
                                  Document Upload
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="file"
                                  id="fileInput"
                                  className="form-control"
                                  multiple
                                  accept="image/*,.pdf,.doc,.docx"
                                  onChange={handleInterFileChange}
                                  // accept=".pdf,.doc,.docx"
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  for="selectintermediate"
                                  className="form-label"
                                >
                                  Course Duration
                                </label>
                                <select
                                  id="selectintermediate"
                                  className="form-control"
                                  value={intermediateCourseMonths}
                                  onChange={handleIntermediateChange}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Duration
                                  </option>

                                  <option
                                    value="12 months"
                                    className="dark:bg-slate-700"
                                  >
                                    12 months
                                  </option>
                                </select>
                                {intermediateCourseMonths !== "default" && (
                                  <p className="duration-text">
                                    duration :
                                    {calculateYearsAndMonths(
                                      intermediateCourseMonths
                                    )}
                                  </p>
                                )}
                              </div>

                              <div>
                                <label for="default-picker" class="form-label">
                                  Start Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={startInterDate}
                                  onChange={handleStartInterDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div>
                                <label for="default-picker" class="form-label">
                                  Complete Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={completeInterDate}
                                  onChange={handleCompleteInterDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  htmlFor="interdurationtype"
                                  className="form-label"
                                >
                                  Duration Type
                                </label>
                                <select
                                  id="interdurationtype"
                                  className="form-control"
                                  value={interDurationType}
                                  onChange={handleInterDurationType}
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
                                  htmlFor="intercoursetype"
                                  className="form-label"
                                >
                                  Course Type
                                </label>
                                <select
                                  id="intercoursetype"
                                  className="form-control"
                                  value={interCourseType}
                                  onChange={handleInterCourseType}
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
                            </div>

                            <button
                              className="btn inline-flex justify-center btn-dark"
                              type="submit"
                              onClick={(e) => handleInterSubmit(e)}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )
                )}
                {/* Intermediate End */}

                {/* Graduation Begin */}
                {data && graduationData && graduationData.onGoing === false ? (
                  <div className="card xl:col-span-2 mt-5">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1 flex justify-between">
                          <div className="card-title text-slate-900 dark:text-white">
                            Graduation
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
                      <div className="card-text h-full ">
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Full Name
                              </label>
                              <div className="relative form-control">
                                {graduationData.fullName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Name
                              </label>
                              <div className="relative form-control">
                                {graduationData.courseName}
                              </div>
                            </div>

                            <div className="input-area">
                              <label
                                htmlFor="currentcourseLevel"
                                className="form-label"
                              >
                                Current Course Level
                              </label>
                              <div className="relative form-control">
                                {graduationData.courseLevel}
                              </div>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board Name
                              </label>
                              <div className="relative form-control">
                                {graduationData.boardOrUniversityName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                School / College Name
                              </label>
                              <div className="relative form-control">
                                {graduationData.schoolOrCollageName}
                              </div>
                            </div>
                            {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Document Upload
                            </label>
                            <div className="relative form-control">
                            
                            </div>
                          </div> */}
                            <div className="input-area">
                              <label
                                for="selectcurrentcourse"
                                className="form-label"
                              >
                                Course Duration
                              </label>
                              <div className="relative form-control">
                                {graduationData.courseDuration}
                              </div>
                            </div>

                            <div>
                              <label for="default-picker" class="form-label">
                                Start Date
                              </label>
                              <div className="relative form-control">
                                {graduationData.startDate}
                              </div>
                            </div>
                            <div>
                              <label for="default-picker" class="form-label">
                                Complete Date
                              </label>
                              <div className="relative form-control">
                                {graduationData.endDate}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentdurationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <div className="relative form-control">
                                {graduationData.durationType}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentcoursetype"
                                className="form-label"
                              >
                                Course Type
                              </label>
                              <div className="relative form-control">
                                {graduationData.courseType}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  showGraduationForm && (
                    <div className="card xl:col-span-2 mt-5">
                      <div className="card-body flex flex-col p-6">
                        <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                          <div className="flex-1">
                            <div className="card-title text-slate-900 dark:text-white">
                              Graduation
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
                                  value={graduationFullName}
                                  onChange={(e) =>
                                    setGraduationFullName(e.target.value)
                                  }
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
                                  value={graduationCourseName}
                                  onChange={(e) =>
                                    setGraduationCourseName(e.target.value)
                                  }
                                />
                              </div>

                              <div className="input-area">
                                <label
                                  htmlFor="graduationcourseLevel"
                                  className="form-label"
                                >
                                  Current Course Level
                                </label>
                                <select
                                  id="graduationcourseLevel"
                                  className="form-control"
                                  value={graduationCourseLevel}
                                  onChange={handleGraduationCourseLevel}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Level
                                  </option>
                                  <option value="High School">
                                    High School
                                  </option>
                                  <option value="Intermediate">
                                    Intermediate
                                  </option>
                                  <option value="Graduation">Graduation</option>
                                  <option value="Post Graduation">
                                    Post Graduation
                                  </option>
                                </select>
                              </div>
                              <div className="input-area relative">
                                <label for="largeInput" className="form-label">
                                  Board / University Name
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="text"
                                  className="form-control"
                                  placeholder="Board / University Name"
                                  value={graduationBoardOrUniversityName}
                                  onChange={(e) =>
                                    setGraduationBoardOrUniversityName(
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="input-area relative">
                                <label for="largeInput" className="form-label">
                                  School / College Name
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="text"
                                  className="form-control"
                                  placeholder="School / College Name"
                                  value={graduationSchoolOrCollageName}
                                  onChange={(e) =>
                                    setGraduationSchoolOrCollageName(
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="input-area relative">
                                <label for="fileInput" className="form-label">
                                  Document Upload
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="file"
                                  id="fileInput"
                                  className="form-control"
                                  multiple
                                  accept="image/*,.pdf,.doc,.docx"
                                  onChange={handleGraduationFileChange}
                                  // accept=".pdf,.doc,.docx"
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  for="selectgraduation"
                                  className="form-label"
                                >
                                  Course Duration
                                </label>
                                <select
                                  style={{ fontSize: "12px" }}
                                  id="selectgraduation"
                                  className="form-control"
                                  value={graduationCourseMonths}
                                  onChange={handleGraduationChange}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Duration
                                  </option>

                                  <option
                                    value="12 months"
                                    className="dark:bg-slate-700"
                                  >
                                    12 months
                                  </option>
                                  <option
                                    value="24 months"
                                    className="dark:bg-slate-700"
                                  >
                                    24 months
                                  </option>
                                  <option
                                    value="36 months"
                                    className="dark:bg-slate-700"
                                  >
                                    36 months
                                  </option>
                                  <option
                                    value="48 months"
                                    className="dark:bg-slate-700"
                                  >
                                    48 months
                                  </option>
                                </select>
                                {graduationCourseMonths !== "default" && (
                                  <p className="duration-text">
                                    duration :
                                    {calculateYearsAndMonths(
                                      graduationCourseMonths
                                    )}
                                  </p>
                                )}
                              </div>

                              <div>
                                <label for="default-picker" class="form-label">
                                  Start Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={startGraduationDate}
                                  onChange={handleStartGraduationDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div>
                                <label for="default-picker" class="form-label">
                                  Complete Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={completeGraduationDate}
                                  onChange={handleCompleteGraduationDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  htmlFor="graduationdurationtype"
                                  className="form-label"
                                >
                                  Duration Type
                                </label>
                                <select
                                  id="graduationdurationtype"
                                  className="form-control"
                                  value={graduationDurationType}
                                  onChange={handleGraduationDurationType}
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
                                  htmlFor="graduationcoursetype"
                                  className="form-label"
                                >
                                  Course Type
                                </label>
                                <select
                                  id="graduationcoursetype"
                                  className="form-control"
                                  value={graduationCourseType}
                                  onChange={handleGraduationCourseType}
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
                            </div>

                            <button
                              className="btn inline-flex justify-center btn-dark"
                              type="submit"
                              onClick={(e) => handleGraduationSubmit(e)}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )
                )}

                {/* Graduation End */}
                {/* Post Graduation Begin */}
                {data &&
                postGraduationData &&
                postGraduationData.onGoing === false ? (
                  <div className="card xl:col-span-2 mt-5">
                    <div className="card-body flex flex-col p-6">
                      <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                        <div className="flex-1 flex justify-between">
                          <div className="card-title text-slate-900 dark:text-white">
                            Post Graduation
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
                      <div className="card-text h-full ">
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Full Name
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.fullName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Course Name
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.courseName}
                              </div>
                            </div>

                            <div className="input-area">
                              <label
                                htmlFor="currentcourseLevel"
                                className="form-label"
                              >
                                Current Course Level
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.courseLevel}
                              </div>
                            </div>

                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                Board Name
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.boardOrUniversityName}
                              </div>
                            </div>
                            <div className="input-area relative">
                              <label for="largeInput" className="form-label">
                                School / College Name
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.schoolOrCollageName}
                              </div>
                            </div>
                            {/* <div className="input-area relative">
                            <label for="fileInput" className="form-label">
                              Document Upload
                            </label>
                            <div className="relative form-control">
                            
                            </div>
                          </div> */}
                            <div className="input-area">
                              <label
                                for="selectcurrentcourse"
                                className="form-label"
                              >
                                Course Duration
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.courseDuration}
                              </div>
                            </div>

                            <div>
                              <label for="default-picker" class="form-label">
                                Start Date
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.startDate}
                              </div>
                            </div>
                            <div>
                              <label for="default-picker" class="form-label">
                                Complete Date
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.endDate}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentdurationtype"
                                className="form-label"
                              >
                                Duration Type
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.durationType}
                              </div>
                            </div>
                            <div className="input-area">
                              <label
                                htmlFor="currentcoursetype"
                                className="form-label"
                              >
                                Course Type
                              </label>
                              <div className="relative form-control">
                                {postGraduationData.courseType}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  showPostGraduationForm && (
                    <div className="card xl:col-span-2 mt-5">
                      <div className="card-body flex flex-col p-6">
                        <header className="flex mb-5 items-center border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6">
                          <div className="flex-1">
                            <div className="card-title text-slate-900 dark:text-white">
                              Post Graduation
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
                                  value={postGraduationFullName}
                                  onChange={(e) =>
                                    setPostGraduationFullName(e.target.value)
                                  }
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
                                  value={postGraduationCourseName}
                                  onChange={(e) =>
                                    setPostGraduationCourseName(e.target.value)
                                  }
                                />
                              </div>

                              <div className="input-area">
                                <label
                                  htmlFor="postgraduationcourseLevel"
                                  className="form-label"
                                >
                                  Current Course Level
                                </label>
                                <select
                                  id="postgraduationcourseLevel"
                                  className="form-control"
                                  value={postGraduationCourseLevel}
                                  onChange={handlePostGraduationCourseLevel}
                                  style={{ fontSize: "12px" }}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Level
                                  </option>
                                  <option value="High School">
                                    High School
                                  </option>
                                  <option value="Intermediate">
                                    Intermediate
                                  </option>
                                  <option value="Graduation">Graduation</option>
                                  <option value="Post Graduation">
                                    Post Graduation
                                  </option>
                                </select>
                              </div>
                              <div className="input-area relative">
                                <label for="largeInput" className="form-label">
                                  Board / University Name
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="text"
                                  className="form-control"
                                  placeholder="Board / University Name"
                                  value={postGraduationBoardOrUniversityName}
                                  onChange={(e) =>
                                    setPostGraduationBoardOrUniversityName(
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="input-area relative">
                                <label for="largeInput" className="form-label">
                                  School / College Name
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="text"
                                  className="form-control"
                                  placeholder="School / College Name"
                                  value={postGraduationSchoolOrCollageName}
                                  onChange={(e) =>
                                    setPostGraduationSchoolOrCollageName(
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="input-area relative">
                                <label for="fileInput" className="form-label">
                                  Document Upload
                                </label>
                                <input
                                  style={{ fontSize: "12px" }}
                                  type="file"
                                  id="fileInput"
                                  className="form-control"
                                  multiple
                                  accept="image/*,.pdf,.doc,.docx"
                                  onChange={handlePostGraduationFileChange}
                                  // accept=".pdf,.doc,.docx"
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  for="selectpostgraduation"
                                  className="form-label"
                                >
                                  Course Duration
                                </label>
                                <select
                                  style={{ fontSize: "12px" }}
                                  id="selectpostgraduation"
                                  className="form-control"
                                  value={postGraduationCourseMonths}
                                  onChange={handlePostGraduationChange}
                                >
                                  <option
                                    value="default"
                                    className="dark:bg-slate-700"
                                    disabled
                                  >
                                    Select Course Duration
                                  </option>

                                  {/* <option
                                  value="12 months"
                                  className="dark:bg-slate-700"
                                >
                                  12 months
                                </option> */}
                                  <option
                                    value="24 months"
                                    className="dark:bg-slate-700"
                                  >
                                    24 months
                                  </option>
                                </select>
                                {postGraduationCourseMonths !== "default" && (
                                  <p className="duration-text">
                                    duration :
                                    {calculateYearsAndMonths(
                                      postGraduationCourseMonths
                                    )}
                                  </p>
                                )}
                              </div>

                              <div>
                                <label for="default-picker" class="form-label">
                                  Start Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={startPostGraduationDate}
                                  onChange={handleStartPostGraduationDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div>
                                <label for="default-picker" class="form-label">
                                  Complete Date
                                </label>
                                <Flatpickr
                                  style={{ fontSize: "12px" }}
                                  className="form-control"
                                  id="default-picker"
                                  value={completePostGraduationDate}
                                  onChange={
                                    handleCompletePostGraduationDateChange
                                  }
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                  }}
                                />
                              </div>
                              <div className="input-area">
                                <label
                                  htmlFor="postgraduationdurationtype"
                                  className="form-label"
                                >
                                  Duration Type
                                </label>
                                <select
                                  id="postgraduationdurationtype"
                                  className="form-control"
                                  value={postGraduationDurationType}
                                  onChange={handlePostGraduationDurationType}
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
                                  htmlFor="postgraduationcoursetype"
                                  className="form-label"
                                >
                                  Course Type
                                </label>
                                <select
                                  id="postgraduationcoursetype"
                                  className="form-control"
                                  value={postGraduationCourseType}
                                  onChange={handlePostGraduationCourseType}
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
                            </div>

                            <button
                              className="btn inline-flex justify-center btn-dark"
                              type="submit"
                              onClick={(e) => handlePostGraduationSubmit(e)}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )
                )}
                {/* Post Graduation End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentCourse;
