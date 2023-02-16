import "../styles/Footer.css";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/ahmadmg/"><LinkedInIcon /></a>
        <a href="https://github.com/ahmadmg"><GitHubIcon /></a>
      </div>
      <p>&copy; Copyright 2023, ahmadam.me</p>
    </footer>
  );
}
