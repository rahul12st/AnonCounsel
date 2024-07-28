import React from "react";

const Price = () => {
  const priceTable = [
    {
      title: "Basic Plan",
      price: "0.01 Matic",
      items: [
        {
          icon: "arrow",
          item: "Anonymous access to Chat",
        },
        {
          icon: "arrow",
          item: "Secure data protection with blockchain encryption",
        },
        {
          icon: "arrow",
          item: "Access to global network of experts",
        },
        {
          icon: "arrow",
          item: "No currency restrictions for plan purchases",
        },
      ],
    },
    {
      title: "Standard Plan",
      price: "0.02 Matic",
      items: [
        {
          icon: "arrow",
          item: "All Basic Plan features",
        },
        {
          icon: "arrow",
          item: "Priority access to top-rated GPT features",
        },
        {
          icon: "arrow",
          item: "Enhanced data control and management",
        },
        {
          icon: "arrow",
          item: "Exclusive early access to new features",
        },
        {
          icon: "arrow",
          item: "Comprehensive mental health resources",
        },
      ],
    },
    {
      title: "Premium Plan",
      price: "0.03 Matic",
      items: [
        {
          icon: "arrow",
          item: "All Standard Plan features",
        },
        {
          icon: "arrow",
          item: "Unlimited consultations with specialists",
        },
        {
          icon: "arrow",
          item: "Customizable data privacy settings",
        },
        {
          icon: "arrow",
          item: "24/7 access to support",
        },
        {
          icon: "arrow",
          item: "Personalized insights",
        },
      ],
    },
  ];
  
  return (
    <section class="pricing-section section-b-space" id="prices">
      <div class="container">
        <div class="title-horizontal">
          <h2>
            Catch your plans
          </h2>
        
        </div>
        <div class="row pricing-row g-xl-5 g-4 justify-content-center">
          {priceTable.map((price, i) => (
            <div class="col-lg-4 col-md-6">
              <div class="pricing-box">

                <div class="pricing-top">
                
                  <h3>{price.title}</h3>
                </div>
                <div class="pricing-mid">
                  <div class="clip-path-content">
                    <div>
                      <h2>{price.price}</h2>
                      <h4>/ only</h4>
                    </div>
                  </div>
                </div>
                <div class="pricing-content">
                  <div class="clip-path-content">
                    <ul>
                      {price.items.map((list, i) => (
                        <li>
                          
                          <h4>{list.item}</h4>
                        </li>
                      ))}
                    </ul>
                    <a class="pricing-link" href="#" data-cursor="pointer">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
