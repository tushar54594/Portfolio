import React from "react";
import "./about.css";
import photo from "../../../assets/photo.jpeg";
import SocialContact from "../../common/social-contact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br />
          <span className="info-name">Tushar</span>.
          <br />I am a Front-end developer.
          <br />I love learning about new tech stacks in web.
        </div>
        <div className="about-photo">
          <img src={photo} className="photo" alt="this" />
        </div>
      </div>
        <SocialContact />
    </div>
  );
}

export default About;
