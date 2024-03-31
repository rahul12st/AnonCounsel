import React from "react";
import { BiTransferAlt, BiMenu } from "react-icons/bi";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";
import { AiFillAudio, AiFillPicture } from "react-icons/ai";

const Form = ({ close, proMember, address, freeTrail }) => {
  const today = Date.now();
  const date = new Date(today);
  const expiredDate = date.toLocaleDateString("en-US");

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
          <a href="" className="scan-icon">
            <AiFillPicture className="icon_size" />
          </a>
          <a href="" className="mic-icon">
            <AiFillAudio className="icon_size" />
          </a>
          <button
            onClick={(e) => close(e)}
            type="submit"
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
