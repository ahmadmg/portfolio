
import React from "react";
import { SiLinkedin,SiGithub } from "react-icons/si";
import "../styles/Navbar.css";

function SocialMedia() {
  return (
  
    <div className="socialMedia">
    <a href="https://www.linkedin.com/in/ahmadmg/" aria-label="My LinkedIN"><SiLinkedin  title="LinkedIn" style={{color:"#0077b5"}} className="side-icon"/></a>
    <a href="https://github.com/ahmadmg" aria-label="My GITHUB"><SiGithub title="GITHUB" style={{color:"#0077b5"}} className="side-icon"/> </a>
    </div>
    
  );
}

export default SocialMedia;