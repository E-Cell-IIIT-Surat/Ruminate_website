import React from 'react'
import "./Navbar.css"
import logo from "../../assets/Logo.png";
const Navbar = () => {
  const pages = ['HOME','ABOUT US','EVENTS','TEAM'];
  return (
    <nav>
        <div id='desktopNavHolder'>
            <div id="logoHolder">
                <img src={logo} alt="Ruminate logo" id="logo" />
                <span id="moto">FOSTER THE SPARK</span>
            </div>
            <div id="navBarHolder">
              {pages.map((page,i)=>{
                return(
                  <a key={i} >
                  {page}
                </a>
                )
              })}
            </div>
        </div>
    </nav>
  )
}

export default Navbar