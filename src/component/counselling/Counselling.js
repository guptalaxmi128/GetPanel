import React from "react";
import popupImage from "../../assets/popup.png";
import Navbar from "../Navigation/Navbar";
import Footer from "../home/footer/Footer";
import "./Counselling.css";

const Counselling = () => {
  return (
    <>
      <div className="counselling-container">
        <Navbar />
        <div className="counselling-content">
          <h1 className="counselling-title">
            Book Free Counselling Session For
          </h1>
          <h1 className="counselling-university">
            Samarkand Medical University
          </h1>
          <a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScy2yyU1qePWWMZ-YF7T4vZjMTg4YDj-m9dqEhVOc1Uuu1dtQ/viewform?usp=send_form&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={popupImage}
              alt="Popup"
              className="counselling-image"
            />
          </a>
          <a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScy2yyU1qePWWMZ-YF7T4vZjMTg4YDj-m9dqEhVOc1Uuu1dtQ/viewform?usp=send_form&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="counselling-button">
              <span className="button-text">Book Your Slot</span>
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Counselling;
