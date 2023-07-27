import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image1 from "../../assets/group.jpg";
import image2 from "../../assets/resource/about-four-img-2.jpg";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";
import "./about.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6"  style={{padding:'50px'}}>
              <div className="about-four__left">
                <div className="about-four__img-box">
                  <div className="about-four__img">
                    <img src={image1} alt="" className="about-image" />
                  </div>
                  <div className="about-four__img-two">
                    <img src={image1} alt="" className="about-image"  />
                  </div>
                  <div className="about-four__border"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6" style={{paddingTop:'30px'}}>
              <div className="about-four__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    About Global Education Trust
                  </span>
                  <h4 className="section-title__title">
                    Get to know about our global education trust organization
                  </h4>
                </div>
                <p className="about-four__text">
                  www.globaleducationtrust.org is a movement dedicated to
                  cementing a better future for all. Founded in 2021, we have
                  fought for impactful policy changes on local, national and
                  global levels. We strive to hold our leaders accountable, and
                  to educate and empower others to take action. We work to
                  ensure that our voices are heard for generation to come.
                </p>
                <div className="about-four__text">
                  <p>
                    The Trust is the brainchild of Kaushal Kishore, who is also
                    the settlor and a founder trustee. He is a practising
                    advocate at Supreme Court of India, New Delhi and also takes
                    cases and
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <p className="about-four__text">
                appears at various other High Courts & Tribunals, That during
                the Lockdown he pondered on the ways of transforming the
                education system and got a formidable team of educationists in
                place to contribute to the present dynamic, challenging and
                changing situations in this sphere.{" "}
              </p>

              <p className="about-four__text">
                After a consistent cosultation with all the stakeholders for
                transforming the situation of education and the healthcare post
                COVID-19 , he decided to contribute back to the society, Mr.
                Kaushal Kishore made a formal proposal to all the like minded
                people who have joined hands with him as founder Trustees. On
                the 21st day of December, 2021 he made a formal representation
                for the registration of the Trust, 'Global Education Trust',
                which finally approved after clearing all defects and got
                registered with the Register at New Delhi on 10th Feb,2022.
              </p>
              <div className="about-four__btn-box">
                <a
                  href="#"
                  className="thm-btn about-four__btn"
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="faq-one faq-two">
        <div className="faq-one-shape-1"></div>
        <div className="faq-one-bg"></div>
        <div className="container">
          <div className="row" style={{padding:'20px'}}>
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    Recently asked questions
                  </span>
                  <h6
                    className="section-title__title"
                    style={{ fontSize: "36px" }}
                  >
                    People are frequently asking some questions from us
                  </h6>
                </div>
                <p className="faq-one__text-1">
                  Proactively procrastinate cross-platform results via extensive
                  ideas distinctively underwhelm enterprise. Compellingly
                  plagiarize value-added sources with inexpensive schemas.
                </p>
                <a href="#" className="thm-btn faq-one__btn" style={{marginBottom:'30px'}}>
                  Learn how to get help
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp"
                  data-grp-name="faq-one-accrodion"
                >
                  <div className="accrodion active">
                    <Accordion style={{ borderRadius: "10px" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ borderRadius: "30px" }}
                      >
                        <div className="accrodion-title">
                          <h4>Nulla eu purus scelerisque, dignissim diam.</h4>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div className="accrodion">
                    <Accordion
                      style={{ marginTop: "20px", borderRadius: "10px" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={{ borderRadius: "30px" }}
                      >
                        <div className="accrodion-title">
                          <h4>Quisque non diam porta, ullamcorper dolor.</h4>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div className="accrodion">
                    <Accordion
                      style={{ marginTop: "20px", borderRadius: "10px" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={{ borderRadius: "30px" }}
                      >
                        <div className="accrodion-title">
                          <h4>How can I make a change to my application?</h4>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div className="accrodion last-chiled">
                    <Accordion
                      style={{ marginTop: "20px", borderRadius: "10px" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        style={{ borderRadius: "30px" }}
                      >
                        <div className="accrodion-title">
                          <h4>Sed mattis neque sed commodo efficitur.</h4>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default AboutUs;
