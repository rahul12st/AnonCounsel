import React from "react";

const Feature = () => {
  const items = [
    {
      title: "Code generator",
      description:
        "Discover the power of technology, making your coding dreams a reality.",
     
    },
    {
      title: "ASO expert",
      description:
        "Boost your app's success and take over the app stores and win the attention of millions.",
     
    },
    {
      title: "Insta caption",
      description:
        " One caption at a time, unveiling the endless potential of AI",
     
    },
    {
      title: "Email generator",
      description:
        " Generating emails that captivates and expresses with brilliance.",
     
    },
    {
      title: "Hashtag writer",
      description:
        "Boost your content journey by utilising the power of hashtags!",
      
    },
    {
      title: "E-commerce",
      description:
        "Promoting sales, enhancing customer experience, and redefining product recommendations.",
     
    },
    {
      title: "Ads & marketing",
      description:
        " Tap into data-driven facts, target the right clientele, and maximize ad performance.",
    
    },
    {
      title: "YouTube ",
      description:
        " Leverage data-driven insights, pinpoint the appropriate audience, and optimize advertising effectiveness.",
      
    },
  ];
  return (
    <section class="feature-section section-b-space">
      <div class="bg-effect">
        
        <img
          src="assets/images/feature-bg.png"
          class="img-fluid feature-bg"
          alt=""
        />
        <span class="round-effect"></span>
      </div>
      <div class="container">
        <div class="title-basic">
          <h2>
            Explore limitless features
          </h2>
        </div>
        <div class="swiper featureSlider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row g-xxl-5 g-4">
                {items.map((item, i) => (
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="feature-box">
                      <div class="feature-top">
                       
                        <h3>{item.title}</h3>
                      </div>
                      <h4>{item.description}</h4>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
