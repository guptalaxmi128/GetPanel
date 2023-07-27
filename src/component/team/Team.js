import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
// import "../aboutus/about.css";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";
import team from "../../assets/team/team.jpg";

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="team-one" style={{ background: "#E3F9FF",marginTop:'30px' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our expert team</span>
            <h2 className="section-title__title" style={{fontSize:"50px",fontWeight:'900',color:'#283734',lineHeight:'60px'}}>
              Meet the team behind <br /> their success story
            </h2>
          </div>

          <div className="row"> 
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
                      <a href="#" style={{fontSize:'20px'}}>Dr. Rajveer Sharma</a>
                    </h3>
                    <p className="team-one__sub-title">Patron</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Dr. Basheer Ahmed</a>
                    </h3>
                    <p className="team-one__sub-title">Chairperson</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Dr. Sikandar Prasad</a>
                    </h3>
                    <p className="team-one__sub-title">Principal Advisor</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Dr. Manoj Sinha</a>
                    </h3>
                    <p className="team-one__sub-title">Academic Advisor</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Mr. Adarsh Sharma</a>
                    </h3>
                    <p className="team-one__sub-title">Member</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Mr. Nityanand Mahato</a>
                    </h3>
                    <p className="team-one__sub-title">Member</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Mr. Padam Rana</a>
                    </h3>
                    <p className="team-one__sub-title">Member</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Mr. Kaushal Kishore</a>
                    </h3>
                    <p className="team-one__sub-title">Secretary</p>
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
                      <a href="#" style={{fontSize:'20px'}}>Mr. Rajiv Aggarwal</a>
                    </h3>
                    <p className="team-one__sub-title">Treasurer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
                style={{display:'none'}}
              >
              <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#" style={{fontSize:'20px'}}>Rajiv Aggarwal</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
                style={{display:'none'}}
              >
              <div className="team-one__single">
                  <div className="team-one__img">
                    <img src={team} alt="team" />
                  </div>
                  <div className="team-one__content">
                    <h3 className="team-one__name">
                      <a href="#" style={{fontSize:'20px'}}>Kaushal Kishore</a>
                    </h3>
                    <p className="team-one__sub-title">Volunteer</p>
                  </div>
               
              </div>
             </div>
             <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
                style={{display:'none'}}
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
