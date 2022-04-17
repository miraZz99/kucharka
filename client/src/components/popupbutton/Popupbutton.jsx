import React, { useState } from 'react'
import './popupbutton.css';
import { Popupwin } from '..';

// Zatím nefunguje, bude potřeba pokud se implementuje tlačítko do navbar-menu
const Popupbutton = () => {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
  setIsOpen(!isOpen);
  }

  return (
    <div>
          <input
            type="button"
            value="Create"
            onClick={togglePopup}
          />
    </div>     
  );
};


export default Popupbutton