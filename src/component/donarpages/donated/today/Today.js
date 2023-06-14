import React from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from "@mui/icons-material/Search";
import icon from "../../../../assets/images/ck-white.svg";
import filter from "../../../../assets/images/filter.png";

const Today = () => {
  return (
    <div className=" space-y-5">
      <div className="card">
        <div className="card-body px-6">
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
                      border:'1px solid #dcdcdc',
                      display:'flex'
                    }}
                  >
                  <SearchIcon style={{margin:"8px",color:'#EC6E46'}} />
                    <input
                      type="text"
                      name="search"
                    //   className="py-2"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        width:'300px'
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
                        <div class="checkbox-area">
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              class="hidden"
                              name="checkbox"
                            />
                            <span class="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                              <img
                                src={icon}
                                alt=""
                                class="h-[10px] w-[10px] block m-auto opacity-0"
                              />
                            </span>
                          </label>
                        </div>
                      </th>

                      <th scope="col" className=" table-th ">
                        Name
                      </th>

                     
                      <th scope="col" className=" table-th ">
                        Course
                      </th>
                         
                   

                      <th scope="col" className=" table-th ">
                        Amount Required
                      </th>

                      <th scope="col" className=" table-th ">
                        Donated Amount
                      </th>

                      <th scope="col" className=" table-th ">
                        Profile
                      </th>

                      <th scope="col" className=" table-th ">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    <tr>
                      <td className="table-td">
                        {" "}
                        <div class="checkbox-area">
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              class="hidden"
                              name="checkbox"
                            />
                            <span class="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                              <img
                                src={icon}
                                alt=""
                                class="h-[10px] w-[10px] block m-auto opacity-0"
                              />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td className="table-td ">
                      <span style={{color:'#000',fontWeight:500}}>Jenny Wilson</span>
                        {/* <div className="table-data">example@email.com</div> */}
                      </td>
                      {/* <td className="table-td table-data">+91 7088440955</td> */}
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
                        {" "}
                        <span style={{ color: "#EC6E46" }}>Profile</span>
                      </td>
                      <td className="table-td ">
                        <div
                          className="inline-block px-3 min-w-[120px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-success-500
        bg-success-500"
                        >
                          Approved
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="table-td">
                        {" "}
                        <div class="checkbox-area">
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              class="hidden"
                              name="checkbox"
                            />
                            <span class="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                              <img
                                src={icon}
                                alt=""
                                class="h-[10px] w-[10px] block m-auto opacity-0"
                              />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td className="table-td  ">
                      <span style={{color:'#000',fontWeight:500}}>Jenny Wilson</span>
                        {/* <div className="table-data">example@email.com</div> */}
                      </td>
                      {/* <td className="table-td table-data">+91 7088440955</td> */}
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
                        {" "}
                        <span style={{ color: "#EC6E46" }}>Profile</span>
                      </td>
                      <td className="table-td ">
                        <div
                          className="inline-block px-3 min-w-[120px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        >
                          Pending
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="table-td">
                        {" "}
                        <div class="checkbox-area">
                          <label class="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              class="hidden"
                              name="checkbox"
                            />
                            <span class="h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150 bg-slate-100 dark:bg-slate-900">
                              <img
                                src={icon}
                                alt=""
                                class="h-[10px] w-[10px] block m-auto opacity-0"
                              />
                            </span>
                          </label>
                        </div>
                      </td>
                      <td className="table-td">
                      <span style={{color:'#000',fontWeight:500}}>Jenny Wilson</span>
                        {/* <div className="table-data">example@email.com</div> */}
                      </td>
                      {/* <td className="table-td table-data">+91 7088440955</td> */}
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
                        <span style={{ color: "#EC6E46" }}>Profile</span>
                      </td>
                      <td className="table-td ">
                        <div
                          className="inline-block px-3 min-w-[120px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        >
                          Pending
                        </div>
                      </td>
                    </tr>
                   
                  </tbody>
                  
                </table>
                <div class="card-body flex flex-col p-6" style={{backgroundColor:' rgba(236, 110, 70, 0.2)'}}>
                    <div class="card-text h-full flex flex-wrap items-center justify-between">
                      <div class="flex items-center space-x-2 mb-2 sm:mb-0">
                        <select class="dataNumber borde bg-transparent !border-slate-400 dark:!border-slate-600 !pr-5 rounded-md" id="dataNumber">
                          <option value="0" disabled="disabled">Go</option>
                          <option value="1">1</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                        </select>
                        <span>of 10 entries</span>
                      </div>
                      <div>
                        <ul class="list-none">
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 relative top-[2px] pl-2">
                              {/* <iconify-icon icon="material-symbols:arrow-back-ios-rounded"></iconify-icon> */}
                              <KeyboardArrowLeftIcon style={{fontSize:'medium',marginRight:'10px'}} />
                            </a>
                          </li>
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 p-active">
                              1</a>
                          </li>
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 ">
                              2</a>
                          </li>
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 ">
                              3</a>
                          </li>
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 ">
                              4</a>
                          </li>
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 ">
                              5</a>
                          </li>
                          <li class="inline-block">
                            <a href="#" class="flex items-center justify-center w-6 h-6 bg-slate-100 dark:bg-slate-700 dark:hover:bg-black-500 text-slate-800
                                        dark:text-white rounded mx-[3px] sm:mx-1 hover:bg-black-500 hover:text-white text-sm font-Inter font-medium transition-all
                                        duration-300 relative top-[2px]">
                              {/* <iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon> */}
                              <KeyboardArrowRightIcon style={{fontSize:'medium',marginLeft:'6px'}} />
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

export default Today;
