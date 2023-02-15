import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <h2>Hi,My Name is Ahmad</h2>
        <div className="prompt">
          <p>
            Others call me Ahmad .<br /> I'm passionate about coding and on my
            to update myself by participating in Kodehode. <br /> I used to work
            within customer support and looking forward to starting to make the
            product selv.
            <br /> Otherwise You can see me as a father, chess player, loser
            photographer and a customer support for the family and friends.
          </p>
          <LinkedInIcon />
          <GitHubIcon />
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
