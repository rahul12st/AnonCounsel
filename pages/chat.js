import React from "react";
//INTERNAL IMPORT
import { Chatting } from "../Components/Chat/index";

const chat = () => {
  return (
    <div>
      <Chatting />
      {/* CHATGPT */}
      <script type="module" src="script.js"></script>
      {/* CHATGPT */}
    </div>
  );
};

export default chat;
