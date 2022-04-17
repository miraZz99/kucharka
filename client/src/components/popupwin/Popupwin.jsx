import React, { useState } from 'react'
import './popupwin.css';
import { Popup } from '../../components';


const Popupwin = () => {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
  setIsOpen(!isOpen);
  }

  return (
    <div className="popupwin">
      <div className="popupwin-button">
          <input
            type="button"
            value="Create"
            onClick={togglePopup}
          />
        </div>
      <div className="popupwin-content">
          {isOpen && <Popup
          content={<>
          <b>Create your recipe</b>
          <input type="text"></input>
          <input type="text"></input>
          <button>Create</button>
          </>}
          handleClose={togglePopup}
          />}
        </div>
    </div>
  );
};


export default Popupwin