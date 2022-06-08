import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import Create from "../../componenty_A/Create";
import "./navbar.css";

const Menu = (props) => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a onClick={props.admin}>Admin</a>
    </p>
    <p>
      <Create addRecipe={props.addRecipe} isAdmin={props.isAdmin} />
    </p>
  </>
);

const Navbar = (props) => {
  const { addRecipe, setIsAdmin, isAdmin } = props;
  const [toggleMenu, setToggleMenu] = useState(false);

  function admin() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div className="cookbook__navbar">
      <div className="cookbook__navbar-links">
        <div className="cookbook__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cookbook__navbar-links_container">
          <p>
            <a href="home">Home</a>
          </p>
          <p>
            <a onClick={admin}>Admin</a>
          </p>
        </div>
        <Create addRecipe={addRecipe} isAdmin={isAdmin} />
      </div>

      <div className="cookbook__navbar-popupb"></div>
      <div className="cookbook__navbar-popupw"></div>
      <div className="cookbook__navbar-search">
        <input
          type="text"
          name="name"
          onChange={(event) => props.find(event)}
          value={props.name}
        ></input>
        <button type="button" onClick={props.search}>
          Search
        </button>
      </div>
      <div className="cookbook__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cookbook__navbar-menu_container scale-up-center">
            <div className="cookbook__navbar-menu_container-links">
              <Menu admin={admin} addRecipe={addRecipe} isAdmin={isAdmin} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
