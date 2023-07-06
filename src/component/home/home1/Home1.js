import React from 'react';
// import { motion } from 'framer-motion'
import student from '../../../assets/students.png';
import './Home1.css';

function Home1() {
  return (
    <div className="home1">
      <div className="home1-upper">
        <div className="home1-upper-left">
          <p className="home1-upper-left-text1" style={{marginBottom:'15px'}}>
            India's <span className="heading1">Most Trusted</span> &nbsp;and
          </p>

          <p className="home1-upper-left-text2">Transparent</p>
          <p className="home1-upper-left-text1" style={{marginTop:'15px'}}>Crowdfunding Platform </p>
          <div className="subheading">
            <div>
              <div className="circle">
                <img src="hari" alt="cart" />
              </div>
              <div className="content1">₹ 100 Cr +</div>
              <div className="content2">Worth Donation</div>
            </div>
            {/* second circle */}
            <div>
              <div className="circle">
                <img src="hari" alt="cart" />
              </div>
              <div className="content3">5,00,000 +</div>
              <div className="content4">Unique Doners</div>
            </div>
              {/* third */}
          <div>
            <div className="circle">
              <img src="hari" alt="cart" />
            </div>
            <div className="content5">1000 +</div>
            <div className="content6">NGO Impacted</div>
          </div>
          {/* third end  */}
          </div>
       
        
        </div>
        <div className="home1-upper-right">
          <img src={student} alt="student" className="student-img" />
          <div className="card1">
            <div className="cardContent1">
              <div className="cardText1">100% Transparent</div>
            </div>
          </div>

          <div className="card2">
            <div className="cardContent2">
              <div className="cardText5">Effective way of Donation</div>
            </div>
          </div>

          <div className="card3">
            <div className="cardContent3">
              <div className="cardText9">Help Student to Grow</div>
            </div>
          </div>
          <div className="card4">
            <div className="cardContent4">
              <div className="cardText3">Best Donation Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
