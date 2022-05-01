import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

import './navbar.css';












const Menu = (props) => (
 
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#admin">Admin</a></p>
  <p><a onClick={props.recipe}>Recipes</a></p>
  </>
)




const Navbar = (props) => {

  const {recipe}= props
  const [toggleMenu, setToggleMenu] = useState(false);


  

  return (
   
    <div className="cookbook__navbar"> 
      <div className="cookbook__navbar-links">
        <div className="cookbook__navbar-links_logo">
         <img src={logo} alt="logo" /> 
        </div>
        <div className="cookbook__navbar-links_container">
          <p><a href="home">Home</a></p>
          <p><a href="admin">Admin</a></p>
          <p onClick={recipe} >Recipes</p>
          
 
          
     
          
         
         
        </div>
      </div>
      <div className="cookbook__navbar-popupb">
        
      </div>
      <div className="cookbook__navbar-popupw">
      </div>
      <div className="cookbook__navbar-search">
      <input type="text"  name = "name" onChange={(event)=>props.find(event)} value={props.value}></input>
      <button type="button" onClick={props.search} >Search</button>
        </div>
      <div className="cookbook__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="cookbook__navbar-menu_container scale-up-center">
            <div className="cookbook__navbar-menu_container-links">
              <Menu recipe = {recipe}/>
              
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
};




export default Navbar
