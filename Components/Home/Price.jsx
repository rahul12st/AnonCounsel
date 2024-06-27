import React from "react";

const Price = () => {
  const priceTable = [
    {
      title: "Weekly Plan",
      price: "$3.99",
      items: [
        {
          icon: "arrow",
          item: "Intelligent AI chatbot",
        },
        {
          icon: "arrow",
          item: "Unlimited answer of question",
        },
        {
          icon: "arrow",
          item: "Avoid buying coin forever  ",
        },
        {
          icon: "arrow",
          item: "No ad in background",
        },
        {
          icon: "arrow",
          item: "Early access to new features",
        },
      ],
    },
    {
      title: "Monthly Plan",
      price: "$3.99",

      items: [
        {
          icon: "arrow",
          item: "Intelligent AI chatbot",
        },
        {
          icon: "arrow",
          item: "Unlimited answer of question",
        },
        {
          icon: "arrow",
          item: "Avoid buying coin forever          ",
        },
        {
          icon: "arrow",
          item: "No ad in background",
        },
        {
          icon: "arrow",
          item: "Early access to new features",
        },
        {
          icon: "arrow",
          item: "15+ new category",
        },
      ],
    },
    {
      title: "Lifetime Plan      ",
      price: "$3.99",

      items: [
        {
          icon: "arrow",
          item: "Intelligent AI chatbot",
        },
        {
          icon: "arrow",
          item: "Unlimited answer of question",
        },
        {
          icon: "arrow",
          item: "Avoid buying coin forever          ",
        },
        {
          icon: "arrow",
          item: "No ad in background",
        },
        {
          icon: "arrow",
          item: "Early access to new features",
        },
      ],
    },
  ];
  return (
    <section class="pricing-section section-b-space" id="prices">
      <div class="container">
        <div class="title-horizontal">
          <h2>
            Unlock the deals 
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
