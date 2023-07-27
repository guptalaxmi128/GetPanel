import React from "react";
import logoimg from "../../../assets/images/logo.png";
import "./Home2.css";

function Home2() {
  return (
    // <div className="home2">
    //   <p className="heading-1">About Us</p>
    //   <hr className="line-1" />
    //   <div className="home2-upper">
    //     <div className="home2-upper-left">
    //       <p className="home2-upper-left-text1">
    //         The “<span className='subheading0'>Global Education Trust (GET)</span>” is a non-profit trust registered under the Indian Trust Act 1882 vide
    //         Registration No. 1517/2022. The trust is registered with the NITI AAYOG vide Unique Id. DL/2022/0308060 and
    //         has been registered under Section 12A & 80G of the Income Tax Act. The trust is planning to establish
    //         educational institutions in various states, including the state of Jharkhand and Uttrakhand
    //       </p>

    //       <p className="home2-upper-left-text1">
    //         This is a movement dedicated to cementing a better future for all. Founded in 2021, we have fought for
    //         impactful policy changes on the local, national and global levels. We strive to hold our leaders
    //         accountable, and to educate and empower others to take action. We work to ensure that our voices are heard
    //         for generations to come..
    //       </p>
    //       <p className="home2-upper-left-text3">Read More</p>
    //     </div>
    //     <div className="home2-upper-right">
    //       <img src={logoimg} alt="logo" className="logo-img" />
    //     </div>
    //   </div>
    // </div>
    <div className="services-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 services-content">
                <div className="section-title">
                  <h2>About Us</h2>
                  <div className="bar"></div>
                  <p>
                    The “
                    <span style={{color:'green'}}>
                      Global Education Trust (GET)
                    </span>
                    ” is a non-profit trust registered under the Indian Trust
                    Act 1882 vide Registration No. 1517/2022. The trust is
                    registered with the NITI AAYOG vide Unique Id.
                    DL/2022/0308060 and has been registered under Section 12A &
                    80G of the Income Tax Act. The trust is planning to
                    establish educational institutions in various states,
                    including the state of Jharkhand and Uttrakhand
                  </p>
                  <p>
                    This is a movement dedicated to cementing a better future
                    for all. Founded in 2021, we have fought for impactful
                    policy changes on the local, national and global levels. We
                    strive to hold our leaders accountable, and to educate and
                    empower others to take action. We work to ensure that our
                    voices are heard for generations to come..
                  </p>
                  <p style={{color:'green',margin:'5px'}}>Read More</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 services-right-image">
                <div className="home2-upper-right">
                  <img src={logoimg} alt="logo" className="logo-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
