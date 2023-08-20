import React from "react";
import mainLogo from "../../../assets/images/main_logo.png";
import "../../Navigation/Navbar.css";

const Footer = () => {
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img alt="blog" src={mainLogo} style={{width:'70px'}} />
                </div>

                <p>
                  We help local nonprofits access the funding, tools, training,
                  and support they need to become more.
                </p>
                <ul>
                  <li>
                    <a href=" https://www.facebook.com/globaleducationtrustofficial " target="_blank">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/globaleducation.trust/">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>COMPANY </h3>
                </div>
                <ul>
                  <li>
                    <a href="/about"  target="_blank">About Us</a>
                  </li>
                
                  <li>
                    <a href="#"  target="_blank">Latest News</a>
                  </li>
                  <li>
                    <a href="/contact"  target="_blank">Contact us</a>
                  </li>
                  <li>
                    <a href="#"  target="_blank">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Help Center </h3>
                </div>
                <ul>
                  <li>
                    <a href="/policy"  target="_blank">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#"  target="_blank">Legal Information</a>
                  </li>
                  <li>
                    <a href="#"  target="_blank">Donation Policy</a>
                  </li>
                  <li>
                    <a href="/term"  target="_blank">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#"  target="_blank">Our Initiatives</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <p>
                    Would you have any enquiries.Please feel free to contact us
                  </p>
                  <ul>
                    <li>
                      <i className="fi flaticon-mail"></i>
                      secretary@globaleducationtrust.org
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+91 9355541415
                    </li>
                    <li>
                      <i className="fi flaticon-location"></i>K-60, GF, RHS,
                      JUNGPURA EXT., NEW DELHI-110014
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                © 2023 Global Education Trust. Design By{" "}
                <a href="#">Tech Astute</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
