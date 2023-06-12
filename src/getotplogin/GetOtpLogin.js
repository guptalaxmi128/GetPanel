import React, {useState} from "react";
import backgroundImg from "../assets/page-bg.png";
import { useNavigate,useLocation} from "react-router-dom";
import { useVerifyLoginOtpMutation } from "../services/signUpApi";

const GetOtpLogin = () => {
  const location = useLocation();
  const { mobileNumber} = location.state || {};

  const navigate=useNavigate();
  console.log(mobileNumber)
  // const [mobileNumber,setMobileNumber]=useState('');
  const [otp,setOtp]=useState('');

  const [otpError, setOtpError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const [verifyLoginOtp] =useVerifyLoginOtpMutation();

  const clearTextInput = () => {
    // setMobileNumber("");
    setOtp('');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!mobileNumber) {
    //   setMobileNumberError("Please enter your mobile number");
    // } else if (mobileNumber.length !== 10) {
    //   setMobileNumberError("Mobile number should have 10 digits");
    // } else {
    //   setMobileNumberError("");
    // }
    if (!otp) {
      setOtpError("Otp is required");
    } else if (otp.length !== 6) {
      setOtpError("Otp should have 6 digits");
    } else {
      setOtpError("");
    }
    if (mobileNumber && mobileNumber.length === 10 && otp && otp.length === 6) {
      const formData = { mobileNumber,mobileOTP:otp };
      console.log(formData);
      const res = await verifyLoginOtp(formData);
      console.log(res);
      if (res.data) {
        localStorage.setItem('authToken', res.data.authToken);
          console.log(localStorage)
        clearTextInput();
        navigate('/home'); // Navigate to home page
      }
    }
  };
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center" style={{position:'relative'}}>
        <img src={backgroundImg} alt="backgroundImg" style={{height:'100vh',width:'100vw'}} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        {/* <div className="lg-inner-column"> */}
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
        <div className="auth-box-3"  style={{paddingTop:'2.5rem',paddingBottom:'2.5rem'}}>
          <div className="text-center 2xl:mb-10 mb-5">
            <h4 className="font-medium">Sign In</h4>
            <div className="text-slate-500 dark:text-slate-400 text-base">
              Sign in to your account to start using GET
            </div>
          </div>
          {/* <!-- BEGIN: Login Form --> */}
          <form
            className="space-y-4"
            // action="https://dashcode-html.codeshaper.tech/index.html"
          >
            {/* <div className="fromGroup">
              <label className="block capitalize form-label">mobile number</label>
              <div className="relative ">
                <input
                  type="number"
                  name="mobilenumber"
                  className="  form-control py-2"
                  placeholder="Enter Same Mobile Number"
                  value={mobileNumber}
                  onChange={(e)=>setMobileNumber(e.target.value)}
                />
                     {mobileNumberError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "14px",
                        }}
                      >
                        {mobileNumberError}
                      </span>
                    ) : null}
              </div>
            </div> */}
            <div className="fromGroup">
              <label className="block capitalize form-label">mobile number OTP</label>
              <div className="relative ">
                <input
                  type="number"
                  name="mobilenumberotp"
                  className="  form-control py-2"
                  placeholder="Mobile Number OTP"
                  value={otp}
                  onChange={(e)=>setOtp(e.target.value)}
                />
                     {otpError ? (
                      <span
                        style={{
                          color: "red",
                          marginLeft: 8,
                          fontSize: "14px",
                        }}
                      >
                        {otpError}
                      </span>
                    ) : null}
              </div>
            </div>
           
            <button className="btn btn-dark block w-full text-center" onClick={(e)=>handleSubmit(e)}>
              Submit
            </button>
          </form>
          {/* <!-- END: Login Form --> */}
        </div>
      </div>
     {/* </div> */}
     </div>
     </div>
    </>
  );
};

export default GetOtpLogin;
