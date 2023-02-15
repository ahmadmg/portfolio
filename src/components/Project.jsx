import React from "react";

function ProjectItem(props) {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="bgImage"
      />
      <h1> {props.name} </h1>
    </div>
  );
}

export default ProjectItem;
