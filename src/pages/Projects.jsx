import React from "react";
import Project from "../components/Project";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <Project name="project1" />
      </div>
    </div>
  );
}

export default Projects;
