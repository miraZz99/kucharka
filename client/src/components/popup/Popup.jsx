import React, { useState } from "react";
import ListData from "../../componenty_A/ListData";
import "./popup.css";

const Popup = (props) => {
  const { setServing, handleClose } = props;
  return (
    <div>
      <div className="popup-box">
        <div className="box" id="create">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
