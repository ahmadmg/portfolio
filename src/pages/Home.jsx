import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home">
      <div className="about">
      <h2>
        //Animation
         <Typewriter
  
       onInit={(typewriter)=> {

       typewriter
        
       .typeString("Welcome to my Portfolio")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("I'm Ahmad")
       .start();
       }}
       /></h2>
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
            <h2>Front-End</h2>
            <span>Html, Css , JavaScript , React</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
