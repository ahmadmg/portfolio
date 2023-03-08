import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiVisualstudiocode,SiGithub,SiNetlify 
           ,SiGit,SiPowershell,SiFigma,SiMiro} from "react-icons/si"
          


function Home() {
  return (
    <div className="home">
      
      <div className="skills">
        <ol className="list">
          {/* <li className="item"> <h1>Skills : </h1></li> */}
          <li className="item">
            <h2>I  Write my Code with:</h2>
            <span className="icon-line">
              <SiHtml5 className="icons" title="HTML" style={{color:"#e34c26"}}/>
             <SiCss3 className="icons" title="CSS" style={{color:"#2965f1"}}/> 
             <SiJavascript className="icons" title="JAVASCRIPT" style={{color:"#F0DB4F"}}/>  
             <SiReact className="icons" title="REACT" style={{color:"#61dbfb"}}/></span>
          </li>
          <li className="item">
            <h2>To make it public:</h2>
            <span className="icon-line">
              <SiGithub className="icons" title="GITHUB" style={{color:"#4078c0"}}/> 
            <SiNetlify className="icons" title="NETLIFY" style={{color:"#0E1E25"}}/>
            </span>
          </li>
          <li className="item">
            <h2>IDE, terminals:</h2>
            <span className="icon-line">
              <SiVisualstudiocode className="icons" title="VSCODE" style={{color:"#0078d7"}}/>
              <SiGit className="icons" title="GIT" style={{color:"#f1502f"}}/>
              <SiPowershell className="icons" title="POWERSHELL" style={{color:"#012456"}}/>
           
            </span>
          </li>
          <li className="item">
            <h2> To design and prototype:</h2>
            <span className="icon-line">
              <SiFigma className="icons" title="FIGMA" style={{color:"#93cec0"}}/>
              <SiMiro className="icons" title="MIRO" style={{color:"#F2CA02"}}/> 
            </span>
          </li>
        </ol>
      </div>

      <div className="about">
      {/* Animation */}
     
      <h2> 
      
         <Typewriter
  
       onInit={(typewriter)=> {

       typewriter
 
       .typeString("You are welcome")
        
       .pauseFor(1000)
       .deleteAll()
       .typeString("I'm Ahmad")
       .start();
       }}
       />
       </h2>
        {/* <h2>Welcome to my Portfolio</h2> */}
          <p className="prompt">
            I'm passionate about <span className="color-me">coding</span> and a hard worker.  I used to work
            within <span className="color-me">customer support</span> and looking forward to starting to make the
            <span className="color-me"> product</span> meg selv.
          </p>
        
      </div>

    </div>
  );
}

export default Home;
