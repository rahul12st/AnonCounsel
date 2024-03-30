import React from "react";


const HeroSection = () => {
  return (
    <section class="home-section" id="">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="home-content">
              <div class="bg-effect">
                {/* <img
                  src="assets/images/bot.png"
                  class="img-fluid effect1 rotate-effect"
                  alt=""
                />
                <img
                  src="assets/images/bot.png"
                  class="img-fluid effect2 rotate-effect"
                  alt=""
                /> */}
              </div>
              <div>
               <div className="doido">
                <svg viewBox="0 0 900 600">
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="36%" className="text--line">
          Linea BOT
        </text>
        <text textAnchor="middle" x="50%" y="78%" className="text--line2" style={{ letterSpacing: '6px' }}>
  Unleash The Power of AI
</text>

      </symbol>
      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default HeroSection;
