import React from "react";
import backgroundImg from "../../assets/page-bg.png";
import failed from "../../assets/failed.png";

const FailedPage = () => {
  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-center"
        style={{ position: "relative" }}
      >
        <img
          src={backgroundImg}
          alt="backgroundImg"
          style={{ height: "100vh", width: "100vw" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
       
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
            <div
              className="auth-box-3"
              style={{ paddingTop: "2.5rem", paddingBottom: "2rem" ,width:'380px'}}
            >
              <div className="text-center 2xl:mb-10 mb-5">
                <img src={failed} alt="failed" width={100} height={50} />
                <div
                  className="text-slate-500 dark:text-slate-400 text-base mt-5"
                  style={{ fontSize: "20px" }}
                >
                  Donation Failed
                </div>
                <div className="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center">
                Its's not you, It's us. Please try again
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button
                  className="text-center "
                 style={{background:'red',color:"#fff",width:'250px',height:'50px',borderRadius:'20px'}}
                >
                  Retry Now
                </button>

                </div>
                <div className="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 text-sm text-center">
                <a href="https://www.globaleducationtrust.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                www.globaleducationtrust.org
                </a>
                </div>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default FailedPage;
