import React, { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import icon from "../../../../assets/images/ck-white.svg";
import filter from "../../../../assets/images/filter.png";
import { Link } from "react-router-dom";
import close from "../../../../assets/close.png";
import getepayPortal from "../../../../Getepay_pg_react/Getepay_pg_react/index";
import { Config } from "../../../../Getepay_pg_react/Getepay_pg_react/config";
import {
  useGetAcceptRaiseFundQuery,
  useGetDonarQuery,
} from "../../../../services/signUpApi";

const All = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [donarId, setDonarId] = useState("");
  const [donarEmail, setDonarEmail] = useState("");
 

  const currentTime = new Date();
  const date = new Date(currentTime.getTime() + 330 * 60000).toUTCString();
  const transactionDate = `${date.slice(0, 3)} ${date.slice(
    8,
    11
  )} ${date.slice(5, 7)} ${date.slice(17, 25)} IST ${date.slice(12, 16)}`;
  const transactionId= new Date().getTime();

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
    udf7: "",
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

  const { data: acceptRaiseFund, isSuccess: acceptRaiseFundIsSuccess } =
    useGetAcceptRaiseFundQuery();
  // console.log("donar", acceptRaiseFund);
  const { data: donarData, isSuccess: donarDataIsSuccess } = useGetDonarQuery();

  useEffect(() => {
    if (donarDataIsSuccess && donarData && donarData.data) {
      setDonarId(donarData.data.id);
      setDonarEmail(donarData.data.email);
    }
  }, [donarData, donarDataIsSuccess]);

  useEffect(() => {
    if (acceptRaiseFundIsSuccess && acceptRaiseFund && acceptRaiseFund.data) {
      setStudentData(acceptRaiseFund.data);
    }
  }, [acceptRaiseFundIsSuccess, acceptRaiseFund]);

  console.log("data", studentData);


  return (
    <div className="space-y-5">
      <div className="card">
        <div className="px-6 ">
          <div className="overflow-x-auto -mx-6 dashcode-data-table">
            <span className=" col-span-8  "></span>
            <span className="  col-span-4 "></span>
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <div style={{ margin: "12px" }} className="flex">
                  <div
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
                  </div>
                  <div
                    style={{
                      width: "392px",
                      height: "40px",
                      borderRadius: "6px",
                      marginLeft: "10px",
                      border: "1px solid #dcdcdc",
                      display: "flex",
                    }}
                  >
                    <SearchIcon style={{ margin: "10px", color: "#EC6E46",fontSize:'20px' }} />
                    <input
                      type="text"
                      name="search"
                      //   className="py-2"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        width: "300px",
                        fontSize: "12px",
                      }}
                      placeholder="Search Users by Name or Email"
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

                      {/* <th scope="col" className=" table-th ">
                        Mobile Number
                      </th> */}

                      <th scope="col" className=" table-th ">
                        Current Course
                      </th>

                      <th scope="col" className=" table-th ">
                        Amount Required
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
                    {studentData.map((item, index) => (
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
                            ₹ {item.yourRequirements}
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
                              onClick={() => setShowModal(!showModal)}
                            >
                              Donate Now
                            </div>
                            {showModal && (
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
                                        onClick={() => setShowModal(false)}
                                      />
                                      <div className="fromGroup">
                                        <label className="block capitalize form-label">
                                          Donate Amount
                                        </label>
                                        <div className="relative ">
                                          <input
                                          style={{fontSize:'13px'}}
                                            type="text"
                                            name="amount"
                                            className="form-control py-2"
                                            placeholder="Enter Amount"
                                            value={amount}
                                            onChange={(e) =>
                                              setAmount(e.target.value)
                                            }
                                          />
                                          <button
                                            className="btn inline-flex justify-center btn-dark"
                                            style={{ margin: "10px" }}
                                            type="button"
                                            onClick={() =>
                                              getepayPortal(
                                                data,
                                                Config,
                                                item.studentName,
                                                item.studentUID
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
                              </>
                            )}
                            <div
                              className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-danger-500
        bg-danger-500"
                            >
                              Rejected
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {/* <tr>
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
                      <td className="table-td  ">
                        <span style={{ color: "#000", fontWeight: 500 }}>
                          Jenny Wilson
                        </span>
                  
                      </td>
                  
                      <td className="table-td">
                        <div
                          className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        >
                          B.tech
                        </div>
                      </td>
                      <td className="table-td ">
                        <div>
                          ₹ 20,000
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
                        <Link to={"/student-profile"}>
                          <span style={{ color: "#EC6E46" }}>Profile</span>
                        </Link>
                      </td>

                      <td className="table-td ">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div
                            className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
        bg-success-500 cursor-pointer"
                            onClick={() => setShowModal(!showModal)}
                          >
                            Donate Now
                          </div>
                          {showModal && (
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
                                      onClick={() => setShowModal(false)}
                                    />
                                    <div className="fromGroup">
                                      <label className="block capitalize form-label">
                                        Donate Amount
                                      </label>
                                      <div className="relative ">
                                        <input
                                          type="text"
                                          name="amount"
                                          className="form-control py-2"
                                          placeholder="Enter Amount"
                                          value={amount}
                                          onChange={(e) =>
                                            setAmount(e.target.value)
                                          }
                                        />
                                        <button
                                          className="btn inline-flex justify-center btn-dark"
                                          style={{ margin: "10px" }}
                                          type="button"
                                          onClick={() =>
                                            getepayPortal(data, Config)
                                          }
                                        >
                                          Pay Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          <div
                            className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                          >
                            Rejected
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
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
                      <td className="table-td">
                        <span style={{ color: "#000", fontWeight: 500 }}>
                          Jenny Wilson
                        </span>
                   
                      </td>
                  
                      <td className="table-td">
                        <div
                          className="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        >
                          B.tech
                        </div>
                      </td>
                      <td className="table-td ">
                        <div>
                          ₹ 20,000
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
                        <Link to={"/student-profile"}>
                          <span style={{ color: "#EC6E46" }}>Profile</span>
                        </Link>
                      </td>
                      <td className="table-td ">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div
                            className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
        bg-success-500  cursor-pointer"
                            onClick={() => setShowModal(!showModal)}
                          >
                            Donate Now
                          </div>
                          {showModal && (
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
                                      onClick={() => setShowModal(false)}
                                    />
                                    <div className="fromGroup">
                                      <label className="block capitalize form-label">
                                        Donate Amount
                                      </label>
                                      <div className="relative ">
                                        <input
                                          type="text"
                                          name="amount"
                                          className="form-control py-2"
                                          placeholder="Enter Amount"
                                          value={amount}
                                          onChange={(e) =>
                                            setAmount(e.target.value)
                                          }
                                        />
                                        <button
                                          className="btn inline-flex justify-center btn-dark"
                                          style={{ margin: "10px" }}
                                          type="button"
                                          onClick={() =>
                                            getepayPortal(data, Config)
                                          }
                                        >
                                          Pay Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          <div
                            className="inline-block px-3 min-w-[100px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                          >
                            Rejected
                          </div>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
                <div
                  className="card-body flex flex-col "
                  style={{ backgroundColor: " rgba(236, 110, 70, 0.2)" }}
                >
                  <div className="card-text h-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <select
                        className="dataNumber borde bg-transparent !border-slate-400 dark:!border-slate-600 !pr-5 rounded-md"
                        id="dataNumber"
                      >
                        <option value="0" disabled="disabled" >
                          Go
                        </option>
                        <option value="1" style={{fontSize:'12px'}}>1</option>
                        <option value="5" style={{fontSize:'12px'}}>5</option>
                        <option value="10" style={{fontSize:'12px'}}>10</option>
                      </select>
                      <span style={{fontSize:'12px'}}>of 10 entries</span>
                    </div>
                    <div>
                      <ul className="list-none">
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 relative top-[2px] pl-2"
                          >
                            {/* <iconify-icon icon="material-symbols:arrow-back-ios-rounded"></iconify-icon> */}
                            <KeyboardArrowLeftIcon
                              style={{
                                fontSize: "medium",
                                marginRight: "10px",
                              }}
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 p-active"
                          >
                            1
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 "
                          >
                            2
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 "
                          >
                            3
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 "
                          >
                            4
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 "
                          >
                            5
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            href="#"
                            className="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 relative top-[2px]"
                          >
                            {/* <iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon> */}
                            <KeyboardArrowRightIcon
                              style={{ fontSize: "medium", marginLeft: "6px" }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
