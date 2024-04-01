import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  HeroSection,
  About,
  AboutRight,
  AboutThird,
  Faq,
  Feature,
  Info,
  Price,
  Service,
  Tap,
  Testimonial,
} from "../Components/Home/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const { listMembership } = useStateContext();
const [showMetaMaskPopup, setShowMetaMaskPopup] = useState(false);
  useEffect(() => {
    checkMetaMask();
  }, []);
  const checkMetaMask = () => {
    if (typeof window.ethereum === 'undefined') {
      // MetaMask not installed
      setShowMetaMaskPopup(true);
    } else {
      if (!window.ethereum.isConnected()) {
        // MetaMask installed but not connected
        setShowMetaMaskPopup(true);
      }
    }
  };
  const popupStyle = {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    padding: "10px",
    backgroundColor: "#f44333",
    // color: "black",
    borderRadius: "0 0 8px 8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    zIndex: 999,
  };
  
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "black",
    fontSize: "20px",
    // fontWeight: "bold",
  };
  const closePopup = () => {
    setShowMetaMaskPopup(false);
  };
  return (
    <div>
      {/* <button onClick={() => listMembership()}  style={{
          backgroundColor: 'rgb(191, 64, 191)',
          color: '#ewe',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '17px',
          }}>LIST MEMBERSHIP</button> */}
           {showMetaMaskPopup && (
        <div className="metamask-error" style={popupStyle}>
          <p>MetaMask Wallet is not installed or connected. Please install MetaMask Wallet.</p>
          <button className="close-btn" onClick={closePopup} style={closeButtonStyle}>
            &times;
          </button>
        </div>
      )}
      <Header />
      <HeroSection />
      <Service />
      <About />
      <AboutRight />
      <AboutThird />
      <Feature />
      <Price />
      <Faq />
      <Info />
      <Footer />
    </div>
  );
};

export default index;
