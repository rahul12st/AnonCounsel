import React from "react";

const Service = () => {
  const features = [
    {
      title: "Anonymous Support",
      description:
        "Access mental health advice without revealing your identity, ensuring complete privacy and comfort.",
      image: "privacy-icon.svg",
    },
    {
      title: "Secure Data",
      description:
        "Blockchain technology safeguards your data with tamper-proof security, protecting your personal information.",
      image: "security-icon.svg",
    },
    {
      title: "Global Access",
      description:
        "You can access the website from any part of world and can buy plans without the limitation of currency",
    },
    {
      title: "Smart Contracts",
      description:
        "Automate and secure interactions with smart contracts, ensuring reliable and transparent transactions.",
      image: "smart-contract-icon.svg",
      icons: [
        {
          icon: "calendar-icon.svg",
          style: "outline-icon",
        },
        {
          icon: "payment-icon.svg",
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
                <div class="col-sm-6" key={i}>
                  <div class="service-box">
                    <div class="service-content">
                      <h3>{feature.title}</h3>
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
                  <h2>For Privacy-Conscious Seekers</h2>
                </div>
                <p>
                  Introducing a groundbreaking platform designed for those who value anonymity while seeking mental health support. Our decentralized solution leverages blockchain technology to provide secure, private, and accessible mental health resources. Embrace a new era of mental health care where your privacy is paramount, and your well-being is our top priority.
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
