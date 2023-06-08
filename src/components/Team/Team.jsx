import React from "react";
import "./Team.css";
import { teamDetails } from "../../assets/TeamData";
import { AiOutlineLinkedin,AiFillInstagram,AiFillGooglePlusCircle } from "react-icons/ai";
const Team = () => {

  
  console.log(teamDetails);
  return (
    <div id="team">
      <h3>MEET THE TEAM</h3>
      <div className="container">

      <div class="box">
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div class="content">
                <h2>Karan Singh<br /><span>Graphic Designer</span></h2>
            </div>
            </div>
      </div>
      {/* { teamDetails.map((teamMember,index)=>
      {return(  
      <div className="personCard" key={index}>
        <img src={teamMember.image} alt="Image" className="personImage" />
        <h4>{teamMember.name}</h4>
        <h4>{teamMember.position}</h4>
        <p>{teamMember.department}</p>
        <div>
        {teamMember.links.linkedIn && <a href={teamMember.links.linkedIn}><AiOutlineLinkedin className="linksPerson"/></a>}
        {teamMember.links.instagram && <a href={teamMember.links.instagram}><AiFillInstagram className="linksPerson"/></a>}
        {teamMember.links.gmail && <a href={teamMember.links.gmail}><AiFillGooglePlusCircle className="linksPerson"/></a>}
        </div>
    </div>
      )}
      )} */}
    </div>
  );
};

export default Team;
