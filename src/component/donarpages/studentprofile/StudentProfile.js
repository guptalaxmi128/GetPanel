import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/Sidebar";
import user from "../../../assets/images/user/user-1.jpg";
import logo from "../../../assets/images/logo.png";
import close from "../../../assets/close.png";
import getepayPortal from "../../../Getepay_pg_react/Getepay_pg_react/index";
import { Config } from "../../../Getepay_pg_react/Getepay_pg_react/config";
import {
  useGetDonarStudentProfileQuery,
  useGetAcceptRaiseFundQuery,
  useGetQRCodeForDonationRequestQuery,
  useGetCoursesForDonarQuery,
  useGetDonarQuery,
  useAddDonationDetailsInDonarMutation,
  useGetRaiseFundForDonarQuery,
} from "../../../services/signUpApi";
import DonarNotification from "../donarNotification/DonarNotification";

const StudentProfile = () => {
  const { studentUID } = useParams();
  console.log(studentUID);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [qRCode, setQRCode] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [donarId, setDonarId] = useState("");
  const [donarEmail, setDonarEmail] = useState("");
  const [donarName,setDonarName]=useState('');
  const [studentName, setStudentName] = useState("");
  const [id, setId] = useState("");
  const [currentCourse, setCurrentCourse] = useState("");
  const [requiredAmount, setRequiredAmount] = useState("");
  const [raisedAmount, setRaisedAmount] = useState("");
  const [tableData, setTableData] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [panNumber,setPanNumber]=useState('');

  // const localHost = "http://localhost:5000";
  const localHost="https://global-education-t.onrender.com"

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const { data: donarData, isSuccess: donarDataIsSuccess } = useGetDonarQuery();
  useEffect(() => {
    if (donarDataIsSuccess && donarData && donarData.data) {
      setDonarId(donarData.data.id);
      setDonarEmail(donarData.data.email);
      setDonarName(donarData.data.name)
    }
  }, [donarData, donarDataIsSuccess]);

  // i m getting the studentUID as an array but i want only string so i use useParams hook

  // const [id, setId] = useState("");
  // const { data: acceptRaiseFund, isSuccess: acceptRaiseFundIsSuccess } =
  //   useGetAcceptRaiseFundQuery();
  // console.log(acceptRaiseFund)

  // useEffect(() => {
  //   if (
  //     acceptRaiseFundIsSuccess &&
  //     acceptRaiseFund &&
  //     acceptRaiseFund.data &&
  //     acceptRaiseFund.data.length > 0
  //   ) {
  //     const ids = acceptRaiseFund.data.map((item) => item.studentUID);
  //     setId(ids[0]);
  //   }
  // }, [acceptRaiseFundIsSuccess, acceptRaiseFund]);

  const { data: qRCodeData, isSuccess: qRCodeIsSuccess } =
    useGetQRCodeForDonationRequestQuery(studentUID);
  // console.log(qRCode);

  useEffect(() => {
    if (qRCodeData && qRCodeIsSuccess) {
      setQRCode(qRCodeData.data.qRCode);
    }
  }, [qRCodeData, qRCodeIsSuccess]);

  const { data: dataProfile, isSuccess: dataProfileIsSuccess } =
    useGetDonarStudentProfileQuery(studentUID);
  // console.log(dataProfile);

  useEffect(() => {
    if (dataProfile && dataProfileIsSuccess) {
      setStudentName(dataProfile.data.name);
      const firstProfileImage =
        dataProfile?.data?.studentProfileImage?.profileImage_FileName;
      if (firstProfileImage) {
        setProfileImage(firstProfileImage);
      }
    }
  }, [dataProfile, dataProfileIsSuccess]);

  const { data: courseData, isSuccess: courseIsSuccess } =
    useGetCoursesForDonarQuery(studentUID);
  // console.log(courseData);

  useEffect(() => {
    if (courseData && courseIsSuccess && courseData.data) {
      setTableData(courseData.data);
      const onGoingStudent = courseData.data.find(
        (student) => student.onGoing === true
      );
      console.log(onGoingStudent);
      if (onGoingStudent) {
        setId(onGoingStudent.id);
        setCurrentCourse(onGoingStudent.courseLevel);
      }
    }
  }, [courseData, courseIsSuccess]);

  const { data: raiseFund, isSuccess: raiseFundIsSuccess } =
    useGetRaiseFundForDonarQuery(studentUID);

  useEffect(() => {
    if (raiseFund && raiseFundIsSuccess && raiseFund.data) {
      setId(raiseFund.data.id);
      setRequiredAmount(raiseFund.data.requireFundForDonar);
      setRaisedAmount(raiseFund.data.raisedFundInPercent);
    }
  }, [raiseFund, raiseFundIsSuccess]);

  // console.log(donarId);

  const currentTime = new Date();
  const date = new Date(currentTime.getTime() + 330 * 60000).toUTCString();
  const transactionDate = `${date.slice(0, 3)} ${date.slice(
    8,
    11
  )} ${date.slice(5, 7)} ${date.slice(17, 25)} IST ${date.slice(12, 16)}`;
  const transactionId = new Date().getTime();

  const data = {
    mid: "971288",
    amount: amount,
    merchantTransactionId: transactionId,
    transactionDate: transactionDate,
    terminalId: "Getepay.merchant131530@icici",
    udf1: donarId,
    udf2: donarEmail,
    udf3: "",
    udf4: "",
    udf5: "",
    udf6: "",
    udf7: donarName,
    udf8: "",
    udf9: "",
    udf10: "",
    ru: "https://global-education-t.onrender.com/api/donar/returnUrl",
    // ru: "http://localhost:5000/api/donar/returnUrl",
    callbackUrl:
      "https://global-education-t.onrender.com/api/donar/callbackUrl",
    currency: "INR",
    paymentMode: "ALL",
    bankId: "",
    txnType: "single",
    productType: "IPG",
    txnNote: "Test Txn",
    vpa: "Getepay.merchant131530@icici",
  };

  const [addDonationDetails] = useAddDonationDetailsInDonarMutation();

  const sendDataToDatabase = async (
    studentName,
    studentUID,
    studentRaiseFundCourseId
  ) => {
    const donationData = {
      amount,
      donarId,
      donarName,
      studentName,
      studentUID,
      merchantTransactionId: transactionId,
      studentRaiseFundCourseId,
      panNumber
    };

    const res = await addDonationDetails(donationData);
    console.log(res);

    getepayPortal(
      data,
      Config,
      studentName,
      studentUID,
      studentRaiseFundCourseId,
      panNumber
    );
  };

  function convertToInteger(input) {
    const numericValue = Number(input);

    if (isNaN(numericValue)) {
      throw new Error("Input is not a valid number.");
    }

    return Math.floor(numericValue);
  }

  function getYearFromDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    return year;
  }

  const sortedCourses = [...tableData].sort((a, b) => {
    if (a.onGoing !== b.onGoing) {
      return a.onGoing ? -1 : 1;
    }

    // if (a.onGoing && b.onGoing) {
    //   if (a.courseLevel === tableData.currentLevel) return -1;
    //   if (b.courseLevel === tableData.currentLevel) return 1;
    // }

    const courseLevelOrder = {
      "High School": 0,
      Intermediate: 1,
      Graduation: 2,
      "Post Graduation": 3,
      Certification: 4,
    };

    const courseLevelComparison =
      courseLevelOrder[a.courseLevel] - courseLevelOrder[b.courseLevel];
    if (courseLevelComparison !== 0) {
      return courseLevelComparison;
    }

    return a.level - b.level;
  });

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

          {/* <!-- BEGIN: Search Modal --> */}

          {/* <!-- END: Search Modal --> */}
          {/* <!-- END: Header --> */}
          {/* <!-- END: Header --> */}
          <div
            className="content-wrapper transition-all duration-150 xl:ltr:ml-[248px] ml-0 ml-248px "
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
                              alt=""
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-4">
                            {studentName}
                          </div>
                          {/* <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                            Front End Developer
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- end profile box --> */}
                    <div className="profile-info-500 md:flex md:text-start text-center flex-1 md :max-w-[516px] md:space-y-0 space-y-4">
                      <div className="flex-1 ">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1 mt-3 ">
                          Current Course
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300 ">
                          {currentCourse}
                        </div>
                      </div>
                      {/* <!-- end single --> */}
                      <div className="flex-1">
                        <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1 mt-3">
                          UID
                        </div>
                        <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                          {studentUID}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div
                          className="inline-block px-3 min-w-[120px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500 mt-3 cursor-pointer"
                          onClick={() => setShowModal(!showModal)}
                        >
                          Donate Now
                        </div>
                        {showModal && (
                          <>
                            <div className="alert-modal">
                              <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                                <div className="2xl:col-span-9 lg:col-span-12 col-span-12 mb-5">
                                  <div
                                    className="bg-white rounded-md p-6 "
                                    style={{
                                      width: "auto",
                                      height: "auto",
                                      borderRadius: "5px",
                                      // padding: "15px",
                                      position: "relative",
                                    }}
                                  >
                                    <img
                                      src={close}
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        top: "10px",
                                        right: "10px",
                                        pointer: "cursor",
                                        position: "absolute",
                                      }}
                                      alt="close"
                                      onClick={() => setShowModal(false)}
                                    />

                                    <div className="grid grid-cols-12 gap-6 mt-3">
                                      <div className="2xl:col-span-9 lg:col-span-12 col-span-12">
                                        <div className="p-4 card">
                                          <div className="grid md:grid-cols-2 col-span-1 gap-4 ">
                                            {/* <!-- BEGIN: Group Chart2 --> */}

                                            <div className="py-[18px] px-4 rounded-[6px] bg-[#E5F9FF] dark:bg-slate-900	 ">
                                              <div className="flex items-center  rtl:space-x-reverse">
                                                <div className="flex-none">
                                                  <div id="wline1"></div>
                                                </div>
                                                <div className="flex-1">
                                                  <div
                                                    className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium flex justify-center items-center"
                                                    style={{ fontSize: "15px" }}
                                                  >
                                                    Required Amount
                                                  </div>
                                                  <div className="text-slate-900 dark:text-white text-lg font-medium ">
                                                    {requiredAmount}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="py-[18px] px-4 rounded-[6px] bg-[#FFEDE5] dark:bg-slate-900	 ">
                                              <div className="flex items-center  rtl:space-x-reverse">
                                                <div className="flex-none">
                                                  <div id="wline2"></div>
                                                </div>
                                                <div className="flex-1">
                                                  <div
                                                    className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium"
                                                    style={{ fontSize: "15px" }}
                                                  >
                                                    Raised Amount
                                                  </div>
                                                  <div className="text-slate-900 dark:text-white text-lg font-medium">
                                                    {convertToInteger(
                                                      raisedAmount
                                                    )}
                                                    %
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            {/* <!-- END: Group Chart2 --> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-8 gap-6">
                                      <div className="fromGroup mt-3 justify-center items-center">
                                        <label className="block capitalize form-label">
                                          Donate Amount
                                        </label>
                                        <div className="relative  ">
                                          <input
                                            style={{
                                              fontSize: "13px",
                                              width: "100%",
                                            }}
                                            type="text"
                                            name="amount"
                                            className="form-control"
                                            placeholder="Enter Amount"
                                            value={amount}
                                            onChange={(e) =>
                                              setAmount(e.target.value)
                                            }
                                          />
                                          {Number(amount) > 49999 && (
                                            <input
                                              type="text"
                                              name="panNumber"
                                              className="form-control mt-3"
                                              placeholder="Pan Number"
                                              value={panNumber}
                                              onChange={(e) =>
                                                setPanNumber(e.target.value)
                                              }
                                            />
                                          )}
                                          <button
                                            className="btn inline-flex justify-center btn-dark"
                                            style={{ margin: "10px" }}
                                            type="button"
                                            onClick={() =>
                                              sendDataToDatabase(
                                                studentName,
                                                studentUID,
                                                id
                                              )
                                            }
                                          >
                                            Pay Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* <!-- profile info-500 --> */}
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="2xl:col-span-9 lg:col-span-12 col-span-12">
                      <div className="p-4 card">
                        <div className="grid md:grid-cols-2 col-span-1 gap-4 ">
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
                                  Required Amount
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  {requiredAmount}
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
                                  Raised Amount
                                </div>
                                <div className="text-slate-900 dark:text-white text-lg font-medium">
                                  {convertToInteger(raisedAmount)}%
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- END: Group Chart2 --> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" space-y-5">
                    <div className="card">
                      <div className=" px-6 pb-6">
                        <div className="overflow-x-auto -mx-6 dashcode-data-table">
                          <span className=" col-span-8  "></span>
                          <span className="  col-span-4 "></span>
                          <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                              <table
                                className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                                id="data-table"
                              >
                                <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                                  <tr>
                                    <th
                                      scope="col"
                                      className=" table-th "
                                      style={{ color: "#000" }}
                                    >
                                      SNo
                                    </th>

                                    <th
                                      scope="col"
                                      className=" table-th "
                                      style={{ color: "#000" }}
                                    >
                                      Course
                                    </th>

                                    <th
                                      scope="col"
                                      className=" table-th "
                                      style={{ color: "#000" }}
                                    >
                                      Year
                                    </th>

                                    <th
                                      scope="col"
                                      className=" table-th "
                                      style={{ color: "#000" }}
                                    >
                                      %
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                                  {sortedCourses?.map((item, index) => (
                                    <tr key={item.id}>
                                      <td className="table-td">{index + 1}</td>
                                      <td className="table-td">
                                        {item.courseLevel}
                                      </td>

                                      <td className="table-td">
                                        {getYearFromDate(item.endDate)}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
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
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
