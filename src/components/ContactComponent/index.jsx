import React from "react";
import Github from "../../assets/github.svg";
import Email from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Mobile from "../../assets/mobile.svg";
import "./styles.scss";
function Contact() {
  return (
    <div className="contact-card">
      <a href="mailto:sanketmunot95@gmail.com" target="_blank">
        <img src={Email} />
      </a>
      <a href="https://www.linkedin.com/in/sanket-munot/" target="_blank">
        <img src={Linkedin} />
      </a>
      <a href="https://github.com/sanketmunot" target="_blank">
        <img src={Github} />
      </a>
      <a href="tel:+919158840097" target="_blank">
        <img src={Mobile} />
      </a>
    </div>
  );
}

export default Contact;
