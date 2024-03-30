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
