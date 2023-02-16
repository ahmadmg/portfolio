import React from "react";
import "../styles/Projects.css";

function ProjectItem({image,name,skills,code}) {
  return (
    <div className="projectItem">
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <h3>{skills}</h3>
      <a href={code} ><h3>the code</h3></a>
    </div>
  );
}

export default ProjectItem;
