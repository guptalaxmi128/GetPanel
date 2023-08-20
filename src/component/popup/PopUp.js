import React, { useEffect } from "react";
import popupImage from "../../assets/popup.png";
import close from "../../assets/close.png";
import "./Popup.css";

function PopUp({ onClose }) {
  useEffect(() => {
    // Disable scrolling when the popup is open
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the popup is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img
          src={close}
          style={{ width: "20px", height: "20px" }}
          alt="close"
          onClick={onClose}
          className="close-button-popup"
        />
        <a
          href="/neet-counselling"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={popupImage} alt="Popup" style={{ display: "inline" }} />
        </a>
      </div>
    </div>
  );
}

export default PopUp;
