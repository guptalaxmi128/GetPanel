import React,{useState} from "react";
import Navbar from "../Navigation/Navbar";
import Home from "../home/Home";
import Footer from "../home/footer/Footer";
import PopUp from "../popup/PopUp";

function LandingPage() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(!showPopup);
  };

  return (<>
  
    <div className="App">
    
      <Navbar />
      <Home />
      <Footer />

    
    </div>
    {/* {showPopup && <PopUp onClose={closePopup} />} */}
    </>
  );
}

export default LandingPage;
