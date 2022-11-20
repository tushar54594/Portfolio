import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i class="fa-solid fa-folder option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fa-solid fa-laptop-code option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fa-solid fa-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
