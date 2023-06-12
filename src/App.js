import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./component/layout/Layout";
import Profile from "./component/profile/Profile";
import Login from "./component/login/Login";
import Wallet from "./component/wallet/Wallet";
import Account from "./component/account/Account";
import CourseOffered from "./component/courseoffered/CourseOffered";
import CurrentCourse from "./component/currentcourse/CurrentCourse";
import SignUp from "./component/signup/SignUp";
import GetOtp from "./component/getotp/GetOtp";
import RaiseFund from "./component/raisefund/RaiseFund";
import { store } from "./store/Store";
import GetOtpLogin from "./getotplogin/GetOtpLogin";
import ResendOtp from "./component/resendotp/ResendOtp";
// import LearnMore from "./component/courselearnmore/LearnMore";

function App() {
  return (
    <HelmetProvider>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Layout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<CurrentCourse />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/account" element={<Account />} />
          <Route path="/courses" element={<CourseOffered />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/getotp" element={<GetOtp />} />
          <Route path="/getotplogin" element={<GetOtpLogin />} />
          <Route path="/raise-fund" element={<RaiseFund />} />
          <Route path="/resend-register-otp" element={<ResendOtp />} />
          {/* <Route path="/learn-more" element={<LearnMore />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
    </HelmetProvider>
  );
}

export default App;
