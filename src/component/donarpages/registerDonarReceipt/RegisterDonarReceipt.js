import React, { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

// import "../../donateform/DonateForm.css";
import { useGetDonarQuery } from "../../../services/signUpApi";

const RegisterDonarReceipt = ({ download }) => {
  // console.log(download)


  const [showComponent, setShowComponent] = useState("");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber,setMobileNumber]=useState('')

  useEffect(() => {
    if (download) {
      setData([download]);
    }
  }, [download]);

  const { data: donar, isSuccess: donarIsSuccess } = useGetDonarQuery();
  useEffect(() => {
    if (donar && donarIsSuccess && donar.data) {
      setName(donar.data.name);
      setAddress(donar.data.address);
      setMobileNumber(donar.data.mobileNumber)
    }
  }, [donar, donarIsSuccess]);

  const handleDownloadPDF = () => {
    const element = document.getElementById("component-to-download");
    html2pdf()
      .set({
        html2canvas: { scale: 2 },
        filename: "Receipt.pdf",
        margin: [10, 10],
      })
      .from(element)
      .save();
  };

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Pad single digits with leading zero
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  }

  const handleDownload = (item) => {
    console.log(item);
    setSelectedData([item]);
    setShowComponent(true);
  };
  // console.log(data);

  return (
    <>
      <>
        <div className="modal-overlay">
          <div className="modal-content">
            <div className=" space-y-5">
              <div className="card">
                {data && data?.length > 0 ? (
                  <>
                    <header className=" card-header noborder">
                      <h4 className="card-title" style={{ fontSize: "16px" }}>
                        Donation Details
                      </h4>
                    </header>
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
                                    Receipt No
                                  </th>

                                  <th
                                    scope="col"
                                    className=" table-th "
                                    style={{ color: "#000" }}
                                  >
                                    Amount
                                  </th>

                                  <th
                                    scope="col"
                                    className=" table-th "
                                    style={{ color: "#000" }}
                                  >
                                    Date
                                  </th>

                                  <th
                                    scope="col"
                                    className=" table-th "
                                    style={{ color: "#000" }}
                                  >
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                                {data?.map((item, index) => (
                                  <tr key={item.id}>
                                    <td className="table-td">{index + 1}</td>
                                    <td className="table-td ">
                                      {item.merchantTransactionId}
                                    </td>

                                    <td className="table-td ">{item.amount}</td>
                                    <td className="table-td ">
                                      {formatDate(item.createdAt)}
                                    </td>

                                    <td className="table-td ">
                                      <div>
                                        <div className="relative">
                                          <button
                                            className="text-xl text-center block  btn"
                                            type="button"
                                            onClick={() => handleDownload(item)}
                                          >
                                            Download
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </>

      {showComponent && (
        <div className="modal-overlay" style={{height:'1000px'}}>
          <div className="modal-content" >

            <>
              {selectedData?.map((item, index) => {
                return (
                  <div id="component-to-download">
                    <div style={{ padding: "10px" }} key={item.id}>
                      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
                        <div
                          className="auth-box-3"
                          style={{
                            border: "2px solid #000",
                            padding: "0px",
                            width: "900px",
                            height: "auto",
                          }}
                        >
                          <div
                            className="font-medium"
                            style={{
                              fontSize: "18px",
                              fontWeight: 600,
                              background: "#c5590f",
                              color: "white",
                              padding: "0.5rem",
                              height: "30px",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            GLOBAL EDUCATION TRUST
                          </div>

                          <div
                            className="text-slate-500 dark:text-slate-400 text-base"
                            style={{
                              fontSize: "14px",
                              background: "#f8cbac",
                              padding: "0.5rem",
                              color: "#000",
                              height: "30px",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            K-60, GROUND FLOOR, JUNGPURA EXT.
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              background: "#fae4d9",
                              // padding:'0.2rem',
                              color: "#000",
                              height: "25px",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            New Delhi. 110014
                          </div>

                          <div
                            style={{
                              justifyContent: "space-between",
                              display: "flex",
                              padding: "5px",
                            }}
                          >
                            <p
                              style={{
                                fontWeight: 600,
                                color: "#000",
                                fontSize: "13px",
                              }}
                            >
                              Phone No: +91 9355541415
                            </p>
                            <p
                              style={{
                                fontWeight: 600,
                                color: "#000",
                                fontSize: "13px",
                              }}
                            >
                              Email Id: support@globaleducationtrust.org
                            </p>
                          </div>
                          <p
                            style={{
                              fontSize: "14px",
                              background: "#fed76e",
                              border: "2px solid #000",
                              height: "30px",
                              width: "180px",
                              fontWeight: 600,
                              color: "#000",
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                              borderLeftWidth: 0,
                            }}
                          >
                            PAN No: &nbsp;AAETG0691D
                          </p>
                          <p
                            style={{
                              color: "#000",
                              fontWeight: 500,
                              // padding: "0.5rem",
                              height: "20px",
                              fontSize: "14px",
                              textAlign: "center",
                            }}
                          >
                            80 G : Registration no and date: AAETG0691DF2021001
                            Dt. 29.03.2022
                          </p>
                          <hr className="hrOverride" />
                          <h5
                            className="font-medium text-center"
                            style={{
                              fontSize: "17px",
                              fontWeight: 600,
                              color: "#000",
                              padding: "0.5rem",
                            }}
                          >
                            Received With Thanks From:
                          </h5>
                          <hr className="hrOverride" />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "1rem",
                            }}
                          >
                            <div
                              style={{
                                width: "180px",
                                height: "140px",
                                fontSize: "14px",
                                // padding:'1rem',
                                border: "2px solid #000",
                                borderLeftWidth: 0,
                              }}
                            >
                              <p
                                style={{
                                  color: "#000",
                                  fontWeight: 600,
                                  height: "40px",
                                  background: "#faceb1",
                                  width: "176px",
                                  // padding: "0.5rem",
                                  marginBottom: "0px",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  display: "flex",
                                }}
                              >
                                Date : {formatDate(item.createdAt)}
                              </p>
                              <p
                                style={{
                                  color: "#000",
                                  fontWeight: 600,
                                  background: "#e1f0d9",
                                  width: "176px",
                                  // padding: "0.5rem",
                                  height: "96px",
                                  textAlign: "center",
                                }}
                              >
                                Receipt No : &nbsp; {item.merchantTransactionId}
                              </p>
                            </div>
                            <div
                              style={{
                                width: "320px",
                                height: "140px",
                                fontSize: "14px",
                                background: "#fff2cd",
                                padding: "1rem",
                                color: "#000",
                                border: "2px solid #000",
                                borderRightWidth: 0,
                              }}
                            >
                              <p
                                style={{
                                  color: "#000",
                                  fontWeight: 600,
                                  marginBottom: "0px",
                                }}
                              >
                                Name : &nbsp; {name}
                              </p>
                              <p
                                style={{
                                  color: "#000",
                                  fontWeight: 600,
                                  marginBottom: "0px",
                                }}
                              >
                                Address : &nbsp;{address}
                              </p>
                              <p
                                style={{
                                  color: "#000",
                                  fontWeight: 600,
                                  marginBottom: "0px",
                                }}
                              >
                                Phone No :&nbsp; {mobileNumber}
                              </p>
                              {item && item.pan && (
                                <p
                                  style={{
                                    color: "#000",
                                    fontWeight: 600,
                                    marginBottom: "0px",
                                  }}
                                >
                                  PAN No: {item.pan}
                                </p>
                              )}
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div
                              className="text-slate-500 dark:text-slate-400 text-base"
                              style={{
                                fontSize: "14px",
                                background: "#fed76e",
                                // padding: "3px",

                                color: "#000",
                                width: "180px",
                                height: "30px",
                                fontWeight: 600,
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              Received Amount:
                            </div>
                            <div
                              style={{
                                // border: "2px solid #000",
                                width: "340px",
                                height: "100px",
                                marginBottom: "2.5rem",
                              }}
                            >
                              {" "}
                              <p style={{ padding: "5px" }}>
                                {" "}
                                ₹ {item.amount} /-
                              </p>
                              <p style={{ padding: "8px" }}>
                                {" "}
                                {item.donationAmountInWords}
                              </p>
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div
                              className="text-slate-500 dark:text-slate-400 text-base"
                              style={{
                                fontSize: "14px",
                                background: "#fab284",
                                color: "#000",
                                width: "180px",
                                height: "30px",
                                fontWeight: 600,
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding:'3px'
                              }}
                            >
                              Any Banking Details:
                            </div>
                            <div
                              style={{
                                // border: "2px solid #000",
                                width: "340px",
                                height: "100px",
                                marginBottom: "1rem",
                              }}
                            >
                              <p style ={{paddingLeft:'8px',color:'#000'}}>Transaction Id</p>
                              <p style={{paddingLeft:'8px'}} >{item.getepayTxnId }</p>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              className="text-slate-500 dark:text-slate-400 text-base"
                              style={{
                                fontSize: "14px",
                                background: "#e2efdb",
                                padding: "0.8rem",
                                color: "#000",
                                width: "230px",
                                height: "120px",
                                fontWeight: 600,
                                border: "2px solid #000",
                                textAlign: "center",
                                borderLeftWidth: 0,
                              }}
                            >
                              Receiver Signature
                              <p
                                style={{
                                  color: "#000",
                                  fontWeight: 600,
                                  fontSize: "12px",
                                  textAlign: "center",
                                }}
                              >
                                This is computer generated document hence does
                                not require signature.
                              </p>
                            </div>

                            <div
                              className="text-slate-500 dark:text-slate-400 text-base"
                              style={{
                                fontSize: "14px",
                                background: "#fce5d7",
                                padding: "0.8rem",
                                color: "#000",
                                width: "230px",
                                height: "120px",
                                fontWeight: 600,
                                border: "2px solid #000",
                                textAlign: "center",
                                borderRightWidth: 0,
                              }}
                            >
                              Signature
                            </div>
                          </div>
                          <h6
                            className="font-medium text-center"
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                              padding: "1rem",
                              marginBottom: "0.2rem",
                            }}
                          >
                            Qualify Dedcution U/s 80 G of I.T Act 1961 Vide
                            Unique Registration no AAETG0691DF2021001
                            <br />
                            Dated:29.03.2022 Valid from AY. 2022-23 Onwards.
                          </h6>
                          <h5
                            className="font-medium text-center"
                            style={{
                              fontSize: "17px",
                              fontWeight: 600,
                              padding: "1rem",
                              marginBottom: "0px",
                            }}
                          >
                            Thank you so much for your generous support :)
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>

            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className="block text-center"
                  style={{
                    background: "#EC6E46",
                    color: "#fff",
                    width: "250px",
                    height: "40px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleDownloadPDF}
                >
                  Download Receipt
                </button>
              </div>
            </div>

            {/* </Paper> */}
          </div>
        </div>
      )}
   
    </>
  );
};

export default RegisterDonarReceipt;
