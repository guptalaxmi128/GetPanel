import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../aboutus/about.css";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";
import team from "../../assets/team/team.jpg";

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="team-one" style={{ background: "#E3F9FF" }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our expert team</span>
            <h2 className="section-title__title">
              Meet the team behind <br /> their success story
            </h2>
          </div>

          <div className="row">
          {/* <AliceCarousel
            autoPlay
            autoPlayInterval={3000}
            responsive={{
              0: { items: 1},
              768: { items: 2 },
              1024: { items: 4 },
            }}> */}
          
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                   
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Manoj Sinha</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Sikandar Prasad </a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Rajvir Sharma</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Basheer Ahmed</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Adarsh Sharma</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Sharad Maheshwari</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Ashok Kumar</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Padam Singh</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
              <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Nityanand Mahato</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
              <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Rajiv Aggarwal</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
              <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Kaushal Kishore</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
             </div>
             <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
                style={{visibility:'hidden'}}
              >
              <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#">Kaushal Kishore</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
             </div>
              {/* </AliceCarousel> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
