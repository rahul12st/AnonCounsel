import React from "react";

const About = () => {

  return (
    <section class="about-section section-b-space " id="abouts">
      <div class="bg-effect"></div>
      <div class="container">
        <div class="row g-md-5 g-4">
          <div class="col-lg-6 order-lg-0 order-1">
            <div class="about-content">
              <div>
                <div class="title">
                  
                  <h2 class="text-white">
                  Revolutionizing Mental Health Support with Blockchain Innovation
                  </h2>
                </div>
                <p>
                Experience a breakthrough in mental health support with our innovative platform, designed to prioritize your privacy and security. By harnessing the power of blockchain technology, we offer a unique solution where you can talk, seek advice from GPT without revealing your identity. 
                </p>
               
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img
                src="assets/svg/character/1.png"
                class="img-fluid"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
