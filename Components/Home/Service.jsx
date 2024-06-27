import React from "react";

const Service = () => {
  const features = [
    {
      title: "Simpler UI",
      description:
        "Unleash the power of AI to effortlessly compelling content that captivates and converts.",
      image: "service-title.svg",
     
    },
    {
      title: "Effortless purchases",
      description:
        "Accelerate your marketing and take over the digital landscape",
      image: "service-title.svg",
    
    },
    {
      title: " Faster Search ",
      description:
        "Generate more engaging content to skyrocket your website's visibility",
      image: "service-title.svg",
     
    },
    {
      title: "Note Making",
      description:
        "Reinvent your content marketing and captivate your audience like never before.",
      image: "service-title.svg",
      icons: [
        {
          icon: "text.svg",
          style: "outline-icon",
        },
        {
          icon: "text-bold.svg",
          style: "bold-icon",
        },
      ],
    },
  ];

  return (
    <div class="service-section section-b-space" id="services">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="row g-4 service-row">
              {features.map((feature, i) => (
                <div class="col-sm-6">
                  <div class="service-box">
                    <div class="service-content">
                      <h3>
                        {feature.title}
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-info">
              <div>
                <div class="title">
                  <h2>For All Kind of Creators</h2>
                  
                </div>
                <p>
                  Introducing a revolutionary AI partner for creators across the
                  globe—a groundbreaking tool designed to transform the way we
                  bring our creative ideas to life. Unleash your artistic
                  abilities as you explore a world of limitless possibilities.
                  Say goodbye to obstacles and let this remarkable AI companion
                  pave the way to a new era of boundless creation.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
