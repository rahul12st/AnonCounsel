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
                    AI's Innovative Potential for One-Click Content Generation.
                  </h2>
                </div>
                <p>
                  Crafting influential content requires a deep understanding of
                  your target audience. Pinpoint your ideal demographic and
                  familiarise yourself with their needs, passions, and sources
                  of concern.
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
