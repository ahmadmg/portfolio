import React from "react";
import ProjectItem from "../components/ProjectItem";

import {ProjectList} from "../data/projectList"
function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project)=>{
          return <ProjectItem name={project.name} image={project.image} skills={project.skills} code={project.code} preview={project.preview}/>
        })}
      </div>
    </div>
  );
}

export default Projects;
