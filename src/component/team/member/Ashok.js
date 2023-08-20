import React from "react";
import avtar from "../../../assets/team/avtar.jpg";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../home/footer/Footer";


const Ashok = () => {
  return (
    <>
      <Navbar />
      <section className="wpo-about-section-s2 section-padding">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-wrap">
                    <div className="wpo-about-img"><img alt="" src={avtar}  style={{width:'70%',height:'70%'}} />
                       
                        <div className="round-ball-1"></div>
                        <div className="round-ball-2"></div>
                        <div className="round-ball-3"></div>
                        <div className="round-ball-4"></div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text"><span>About</span>
                    <h2>Mr. Ashok Kumar</h2>
                    {/* <p>The “Global Education Trust (GET)” is a non-profit trust registered under the Indian Trust Act 1882 vide Registration No. 1517/2022. The trust is registered with the NITI AAYOG vide Unique Id. DL/2022/0308060 and has been registered under Section 12A & 80G of the Income Tax Act. The trust is planning to establish educational institutions in various states, including the state of Jharkhand and Uttrakhand

                        This is a movement dedicated to cementing a better future for all. Founded in 2021, we have fought for impactful policy changes on the local, national and global levels. We strive to hold our leaders accountable, and to educate and empower others to take action. We work to ensure that our voices are heard for generations to come..</p> */}
                   
                    {/* <a className="theme-btn-s2" href="/about">Read More</a> */}
                </div>
            </div>
        </div>
    </div>
</section>
      <Footer />
    </>
  );
};

export default Ashok;
