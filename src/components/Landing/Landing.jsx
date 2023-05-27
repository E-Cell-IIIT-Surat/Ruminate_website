import React from 'react';
import "./Landing.css";
import logo from "../../assets/Ruminate_BG.png";
import ruminateImage from "../../assets/Website.png";
const Landing = () => {
  return (
    <div id="Home">
      <div id="logoHome">
        <img src={logo} alt="landing Logo" id="landingLogo"/>
      </div>
      <div id="motoHome">
        <img src={ruminateImage} alt="RuminateImage" id="ruminateImage"/>
      </div>
    </div>
  )
}

export default Landing