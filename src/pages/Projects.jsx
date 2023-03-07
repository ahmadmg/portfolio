import React from "react";
import {SiHtml5,SiCss3,SiJavascript,SiReact} from "react-icons/si"
import ProjectItem from "../components/ProjectItem";
import "../styles/projects.css"
import {ProjectList} from "../data/projectList"
function Projects() {
  return (
    <div className="projects">
      
      <div className="projectList">
        {ProjectList.map((project)=>{
          return <ProjectItem project={project} />
        })}
      </div>
    </div>
  );
}

export default Projects;
