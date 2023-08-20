import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import GetOtpLogin from "./getotplogin/GetOtpLogin";
import ResendOtp from "./component/resendotp/ResendOtp";
import SignUp from "./component/signup/SignUp";
import GetOtp from "./component/getotp/GetOtp";
import Login from "./component/login/Login";
import Layout from "./component/layout/Layout";
import Profile from "./component/profile/Profile";
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
import Receipt from "./component/receipt/Receipt";
import SuccessPage from "./component/successpage/SuccessPage";
import FailedPage from "./component/failedpage/FailedPage";
import PendingPage from "./component/pendingpage/PendingPage";
import DownloadReceiptOtp from "./component/downloadReceipt/DownloadReceiptOtp";
import Donate from "./component/donateformnew/Donate";
import Patron from "./component/team/member/Patron";
import ChairPerson from "./component/team/member/ChairPerson";
import PrincipalAdvisor from "./component/team/member/PrincipalAdvisor";
import AcademicAdvisor from "./component/team/member/AcademicAdvisor";
import Adarsh from "./component/team/member/Adarsh";
import Nityanand from "./component/team/member/Nityanand";
import Padam from "./component/team/member/Padam";
import Sharad from "./component/team/member/Sharad";
import Ashok from "./component/team/member/Ashok";
import Treasurer from "./component/team/member/Treasurer";
import Secretary from "./component/team/member/Secretary";
import Qualification from "./component/currentcourse/Qualification";
import EditRaiseFund from "./component/raisefund/EditRaiseFund";
import EditAccount from "./component/account/EditAccount";
import HighSchoolCourse from "./component/currentcourse/editcourse/HighSchoolCourse";
import IntermediateCourse from "./component/currentcourse/editcourse/IntermediateCourse";
import RecentCourse from "./component/currentcourse/editcourse/RecentCourse";
import GraduationCourse from "./component/currentcourse/editcourse/GraduationCourse";
import PostGraduationCourse from "./component/currentcourse/editcourse/PostGraduationCourse";
import EditProfile from "./component/profile/editprofile/EditProfile";
import PrivacyPolicy from "./component/privacypolicy/PrivacyPolicy";
import Term from "./component/term/Term";
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
            path="/policy"
            element={
              <PublicElement>
                <PrivacyPolicy />
              </PublicElement>
            }
          />
             <Route
            path="/term"
            element={
              <PublicElement>
                <Term />
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
            path="/receipt"
            element={
              <PublicElement>
                <Receipt />
              </PublicElement>
            }
          />
          <Route
            path="/success"
            element={
              <PublicElement>
                <SuccessPage />
              </PublicElement>
            }
          />
          <Route
            path="/failed"
            element={
              <PublicElement>
                <FailedPage />
              </PublicElement>
            }
          />
          <Route
            path="/pending"
            element={
              <PublicElement>
                <PendingPage />
              </PublicElement>
            }
          />
          <Route
            path="/get-public-user"
            element={
              <PublicElement>
                <DownloadReceiptOtp />
              </PublicElement>
            }
          />
          {/* <Route
            path="/donate-now"
            element={
              <PublicElement>
                <DonateForm />
              </PublicElement>
            }
          /> */}
          <Route
            path="/donate"
            element={
              <PublicElement>
                <Donate />
              </PublicElement>
            }
          />
          <Route
            path="/team/patron"
            element={
              <PublicElement>
                <Patron />
              </PublicElement>
            }
          />
          <Route
            path="/team/chairperson"
            element={
              <PublicElement>
                <ChairPerson />
              </PublicElement>
            }
          />
          <Route
            path="/team/principal-advisor"
            element={
              <PublicElement>
                <PrincipalAdvisor />
              </PublicElement>
            }
          />
          <Route
            path="/team/academic-advisor"
            element={
              <PublicElement>
                <AcademicAdvisor />
              </PublicElement>
            }
          />
          <Route
            path="/team/member-one"
            element={
              <PublicElement>
                <Adarsh />
              </PublicElement>
            }
          />
          <Route
            path="/team/member-two"
            element={
              <PublicElement>
                <Nityanand />
              </PublicElement>
            }
          />
          <Route
            path="/team/member-three"
            element={
              <PublicElement>
                <Padam />
              </PublicElement>
            }
          />

          <Route
            path="/team/member-four"
            element={
              <PublicElement>
                <Sharad />
              </PublicElement>
            }
          />
          <Route
            path="/team/member-five"
            element={
              <PublicElement>
                <Ashok />
              </PublicElement>
            }
          />
          <Route
            path="/team/treasurer"
            element={
              <PublicElement>
                <Treasurer />
              </PublicElement>
            }
          />
          <Route
            path="/team/secretary"
            element={
              <PublicElement>
                <Secretary />
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
                <Qualification />
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
            path="/student/edit-account"
            element={
              <UserElement>
                <EditAccount />
              </UserElement>
            }
          />
          <Route
            path="/student/edit-highschool"
            element={
              <UserElement>
                <HighSchoolCourse />
              </UserElement>
            }
          />
          <Route
            path="/student/edit-intermediate"
            element={
              <UserElement>
                <IntermediateCourse />
              </UserElement>
            }
          />

          <Route
            path="/student/edit-current-course"
            element={
              <UserElement>
                <RecentCourse />
              </UserElement>
            }
          />
           <Route
            path="/student/edit-graduation"
            element={
              <UserElement>
                <GraduationCourse />
              </UserElement>
            }
          />
           <Route
            path="/student/edit-post-graduation"
            element={
              <UserElement>
                <PostGraduationCourse />
              </UserElement>
            }
          />
            <Route
            path="/student/edit-profile"
            element={
              <UserElement>
                <EditProfile />
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
            path="/student/edit-raise-fund"
            element={
              <UserElement>
                <EditRaiseFund />
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
            path="donar/donation-request/student/profile/:studentUID"
            element={
              <DonarElement>
                <StudentProfile />
              </DonarElement>
            }
          />
          <Route
            path="donar/donated/student/profile/:studentUID" //add for donated not checks
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
