import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile" onClick={() => setIsOpen(!isOpen)}>
      <div className="close-icon" >
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i class="fa-solid fa-folder option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fa-solid fa-laptop-code option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fa-solid fa-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
