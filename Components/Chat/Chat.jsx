import React, { useState, useEffect } from "react";

import { BiTransferAlt, BiMenu } from "react-icons/bi";
///INTERNAL IMPORT
import { Form } from "./index";
import { useStateContext } from "../../Context/index";
const Chat = () => {
  const [active, setActive] = useState("Ask anything");
  const [hide, setHide] = useState(true);
  const { Free, address } = useStateContext();
  const [proMember, setProMember] = useState({});
  const [freeTrail, setFreeTrail] = useState();

  const close = (e) => {
    e.preventDefault();
    setHide(false);
  };

  // const productList = [
  //   "Ask anything",
  //   "Content writer",
  //   "Code generator",
  //   "Translate anything",
    
  // ];

  const loadData = () => {
    const UserDetail = localStorage.getItem("UserDetail");
    const member = JSON.parse(UserDetail);
    setProMember(member);
    //FREE TRAIL
    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail);

    console.log(freeTrail);
  };

  useEffect(() => {
    loadData();
  }, []);

  const display = Free?.replace(/['"]+/g, "");

  return (
    <div
      class="tab-pane fade show active"
      id="chat"
      role="tabpanel"
      aria-labelledby="chat"
      tabindex="0"
    >
      <div class="main-wrapper">
        {/* <nav class="navbar navbar-expand-lg bg-light p-0">
          <button
            class="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="mobil_custom_menu" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="inner-menu-panel">
             
               <div class="search-box">
                <i class="iconsax" data-icon="search-normal-2"></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here.."
                />
              </div> 
              
            </div>
          </div>
        </nav> */}
        <div class="chat-header">
          <div class="d-flex align-items-center gap-2">
            <button
              class="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BiMenu className="mobil_custom_menu" />
            </button>
            <a href="/" class="logo-icon d-flex d-md-none">
              <img src="assets/images/robologo.png" class="img-fluid" />
            </a>
            <h3 id="targetDiv">{active}</h3>
          </div>
          <div class="header-option">
            {display == "Pro Member" ? (
              <a href="/">{display}</a>
            ) : (
              <a class="del-btn" data-cursor="pointer" href="">
                Free Left ( <span id="freeTry">{Free || 0}</span> / 5 )
              </a>
            )}

            <a
              class="premium-btn"
              id="subscriptionBtn"
              data-cursor="pointer"
              
            >
               Get
              <span>premium</span>
            </a>
          </div>
        </div>
        <div class="main-chat">
          {/* <div class="no-chat">
            {hide ? (
              <div>
                
                <h3>
                  {" "}
                  {active == "Ask anything" ? "" : "Ask"} {active} chatbot
                </h3>
              </div>
            ) : (
              ""
            )}
          </div> */}

          <div id="chat_container"></div>

          <Form
            close={close}
            proMember={proMember}
            address={address}
            freeTrail={freeTrail}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
