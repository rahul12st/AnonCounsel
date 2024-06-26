import React from "react";
import { BiTransferAlt, BiMenu } from "react-icons/bi";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";

const Form = ({ close, proMember, address, freeTrail }) => {
  const today = Date.now();
  const date = new Date(today);
  const expiredDate = date.toLocaleDateString("en-US");
  const handleClick = (e) => {
    e.preventDefault(); 
    close(e);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <form id="form_input_data" className="msger-inputarea">
      {(proMember?.addressUser === address && proMember?.expireDate !== expiredDate) || freeTrail <= 4 ? (
        <>
          <button
            className="navbar-toggler d-lg-none d-block msger-send-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="icon_size" />
          </button>
          <input
            name="prompt"
            type="text"
            className="msger-input"
            placeholder="Ask any question here..."
            rows="1"
            cols="1"
          />
         
          <button
            // Attach onClick handler directly to the button
            type="submit" // Change type to submit to allow form submission
            className="msger-send-btn"
          >
            <MdSend className="icon_size" />
          </button>
        </>
      ) : null}
    </form>
  );
};

export default Form;
