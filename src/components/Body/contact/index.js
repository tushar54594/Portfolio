import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the below platforms</p>
          <SocialContact />
        </div>
        <div className="email-button">
          <a href="mailto:tusharpathak2503@gmail.com">
          <i class="fa-solid fa-envelope email-icon"></i>Email Me</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
