import React from "react";
import aboutus from "../../assets/images/aboutus.png";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="wpo-about-section-s2 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-wrap">
                <div className="wpo-about-img">
                  <img alt="" src={aboutus} />
                  <div className="wpo-total-raised">
                    <div className="wpo-total-raised-wrap">
                      <div className="wpo-total-raised-icon">
                        <i className="fi flaticon-wallet-filled-money-tool"></i>
                      </div>
                      <div className="wpo-total-raised-text">
                        <ul>
                          <li>
                            Total Raised<span>₹25000</span>
                          </li>
                        </ul>
                        <div className="progress-section">
                          <div className="process">
                            <div className="progress">
                              <div className="progress-bar">
                                <div className="progress-value"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="round-ball-1"></div>
                  <div className="round-ball-2"></div>
                  <div className="round-ball-3"></div>
                  <div className="round-ball-4"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <span>About Us</span>
                <h2>
                  Get to know about our Global Education Trust organization
                </h2>
                <p style={{textAlign:'justify'}}>
                  www.globaleducationtrust.org is a movement dedicated to
                  cementing a better future for all. Founded in 2021, we have
                  fought for impactful policy changes on local, national and
                  global levels. We strive to hold our leaders accountable, and
                  to educate and empower others to take action. We work to
                  ensure that our voices are heard for generation to come.
                </p>

                <p style={{textAlign:'justify'}}>
                  The Trust is the brainchild of Kaushal Kishore, who is also
                  the settlor and a founder trustee. He is a practising advocate
                  at Supreme Court of India, New Delhi and also takes cases and
                  appears at various other High Courts & Tribunals, That during
                  the Lockdown he pondered on the ways of transforming the
                  education system and got a formidable team of educationists in
                  place to contribute to the present dynamic, challenging and
                  changing situations in this sphere.
                </p>
                <p style={{textAlign:'justify'}}>
                  After a consistent cosultation with all the stakeholders for
                  transforming the situation of education and the healthcare
                  post COVID-19 , he decided to contribute back to the society,
                  Mr. Kaushal Kishore made a formal proposal to all the like
                  minded people who have joined hands with him as founder
                  Trustees. On the 21st day of December, 2021 he made a formal
                  representation for the registration of the Trust, 'Global
                  Education Trust', which finally approved after clearing all
                  defects and got registered with the Register at New Delhi on
                  10th Feb,2022.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
