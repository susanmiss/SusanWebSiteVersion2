import React from "react";
import "../style/Navbar.css";
import LinkedinIcon from "../images/linkedin.svg";
import EmailIcon from "../images/email.svg";
import GithubIcon from "../images/github.svg";

function Navbar() {
  return (
    <div className="navbar">
      <a
        href="https://www.linkedin.com/in/susan-missaglia/"
        target="_blank"
        rel="noopener noreferrer" 
        className="link-icons"
        id="linkedin-icon"
      >
        <img src={LinkedinIcon} alt="linkedin link" />
      </a>

      <a href="mailto: fsusan@icloud.com" className="link-icons">
        <img src={EmailIcon} alt="email link" />
      </a>

      <a
        href="https://github.com/susanmiss"
        target="_blank"
        rel="noopener noreferrer" 
        className="link-icons"
        id="github-icon"
      >
        <img src={GithubIcon} alt="github link" />
      </a>
    </div>
  );
}

export default Navbar;
