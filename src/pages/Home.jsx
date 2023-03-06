import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home">
      <div className="about">
      {/* Animation */}
      <h2>  
         <Typewriter
  
       onInit={(typewriter)=> {

       typewriter
 
       .typeString("Welcome to my Portfolio")
        
       .pauseFor(1000)
       .deleteAll()
       .typeString("I'm Ahmad")
       .start();
       }}
       />
       </h2>
        {/* <h2>Welcome to my Portfolio</h2> */}
          <p className="prompt">
            I'm passionate about coding and a hard worker.  I used to work
            within customer support and looking forward to starting to make the
            product selv.
          </p>
        
      </div>
      <div className="skills">
        <h1>Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>I Use this languages to Write my Code:</h2>
            <span>Html, Css , JavaScript , React</span>
          </li>
          <li className="item">
            <h2>When I want to make it public:</h2>
            <span>Github, Netlify</span>
          </li>
          <li className="item">
            <h2>IDE, terminals:</h2>
            <span>VS code, Git, PowerShell
            When I design and prototype:
            </span>
          </li>
          <li className="item">
            <h2> When I design and prototype:</h2>
            <span>Figma, Miro </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
