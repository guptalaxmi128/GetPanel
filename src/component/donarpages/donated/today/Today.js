import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {Search} from 'react-feather';
import icon from "../../../../assets/images/ck-white.svg";
import download from "../../../../assets/import.png";
import noRecord from "../../../../assets/no-record-found.png";
import {
  useGetDonationDonatedTodayQuery,
  useGetDownloadReceiptQuery,
} from "../../../../services/signUpApi";
import RegisterDonarReceipt from "../../registerDonarReceipt/RegisterDonarReceipt";

const Today = () => {
  const [showDataReceiver, setShowDataReceiver] = useState(false);
  const [id, setId] = useState("");
  const [studentData, setStudentData] = useState([]);
  const entriesPerPage = 3; // Number of entries to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(studentData?.length);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [receipt,setReceipt]=useState([]);

  const { data, isSuccess } = useGetDonationDonatedTodayQuery();
  // console.log(data);

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setStudentData(data.data);
    }
  }, [isSuccess, data]);


  const { data: downloadReceipt, isSuccess: downloadReceiptIsSuccess } =
  useGetDownloadReceiptQuery(id);
// console.log(downloadReceipt);

useEffect(() => {
  if (downloadReceipt && downloadReceiptIsSuccess && downloadReceipt.data) {
    setReceipt(downloadReceipt.data);
  }
}, [downloadReceipt,downloadReceiptIsSuccess]);

const handleDownload = async (id) => {
  try {
    setId(id);

    if (downloadReceiptIsSuccess) {
      toast.success(downloadReceipt.message)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowDataReceiver(true);
    }
    // else{
    //   toast.error('You can generate receipt after two days of donation!');
    //   setShowDataReceiver(false); 
    // }
  } catch (error) {
    toast.error('An error occurred while fetching download receipt.');
    setShowDataReceiver(false); 
  }

};
  useEffect(() => {
  
    const filteredData = studentData?.filter((entry) => {
      const studentName = entry.studentName || ''; 
      const amount = entry.amount || ''; 
      return (
        studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        amount.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredEntries(filteredData);
    setTotalEntries(filteredData?.length || 0);
    setCurrentPage(1); 
  }, [searchQuery, studentData]); 
  

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

  // Calculate the start and end index of the entries to display on the current page
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);

  return (
    <>
    <div className=" space-y-5">
      <div className="card">
        <div className="px-6">
          <div className="overflow-x-auto -mx-6 dashcode-data-table">
            <span className=" col-span-8  "></span>
            <span className="  col-span-4 "></span>
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
              {getCurrentPageEntries().length === 0 ? (
                                   
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
                    <Search style={{ margin: "8px", color: "#EC6E46" }} />
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
                      placeholder="Search by Name or Amount"
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
                        Transaction Id
                      </th>

                      <th scope="col" className=" table-th ">
                        Amount
                      </th>

                      <th scope="col" className=" table-th ">
                        View Details
                      </th>

                      <th scope="col" className=" table-th ">
                        Status
                      </th>

                      <th scope="col" className=" table-th ">
                        Receipt
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {getCurrentPageEntries().map((entry, index) => {
                      if (entry.status === "SUCCESS") {
                        return (
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
                                {entry.studentName}
                              </span>
                            </td>

                            <td className="table-td">
                              <div
                                className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                              >
                                {entry.getepayTxnId}
                              </div>
                            </td>
                            <td className="table-td ">
                              <div>
                                ₹ {entry.amount}
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
                              <Link to={`student/profile/${entry.studentUID}`}>
                                <span style={{ color: "#EC6E46" }}>
                                  Profile
                                </span>
                              </Link>
                            </td>

                            <td className="table-td">
                           
                                <div
                                  className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
        bg-success-500"
                                >
                                  {entry.status}
                                </div>
                              
                            </td>
                            <td className="table-td ">
                              <div
                                style={{ display: "flex", cursor: "pointer" }}
                                onClick={() => handleDownload(entry.id)}
                              >
                                <span className="h-5 w-5 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                                  <img src={download} alt="" />
                                </span>
                                &nbsp;&nbsp;
                                <div style={{ color: "#000", fontWeight: 500 }}>
                                  Download
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      }else {
      return null; 
    }
                    })}
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
       {showDataReceiver &&  receipt && <RegisterDonarReceipt download={receipt} />}
       <ToastContainer />
       </>
  );
};

export default Today;
