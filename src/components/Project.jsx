import React from "react";

export default function Project(props) {
  return (
    <div className="project">
      <h1>{props.project.name}</h1>
      <div className="project-img-links">
        <img id="site-snap" src={require(`../img/${props.project.imgHor}`)} />
      </div>
      <div className="description">
        <p>{props.project.description}</p>
        <h2>Technologies:</h2>
        <p>{props.project.technologies}</p>
      </div>
      <div className="project-links">
        <a href="#">website</a>
        <a href="#">github</a>
      </div>
    </div>
  );
}
