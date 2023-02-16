import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Welcome to my Portfolio</h2>
        <div className="prompt">
          <p>
            Others call me Ahmad . I'm passionate about coding and a hardeworker.  I used to work
            within customer support and looking forward to starting to make the
            product selv.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Html, Css , JavaScript , React</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
