import React from "react";
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiGit} from "react-icons/si"
import { TbWorld } from "react-icons/tb";
import "../styles/Projects.css";

// Render Skills Array to icon components
function getIcon(icon) {
  switch (icon) {
    case "SiHtml5" : return <SiHtml5 className="skill-icon color-html5"/>
    case "SiCss3" : return <SiCss3 className="skill-icon color-css"/>
    case "SiJavascript" : return <SiJavascript className="skill-icon color-js"/>
    case "SiReact" : return <SiReact className="skill-icon color-react"/>
  }
}

function ProjectItem({ project: {image,name,skills,code,preview} }) {
  
  return (
    <div className="projectItem ">
      
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div skill-icons>  
       { skills.map( icon => getIcon(icon) ) }
      </div>
      <a href={code} target="_blank"><SiGit className="skill-icon" title="CODE" /></a>&#160;&#160;
      <a href={preview} target="_blank"   ><TbWorld className="skill-icon"  title="Live Prview"/></a>
      <h1 className="projectTitle"> {name} </h1>
    </div>
  );
}

export default ProjectItem;