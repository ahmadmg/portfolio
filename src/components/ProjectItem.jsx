import React from "react";
import "../styles/Projects.css";

function ProjectItem({image,name,skills,code,preview}) {
  return (
    <div className="projectItem">
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <h3>{skills}</h3>
      <a href={code} >code</a> <span>- </span>
      <a href={preview}>preview</a>
    </div>
  );
}

export default ProjectItem;
