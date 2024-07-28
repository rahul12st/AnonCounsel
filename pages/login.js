import React from "react";

//INTERNAL IMPORT
import { Login, SignUp } from "../Components/Auth/index";

const login = () => {
  return (
    <div>
      <section class="login-section">
        <a href="/">
          <img src="assets/images/logo.png" class="img-fluid logo-auth"  style={{ width: '240px', height: '68px' }}/>
        </a>
        <div class="row m-0">
          <div class="col-lg-7 d-lg-inline-block d-none p-0">
            <div class="login-animation">
              
              <img
                src="assets/images/sign-up.png"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                class="img-flu img-light"
                alt=""
              />
              
            </div>
          </div>
          <div class="col-xxl-4 col-lg-5 ms-auto p-0">
            <div class="login-box">
              <div>
                <h2>
                  Welcome to <span> AnonCounsel!</span>
                </h2>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="login-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#login-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="login-tab-pane"
                      aria-selected="true"
                    >
                      Login
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="signup-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#signup-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="signup-tab-pane"
                      aria-selected="false"
                    >
                      signup
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <Login />
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
