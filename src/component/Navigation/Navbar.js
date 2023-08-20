import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../Navigation/Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  return (
    <>
    <div className="fixed-navbar">
      <header id="header">
        <div className="wpo-site-header undefined">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <div>
                      <div className={`mobileMenu ${isSidebarOpen ? 'show' : ''}`}>
                        <div className="menu-close" onClick={() => setIsSidebarOpen(false)}>
                          <div className="clox">
                            <i className="ti-close"></i>
                          </div>
                        </div>
                        <ul className="responsivemenu">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/team">Team</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                          <li>
                            <a
                              className="theme-btn"
                              href="/donate"
                              style={{width:"70%" ,marginLeft:"20px"}}
                            >
                              Donation & Fee
                            </a>
                          </li>
                          <li>
                            <a
                              className="theme-btn1"
                              href="/login"
                              style={{width:"70%" ,marginLeft:"20px",marginTop:'10px',color:'#fff'}}
                            >
                              Login
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="showmenu">
                        <button
                          type="button"
                          className="navbar-toggler open-btn"
                          onClick={toggleSidebar}
                        >
                          <span className="icon-bar first-angle"></span>
                          <span className="icon-bar middle-angle"></span>
                          <span className="icon-bar last-angle"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                      <img
                        alt="home"
                        src={logo}
                        style={{ marginTop: "35px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/team">Team</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right">
                    <div className="close-form">
                      <a className="theme-btn1" href="/login" style={{color:'#fff'}}>
                        Login
                      </a>
                    </div>
                    <div className="close-form">
                      <a className="theme-btn" href="/donate">
                        Donation & Fee
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
 
</>
  );
};

export default Navbar;
