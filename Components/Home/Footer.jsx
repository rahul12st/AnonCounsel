import React from "react";


const Footer = () => {
  return (
    <footer>
      <div class="container" id="contact">
        <div class="footer-row">
          <div class="footer-main">
            <a href="/" class="footer-logo">
              <img src="assets/images/logo.png" class="img-fluid" alt="" />
            </a>
            
            <ul class="social-links">
              <li>
                <a data-cursor="pointer" href="https://www.facebook.com/">
                  <img
                    src="assets/svg/social/fb.svg"
                    class="img-fluid"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a data-cursor="pointer" href="https://in.linkedin.com/">
                  <img
                    src="assets/svg/social/linkedin.svg"
                    class="img-fluid"
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a data-cursor="pointer" href="https://www.instagram.com/">
                  <img
                    src="assets/svg/social/insta.svg"
                    class="img-fluid"
                    alt="insta"
                  />
                </a>
              </li>
              <li>
                <a data-cursor="pointer" href="https://twitter.com/login">
                  <img
                    src="assets/svg/social/twitter.svg"
                    class="img-fluid"
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="link-section">
            <div class="footer-title">
              
              Quick Links
            </div>
            <div class="footer-content">
              <ul>
                <li>
                  <a data-cursor="pointer" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="service.html">
                    Service
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li>
                  <a data-cursor="pointer" href="contact-us.html">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div class="footer-copyright">
          <h4>@2023 All the Copyright Reserved.</h4>
          <ul class="footer-links">
            <li>
              <a href="terms.html">Privacy Policy </a>
            </li>
            <li>
              <a href="terms.html">Terms & Condition </a>
            </li>
            <li>
              <a href="terms.html">Designed and Developed by Rahul Singh</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
