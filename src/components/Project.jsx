import React from "react";

export default function Project(props) {
  return (
    <div className="projects">
      <h1>{props.project.name}</h1>
      <img id="site-snap" src={require(`../img/${props.project.imgHor}`)} />
        <a href="#">website</a>
        <a href="#">github</a>
        <div className="description">
        <p>{props.project.description}</p>
          <h2>Technologies:</h2>
        <p>{props.project.technologies}</p>
        </div>
    </div>
  );
}
