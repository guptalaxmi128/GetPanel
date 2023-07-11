import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import {
  useLoginDonarMutation,
  useLoginStudentMutation,
} from "../../services/signUpApi";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUserType } from "../../features/userSlice";

const Receipt = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
        <div
          className="auth-box-3"
          style={{ border: "2px solid #000", padding: "0px" }}
        >
          <div className="text-center " style={{ padding: "0px" }}>
            <h5
              className="font-medium"
              style={{
                fontSize: "17px",
                fontWeight: 600,
                background: "#F38701",
                color: "white",
                padding: "1rem",
              }}
            >
              GLOBAL EDUCATION TRUST
            </h5>
            <div
              className="text-slate-500 dark:text-slate-400 text-base"
              style={{
                fontSize: "14px",
                background: "#f9b67f",
                padding: "1rem",
                color: "#000",
              }}
            >
              K-60, GROUND FLOOR, JUNGPURA EXT.
              <br />
              New Delhi. 110014
            </div>
          </div>
          <div style={{ fontSize: "14px", display: "flex", padding: "5px" }}>
            <p>Phone No:</p>
            <p style={{ marginLeft: "180px" }}>Email Id:</p>
          </div>
          <p style={{ fontSize: "14px", paddingLeft: "5px" }}>PAN No:</p>
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
          <div style={{ display: "flex", justifyContent: "space-between",marginBottom:'2.5rem' }}>
            <div
              style={{
                width: "180px",
                height: "130px",
                fontSize: "14px",
                background: "#f9b67f",
                padding: "0.8rem",
                color: "#000",
                border: "2px solid #000",
              
              }}
            >
                <p style={{color:'#000',  fontWeight:600}}>Date : DD/MM/YYYY</p>
                <p style={{color:'#000',  fontWeight:600}}>Receipt No : 8908321</p>
            </div>
            <div
              style={{
                width: "320px",
                height: "130px",
                fontSize: "14px",
                background: "#f9b67f",
                padding: "0.8rem",
                color: "#000",
                border: "2px solid #000",
              }}
            >
                <p style={{color:'#000',  fontWeight:500}}>Sender Name : </p>
                <p style={{color:'#000',  fontWeight:500}}>Address : </p>
                <p style={{color:'#000',  fontWeight:500}}>Phone No :</p>
                <p style={{color:'#000',  fontWeight:500}}>Email Id :</p>
            </div>
          </div>
          <div style={{display:'flex'}}>
          <div   className="text-slate-500 dark:text-slate-400 text-base"
              style={{
                fontSize: "14px",
                background: "#f9b67f",
                padding: "1rem",
                color: "#000",
                width:'180px',
                height:'40px',
                fontWeight:600
              }}>Received Amount</div>
              <div style={{border:'2px solid #000',width:'340px',height:'100px',marginBottom:'2.5rem'}}></div>
              </div>
              <div style={{display:'flex' }}>
          <div   className="text-slate-500 dark:text-slate-400 text-base"
              style={{
                fontSize: "14px",
                background: "#f9b67f",
                padding: "1rem",
                color: "#000",
                width:'180px',
                height:'40px',
                fontWeight:600
              }}>Any Banking Details</div>
              <div style={{border:'2px solid #000',width:'340px',height:'100px',marginBottom:'2.5rem'}}></div>
              </div>
              <div style={{display:'flex' }}>
          <div   className="text-slate-500 dark:text-slate-400 text-base"
              style={{
                fontSize: "14px",
                background: "#f9b67f",
                padding: "1rem",
                color: "#000",
                width:'260px',
                height:'100px',
                fontWeight:600,
                border:'2px solid #000',
                textAlign:'center'
              }}>Receiver Signature</div>

<div   className="text-slate-500 dark:text-slate-400 text-base"
              style={{
                fontSize: "14px",
                background: "#f9b67f",
                padding: "1rem",
                color: "#000",
                width:'260px',
                height:'100px',
                fontWeight:600,
                border:'2px solid #000',
                textAlign:'center'
              }}>Donar Signature</div>
            
              </div>
              <h5
              className="font-medium text-center"
              style={{
                fontSize: "17px",
                fontWeight: 600,
                padding: "1rem",
              }}
            >
             Thank you so much for your support !
            </h5>
        </div>
      </div>
    </>
  );
};

export default Receipt;
