// ImagePopup.js
// import React, { useEffect } from "react";
// import { X } from "react-feather";
// import popup from "../../../src/assets/popup.png";
// import "./Popup.css";

// function PopUp({ onClose }) {


//   return (
//     <div className="image-popup visible">
//       <div className="popup-content">
//       <button className="close-button" onClick={onClose}>
//           <X size={20} />
//         </button>
//         <img src={popup} alt="Popup" />
//       </div>
//     </div>
//   );
// }

// export default PopUp;

import React, { useEffect,useCallback } from "react";
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
        <img src={popupImage} alt="Popup"  style={{ display:'inline'}}/>
      </div>
    </div>
  );
}

export default PopUp;

