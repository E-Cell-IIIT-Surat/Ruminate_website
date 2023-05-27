import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div id="footerUp">
        <div id="googleMaps">
          FIND US HERE
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.06098631925!2d72.94842545072262!3d21.26905338483758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dedbfffffff%3A0xe2683f850017f1be!2sIIIT%20Surat!5e0!3m2!1sen!2sin!4v1675657295867!5m2!1sen!2sin"
            width="300"
            height="150"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id="#footerAbout">
          
        </div>
      </div>
      <div id="footerDown">
        © INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, SURAT.
      </div>
    </div>
  );
};

export default Footer;
