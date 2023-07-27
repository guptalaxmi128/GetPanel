import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navigation/Navbar";
import "./contact.css";
import Footer from "../home/footer/Footer";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact-info-section bg-color-1 centred" style={{marginTop:'30px'}}>
        <div className="auto-container">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <PhoneIcon style={{ fontSize: "36px" }} />
                  </div>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="#" style={{fontSize:'14px'}}> +91 9355541415</a> 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <EmailOutlinedIcon style={{ fontSize: "38px" }} />
                  </div>
                  <h3>Email Address</h3>
                  <p>
                    <a href="#" style={{fontSize:'14px'}}>secretary@globaleducationtrust.org</a>
                    <br />
                    <a href="#"  style={{fontSize:'14px'}}>www.globaleducationtrust.org</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <LocationOnOutlinedIcon style={{ fontSize: "38px" }} />
                  </div>
                  <h3>Our Location</h3>
                  <p style={{fontSize:'14px'}}>
                  #K-60, GF, RHS, JUNGPURA EXT., <br />
                  NEW DELHI-110014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section sec-pad">
        <div className="auto-container" style={{padding:'20px',height:'400px'}}>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 content-column" >
              <div className="content-box p_relative mr_70">
                <h3>Feel Free to Contact with us</h3>
                <p style={{fontSize:'16px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit et
                  aenean orci egestas arcu interdum nisl magna sit duis
                  vestibulum pellentesque eget.
                </p>
                <ul className="social-links clearfix" style={{marginBottom:'30px'}}>
                  <li>
                    <a href="#">
                      <img
                        src={facebook}
                        alt="not-found"
                        style={{width:'20px',height:'20px'}}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={twitter}
                        alt="not-found"
                        style={{width:'20px',height:'20px'}}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={linkedin}
                        alt="not-found"
                        style={{width:'20px',height:'20px'}}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={instagram}
                        alt="not-found"
                        style={{width:'20px',height:'20px'}}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <form
                  method="post"
                  id="contact-form"
                >
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required=""
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="phone"
                        required=""
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                      <button
                        className="theme-btn-one"
                        type="submit"
                        name="submit-form"
                      >
                        <span>Send message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
