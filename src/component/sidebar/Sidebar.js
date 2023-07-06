import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Student logout successfully!");
  };

  return (
    <div className="sidebar-wrapper group w-0  xl:w-[248px] xl:block">
      <div
        id="bodyOverlay"
        className="w-screen h-screen fixed top-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-10 hidden"
      ></div>
      <div className="logo-segment">
        <NavLink className="flex items-center" to="/">
          <img
            src={logo}
            className="white_logo"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="ltr:ml-3 rtl:mr-3 text-xl font-Inter font-bold text-slate-900 dark:text-white">
            GET
          </span>
        </NavLink>
        {/* <!-- Sidebar Type Button --> */}
        <div
          id="sidebar_type"
          className="cursor-pointer text-slate-900 dark:text-white text-lg"
        >
          <iconify-icon
            className="sidebarDotIcon extend-icon text-slate-900 dark:text-slate-200"
            icon="fa-regular:dot-circle"
          ></iconify-icon>
          <iconify-icon
            className="sidebarDotIcon collapsed-icon text-slate-900 dark:text-slate-200"
            icon="material-symbols:circle-outline"
          ></iconify-icon>
        </div>
        <button className="sidebarCloseIcon text-2xl inline-block md:hidden">
          <iconify-icon
            className="text-slate-900 dark:text-slate-200"
            icon="clarity:window-close-line"
          ></iconify-icon>
        </button>
      </div>
      <div
        id="nav_shadow"
        className="nav_shadow h-[60px] absolute top-[0px] nav-shadow z-[1] w-full  pointer-events-none
  opacity-0"
      ></div>
      <div
        className="sidebar-menus bg-white dark:bg-slate-800 py-2 px-4 h-[calc(100%-80px)] z-50 "
        id="sidebar_menus"
      >
        <ul className="sidebar-menu">
          <li
            className={activeItem === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            <NavLink to="/student/home" className="navItem">
              <span className="flex items-center">
                <HomeRoundedIcon  sx={{ fontSize: '20px' }} /> &nbsp; &nbsp;
                <span>Dashboard</span>
              </span>
            </NavLink>
          </li>

          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            <NavLink to="/student/course" className="navItem">
              <span className="flex items-center">
                <ListAltOutlinedIcon sx={{ fontSize: '20px' }}  />
                &nbsp; &nbsp;
                <span>Current Course</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            <NavLink to="/student/account" className="navItem">
              <span className="flex items-center">
                <GroupSharpIcon  sx={{ fontSize: '20px' }} /> &nbsp; &nbsp;
                <span>Account Details</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            <NavLink to="/student/wallet" className="navItem">
              <span className="flex items-center">
                <AccountBalanceWalletOutlinedIcon  sx={{ fontSize: '20px' }} /> &nbsp; &nbsp;
                <span>Wallet</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            <NavLink to="/student/profile" className="navItem">
              <span className="flex items-center">
                <DescriptionOutlinedIcon sx={{ fontSize: '20px' }} />{" "}
                &nbsp;&nbsp;&nbsp;
                <span>Profile</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 5 ? "active" : ""}
            onClick={() => handleItemClick(5)}
          >
            <NavLink to="/student/courses" className="navItem">
              <span className="flex items-center">
                <ListAltOutlinedIcon  sx={{ fontSize: '20px' }} />
                &nbsp;&nbsp;&nbsp;
                <span>Course Offered</span>
              </span>
            </NavLink>
          </li>
          <li
            className={activeItem === 6 ? "active" : ""}
            onClick={() => handleItemClick(6)}
          >
            <NavLink to="/login" className="navItem" onClick={handleLogout}>
              <span className="flex items-center">
                <LogoutIcon sx={{ fontSize: '20px' }}  />
                &nbsp;&nbsp;&nbsp;
                <span>Logout</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    // {/* <!-- End: Sidebar --> */}
  );
};

export default Sidebar;
