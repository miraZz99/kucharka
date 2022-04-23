import React, { useState } from 'react'
import ListData from '../../componenty_A/ListData';
import './popup.css';

const Popup = props => {
  
  return (
    <div>
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
     
     
    </div>
   
    </div>
  );
};

export default Popup;