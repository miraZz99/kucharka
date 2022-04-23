import React, { useState } from 'react';
import cookbook from '../../assets/Cookbook.svg'
import './header.css';
import { Popupwin } from '../../components';
import Create from '../../componenty_A/Create';




const Header = () => (
  
  <div className="cookbook__header section__padding" id="home">
    <div className="cookbook__header-content">
      <h1 className="gradient__text">
        uuCookbook
        </h1>
      <div className="cookbook__header-content__button">
        {/* <Popupwin /> */}
        <Create/>
      </div>
      <div className="cookbook__header-content__popupwin">
        

        </div>
      <div className="cookbook__header-content__budget">
        <p>"Budget recipes for students"</p>
      </div>
    </div>
    <div className="cookbook__header-image">
      <img src={cookbook} />
    </div>
  </div>
)


export default Header;