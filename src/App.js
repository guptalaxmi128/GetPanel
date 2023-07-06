import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./store/Store";
// import { useSelector } from 'react-redux';
import GetOtpLogin from "./getotplogin/GetOtpLogin";
import ResendOtp from "./component/resendotp/ResendOtp";
import SignUp from "./component/signup/SignUp";
import GetOtp from "./component/getotp/GetOtp";
import Login from "./component/login/Login";
import Layout from "./component/layout/Layout";
import Profile from "./component/profile/Profile";
import CurrentCourse from "./component/currentcourse/CurrentCourse";
import Wallet from "./component/wallet/Wallet";
import Account from "./component/account/Account";
import CourseOffered from "./component/courseoffered/CourseOffered";
import RaiseFund from "./component/raisefund/RaiseFund";
import DonarLayout from "./component/donarpages/layout/Layout";
import Donated from "./component/donarpages/donated/Donated";
import DonationRequest from "./component/donarpages/donationrequest/DonationRequest";
import DonarProfile from "./component/donarpages/profile/Profile";
import DonarGetOtp from "./component/donarpages/getotp/GetOtp";
import DonarGetOtpLogin from "./component/donarpages/getloginotp/GetLoginOtp";
import ResendDonarOtp from "./component/donarpages/resendotp/ResendOtp";
import LandingPage from "./component/landingpage/LandingPage";
import AboutUs from "./component/aboutus/AboutUs";
import Contact from "./component/contact/Contact";
import Team from "./component/team/Team";
import StudentProfile from "./component/donarpages/studentprofile/StudentProfile";
import DonateForm from "./component/donateformnew/DonateForm";
// import DonarCourse from "./component/donarpages/course/Course";
// import LearnMore from "./component/courselearnmore/LearnMore";

function App() {
  const currentUserType = useSelector((state) => state.user.currentUserType);
  console.log("app", currentUserType);

  const PublicElement = ({ children }) => {
    return <>{children}</>;
  };

  const UserElement = ({ children }) => {
    if (currentUserType === "student") {
      return <>{children}</>;
    } else <div>You donot have access</div>;
  };

  const DonarElement = ({ children }) => {
    if (currentUserType === "donar") {
      return <>{children}</>;
    } else <div>You donot have access</div>;
  };
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <PublicElement>
                <SignUp />
              </PublicElement>
            }
          />
          <Route
            path="/"
            element={
              <PublicElement>
                <LandingPage />
              </PublicElement>
            }
          />

          <Route
            path="/about"
            element={
              <PublicElement>
                <AboutUs />
              </PublicElement>
            }
          />
          <Route
            path="/team"
            element={
              <PublicElement>
                <Team />
              </PublicElement>
            }
          />
           <Route
            path="/contact"
            element={
              <PublicElement>
                <Contact />
              </PublicElement>
            }
          />
          <Route
            path="/login"
            element={
              <PublicElement>
                <Login />
              </PublicElement>
            }
          />
           <Route
            path="/donate-now"
            element={
              <PublicElement>
                <DonateForm />
              </PublicElement>
            }
          />
          <Route
            path="/student/getotp"
            element={
              <UserElement>
                <GetOtp />
              </UserElement>
            }
          />
          <Route
            path="/student/getotplogin"
            element={
              <UserElement>
                <GetOtpLogin />
              </UserElement>
            }
          />

          <Route
            path="/student/resend-register-otp"
            element={
              <UserElement>
                <ResendOtp />
              </UserElement>
            }
          />

          {/* <Route path="/learn-more" element={<LearnMore />} /> */}
          <Route
            path="/student/home"
            element={
              <UserElement>
                <Layout />
              </UserElement>
            }
          />
          <Route
            path="/student/profile"
            element={
              <UserElement>
                <Profile />
              </UserElement>
            }
          />
          <Route
            path="/student/course"
            element={
              <UserElement>
                <CurrentCourse />
              </UserElement>
            }
          />
          <Route
            path="/student/wallet"
            element={
              <UserElement>
                <Wallet />
              </UserElement>
            }
          />
          <Route
            path="/student/account"
            element={
              <UserElement>
                <Account />
              </UserElement>
            }
          />
          <Route
            path="/student/courses"
            element={
              <UserElement>
                <CourseOffered />
              </UserElement>
            }
          />
          <Route
            path="/student/raise-fund"
            element={
              <UserElement>
                <RaiseFund />
              </UserElement>
            }
          />

          <Route
            path="/donar/getotp"
            element={
              <DonarElement>
                <DonarGetOtp />
              </DonarElement>
            }
          />

          <Route
            path="/donar/home"
            element={
              <DonarElement>
                <DonarLayout />
              </DonarElement>
            }
          />
          {/* <Route
              path="/donar/course"
              element={
                <DonarElement>
                  <DonarCourse />
                </DonarElement>
              }
            /> */}
          <Route
            path="/donar/donated"
            element={
              <DonarElement>
                <Donated />
              </DonarElement>
            }
          />
          <Route
            path="/donar/getotplogin"
            element={
              <DonarElement>
                <DonarGetOtpLogin />
              </DonarElement>
            }
          />
          <Route
            path="/donar/donation-request"
            element={
              <DonarElement>
                <DonationRequest />
              </DonarElement>
            }
          />
          <Route
            path="/donar/resend-register-otp"
            element={
              <DonarElement>
                <ResendDonarOtp />
              </DonarElement>
            }
          />
          <Route
            path="/donar/profile"
            element={
              <DonarElement>
                <DonarProfile />
              </DonarElement>
            }
          />
           <Route
            path='donar/donation-request/student/profile/:UID'
            element={
              <DonarElement>
                <StudentProfile />
              </DonarElement>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </HelmetProvider>
  );
}

export default App;
