import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { images, teamDetails } from "../../assets/TeamData";
import "./style.css";
import { AiOutlineLinkedin,AiFillInstagram,AiFillGooglePlusCircle } from "react-icons/ai";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="teamCarousel">
     <motion.h1 animate={{x:50}}>Meet The Team </motion.h1> 
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >

          {teamDetails.map((teamMember, index) => {
            return (
              <motion.div className="item" key={index}>
                <div className="box">
                  <div className="imgBox">
                    <img
                      src={teamMember.image}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h2>
                      {teamMember.name}
                      <br />
                      <span>{teamMember.position}</span>
                      <br />
                      <div className="socials">
                      {teamMember.links.linkedIn && <a href={teamMember.links.linkedIn}><AiOutlineLinkedin className="linksPerson"/></a>}
        {teamMember.links.instagram && <a href={teamMember.links.instagram}><AiFillInstagram className="linksPerson"/></a>}
        {teamMember.links.gmail && <a href={teamMember.links.gmail}><AiFillGooglePlusCircle className="linksPerson"/></a>}
                      </div>
                    </h2>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
