import React from "react";
// import { motion } from "framer-motion";

export default function Project(props) {
  return (
    <div className="project-card" id={`card-${props.project.index}`}>
      <h1>{props.project.name}</h1>
      <div className="project-details">
        <img
          id="site-snap"
          src={require(`../img/${props.project.img}`)}
          alt="project snapshot"
        />
        <div className="description-links">
          <div className="description">
            <p>{props.project.description}</p>
            <h2>Technologies:</h2>
            <p>{props.project.technologies}</p>
          </div>
          <div className="project-links">
            <a href={props.project.url} target="_blank">
              website
            </a>
            <a href={props.project.githubUrl} target="_blank">
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
