import React, { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import icon from "../../../../assets/images/ck-white.svg";
// import filter from "../../../../assets/images/filter.png";
import close from "../../../../assets/close.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import noRecord from "../../../../assets/no-record-found.png";
import getepayPortal from "../../../../Getepay_pg_react/Getepay_pg_react/index";
import { Config } from "../../../../Getepay_pg_react/Getepay_pg_react/config";
import {
  useAddDonationDetailsInDonarMutation,
  useDeleteRejectedRaiseFundMutation,
  useGetAcceptTodayRaiseFundQuery,
  useGetDonarQuery,
  useGetRaiseFundForDonarQuery
} from "../../../../services/signUpApi";

const Today = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [donarId, setDonarId] = useState("");
  const [donarEmail, setDonarEmail] = useState("");
  const [donarName,setDonarName]=useState('');
  const [studentUID,setStudentUID]=useState('');
  const [raisedAmount,setRaisedAmount]=useState('');
  const [requiredAmount,setRequiredAmount]=useState('');
  const [panNumber,setPanNumber]=useState('');

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

  const { data: donarData, isSuccess: donarDataIsSuccess } = useGetDonarQuery();

  useEffect(() => {
    if (donarDataIsSuccess && donarData && donarData.data) {
      setDonarId(donarData.data.id);
      setDonarEmail(donarData.data.email);
      setDonarName(donarData.data.name)
    }
  }, [donarData, donarDataIsSuccess]);

  const {
    data: acceptTodayRaiseFund,
    isSuccess: acceptTodayRaiseFundIsSuccess,
  } = useGetAcceptTodayRaiseFundQuery();
  console.log(acceptTodayRaiseFund);

  useEffect(() => {
    if (
      acceptTodayRaiseFundIsSuccess &&
      acceptTodayRaiseFund &&
      acceptTodayRaiseFund.data
    ) {
      setStudentData(acceptTodayRaiseFund.data);
    }
  }, [acceptTodayRaiseFundIsSuccess, acceptTodayRaiseFund]);



  const [deleteRejectedRaiseFund] = useDeleteRejectedRaiseFundMutation();

  const handleDelete = async (id) => {
    try {
      await deleteRejectedRaiseFund(id);
      toast.success("Student Rejected Successfully!");
    } catch (error) {
      toast.error(error);
    }
  };

  const { data: raiseFund, isSuccess: raiseFundIsSuccess } =
  useGetRaiseFundForDonarQuery(studentUID);
  // console.log("data", raiseFund);

  // console.log(studentData)
  
  useEffect(() => {
    if (raiseFund && raiseFundIsSuccess && raiseFund.data) {
      setRequiredAmount(raiseFund.data.requireFundForDonar);
      setRaisedAmount(raiseFund.data.raisedFundInPercent);
    }
  }, [raiseFund, raiseFundIsSuccess]);
  console.log(requiredAmount)
  console.log(raisedAmount)

  function convertToInteger(input) {
    const numericValue = Number(input);

    if (isNaN(numericValue)) {
      throw new Error("Input is not a valid number.");
    }

    return Math.floor(numericValue);
  }


  const handleButtonClicked =(studentUID)=>{
    setStudentUID(studentUID);
    setShowModal(!showModal)
  }

  const [addDonationDetails] = useAddDonationDetailsInDonarMutation();

  const entriesPerPage = 3; // Number of entries to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(studentData?.length);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEntries, setFilteredEntries] = useState([]);

  useEffect(() => {
    // Filter entries based on the search query
    const filteredData = studentData?.filter(
      (entry) =>
        entry.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.currentCourse.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.requireFundForDonar
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        entry.remainRequireFundForDonar
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    );
    setFilteredEntries(filteredData);
    setTotalEntries(filteredData.length);
    setCurrentPage(1); // Reset to the first page after search
  }, [searchQuery,studentData]);

  const getCurrentPageEntries = () => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    // return filteredEntries.slice(startIndex, endIndex); //for when user enter studentName,currentCourse etc.. search than data is appear
    return searchQuery
      ? filteredEntries.slice(startIndex, endIndex)
      : studentData.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // console.log(filteredEntries)

  // Calculate the start and end index of the entries to display on the current page
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);

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

  return (
    <>
    <div className=" space-y-5">
      <div className="card">
        <div className="px-6 ">
          <div className="overflow-x-auto -mx-6 dashcode-data-table">
            <span className=" col-span-8  "></span>
            <span className="  col-span-4 "></span>
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
              {getCurrentPageEntries().length === 0 ? (
                                    // If there's no data, don't render the table
                                    <div className="text-center py-4">
                                      <img
                                        src={noRecord}
                                        alt="No data available"
                                        style={{
                                          display: "block",
                                          margin: "0 auto",
                                        }}
                                      />
                                      <p>No data available.</p>
                                    </div>
                                  ) : (
                                    <>
                <div style={{ margin: "12px" }} className="flex">
                  {/* <div
                    className="flex"
                    style={{
                      width: "88px",
                      height: "40px",
                      border: "1px solid #EC6E46",
                      borderRadius: "6px",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={filter}
                      alt="filter"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <p style={{ fontSize: "12px" }}>Filter</p>
                  </div> */}
                  <div
                    style={{
                      width: "500px",
                      height: "40px",
                      borderRadius: "6px",
                      marginLeft: "10px",
                      border: "1px solid #dcdcdc",
                      display: "flex",
                    }}
                  >
                    <SearchIcon
                      style={{
                        margin: "10px",
                        color: "#EC6E46",
                        fontSize: "20px",
                      }}
                    />
                    <input
                      type="text"
                      name="search"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        width: "500px",
                      }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by Name, Course, Amount Required, or Remains Required Fund"
                    />
                  </div>
                </div>
                <table
                  className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                  id="data-table"
                >
                  <thead
                    className=" border-t border-slate-100 dark:border-slate-800 "
                    style={{ backgroundColor: "#EC6E46" }}
                  >
                    <tr>
                      <th scope="col" className=" table-th ">
                        <div className="checkbox-area">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="hidden"
                              name="checkbox"
                            />
                            <span className="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                              <img
                                src={icon}
                                alt=""
                                className="h-[10px] w-[10px] block m-auto opacity-0"
                              />
                            </span>
                          </label>
                        </div>
                      </th>

                      <th scope="col" className=" table-th ">
                        Name
                      </th>

                      <th scope="col" className=" table-th ">
                        Current Course
                      </th>

                      <th scope="col" className=" table-th ">
                        Amount Required
                      </th>

                      <th scope="col" className=" table-th ">
                        Remains Required Fund
                      </th>

                      <th scope="col" className=" table-th ">
                        View Details
                      </th>

                      <th scope="col" className=" table-th ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    {getCurrentPageEntries().map((item, index) => (
                      <tr key={index}>
                        <td className="table-td">
                          {" "}
                          <div className="checkbox-area">
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="hidden"
                                name="checkbox"
                              />
                              <span className="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                                <img
                                  src={icon}
                                  alt=""
                                  className="h-[10px] w-[10px] block m-auto opacity-0"
                                />
                              </span>
                            </label>
                          </div>
                        </td>
                        <td className="table-td ">
                          <span style={{ color: "#000", fontWeight: 500 }}>
                            {item.studentName}
                          </span>
                        </td>

                        <td className="table-td">
                          <div
                            className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                          >
                            {item.currentCourse}
                          </div>
                        </td>
                        <td className="table-td">
                          <div>
                            ₹ {item.requireFundForDonar}
                            <p
                              style={{
                                marginLeft: "30px",
                                fontSize: "12px",
                                color: "#6E6893",
                              }}
                            >
                              INR
                            </p>
                          </div>
                        </td>
                        <td className="table-td">
                          <div>
                            ₹ {item.remainRequireFundForDonar}
                            <p
                              style={{
                                marginLeft: "30px",
                                fontSize: "12px",
                                color: "#6E6893",
                              }}
                            >
                              INR
                            </p>
                          </div>
                        </td>
                        <td className="table-td ">
                          <Link to={`student/profile/${item.studentUID}`}>
                            <span style={{ color: "#EC6E46" }}>Profile</span>
                          </Link>
                        </td>
                        <td className="table-td ">
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div
                              className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
        bg-success-500 cursor-pointer"
        onClick={()=>handleButtonClicked(item.studentUID)}
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
                                                  item.studentName,
                                                  item.studentUID,
                                                  item.id,
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
                            <div
                              className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500
        bg-danger-500 cursor-pointer"   onClick={() => handleDelete(item.id)}
                            >
                              Rejected
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  className="flex flex-col p-6"
                  style={{ backgroundColor: "rgba(236, 110, 70, 0.2)" }}
                >
                  <div className="card-text h-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      {/* Display the current page range */}
                      <span>
                        Showing {startIndex + 1} to {endIndex} of {totalEntries}{" "}
                        entries
                      </span>
                    </div>
                    <div>
                      <ul className="list-none">
                        {/* Previous page button */}
                        <li className="inline-block">
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            <KeyboardArrowLeftIcon
                              style={{
                                fontSize: "20px",
                              }}
                            />
                          </button>
                        </li>

                        {/* Page numbers */}
                        {Array.from(
                          { length: Math.ceil(totalEntries / entriesPerPage) },
                          (_, index) => index + 1
                        ).map((page) => (
                          <li key={page} className="inline-block">
                            <button
                              onClick={() => handlePageChange(page)}
                              className={`flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 relative top-[2px]  ${
                                          currentPage === page ? "active" : ""
                                        }`}
                            >
                              {page}
                            </button>
                          </li>
                        ))}

                        {/* Next page button */}
                        <li className="inline-block">
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={
                              currentPage ===
                              Math.ceil(totalEntries / entriesPerPage)
                            }
                          >
                            <KeyboardArrowRightIcon
                              style={{ fontSize: "20px" }}
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </>)}
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

export default Today;
