import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';
import { Popupwin } from '../../components';
import { Popupbutton } from '../../components';






const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#admin">Admin</a></p>
  </>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cookbook__navbar"> 
      <div className="cookbook__navbar-links">
        <div className="cookbook__navbar-links_logo">
         <img src={logo} alt="logo" /> 
        </div>
        <div className="cookbook__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#admin">Admin</a></p>
        </div>
      </div>
      <div className="cookbook__navbar-popupb">
      </div>
      <div className="cookbook__navbar-popupw">
        <Popupwin/>
      </div>
      <div className="cookbook__navbar-search">
          <input type="text"></input>
          <button type="button">Search</button>
        </div>
      <div className="cookbook__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="cookbook__navbar-menu_container scale-up-center">
            <div className="cookbook__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Navbar