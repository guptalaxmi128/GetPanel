import React from "react";
import { Link } from "react-router-dom";
import chairperson from "../../assets/team/chairperson.jpg";
import image2 from "../../assets/team/Sikandar Prasad.jpg";
import image3 from "../../assets/team/mahato.jpg";
import avtar from "../../assets/team/avtar.jpg";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="wpo-team-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                <span>Trustees</span>
                <h2>Meet Our Team</h2>
                <p>
                  Meet our incredible team that help us on each point to make
                  everything possible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="team-one">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="100ms"
              >
                
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src={avtar} alt="" />
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                      <Link to={"/team/patron"}>Dr. Rajveer Sharma </Link>
                      </h4>
                      <p className="team-one__sub-title">Patron</p>
                    </div>
                  </div>
               
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="200ms"
              >
              
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src={chairperson} alt="" />
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                      <Link to={"/team/chairperson"}>Dr. Basheer Ahmed </Link>
                      </h4>
                      <p className="team-one__sub-title">Chairperson</p>
                    </div>
                  </div>
               
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 fadeInUp"
                data-wow-delay="300ms"
              >
               
                  <div className="team-one__single">
                    <div className="team-one__img">
                      <img src={image2} alt="" />
                    </div>
                    <div className="team-one__content">
                      <h4 className="team-one__name">
                      <Link to={"/team/principal-advisor"}>Dr. Sikandar Prasad </Link>
                      </h4>
                      <p className="team-one__sub-title">Principal Advisor</p>
                    </div>
                  </div>
               
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                      {" "}
                      <Link to={"/team/academic-advisor"}>
                        Dr. Manoj Sinha
                      </Link>
                    </h4>
                    <p className="team-one__sub-title">Academic Advisor</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/member-one"}>Mr. Adarsh Sharma</Link>
                    </h4>
                    <p className="team-one__sub-title">Member</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={image3} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/member-two"}>Mr. Nityanand Mahato</Link>
                    </h4>
                    <p className="team-one__sub-title">Member</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/member-three"}>Mr. Padam Rana</Link>
                    </h4>
                    <p className="team-one__sub-title">Member</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/member-four"}>Mr. Sharad Maheshwari</Link>
                    </h4>
                    <p className="team-one__sub-title">Member</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="900ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/member-five"}>Mr. Ashok Kumar</Link>
                    </h4>
                    <p className="team-one__sub-title">Member</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="900ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/treasurer"}>Mr. Rajiv Aggarwal</Link>
                    </h4>
                    <p className="team-one__sub-title">Treasurer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6  fadeInUp"
                data-wow-delay="900ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={avtar} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                    <Link to={"/team/secretary"}>Mr. Kaushal Kishore</Link>
                    </h4>
                    <p className="team-one__sub-title">Secretary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Team;
