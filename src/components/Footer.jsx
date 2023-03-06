import "../styles/Footer.css";
import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/ahmadmg/" aria-label="My LinkedIN"><SiLinkedin style={{color:"#0077b5"}}/></a>
        <a href="https://github.com/ahmadmg" aria-label="My GITHUB"><SiGithub title="GITHUB" style={{color:"#0077b5"}}/> </a>
      </div>
      <p>&copy; Copyright 2023, ahmadam.me</p>
    </footer>
  );
}
