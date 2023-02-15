import "../styles/Footer.css";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p>&copy; Copyright 2023, ahmadam.me</p>
    </footer>
  );
}
