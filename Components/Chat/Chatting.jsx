import React from "react";

//INTERNAL IMPORT
import { SideBar, Chat, Subscription, Sitting } from "./index";
const Chatting = () => {
  return (
    <section class="chatting-wrapper pt-0">
      <SideBar />
      <div class="tab-content">
        <Chat />
        <Subscription />
        <Sitting />
      </div>
    </section>
  );
};

export default Chatting;
