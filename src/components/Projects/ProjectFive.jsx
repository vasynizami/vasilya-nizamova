import React from "react";
// import { Link } from 'react-router-dom';
import Project5 from "../../img/al-di-la.png";
import Github from "../../img/github.png";
import Globe from "../../img/globe.png";

export default function ProjectFive() {
  return (
    <div className="projects">
      <h1>Al Di La Trattoria</h1>
      <div className="snapshot-and-links">
        <img className="site-snap" src={Project5} />
        <div className="links">
          <a
            href="https://github.com/vasynizami/ux-al-di-la"
            target="_blank"
          >
            <img className="icons" src={Github} />
          </a>
          <a
            href="https://romantic-lichterman-1050bf.netlify.app/"
            target="_blank"
          >
            <img className="icons" src={Globe} />
          </a>
        </div>
      </div>
      {/* <div className="project-info"> */}
        <div className="description">
          <p>
            A front-end website for a Brooklyn-based Italian restaurant. The
            project is made in collaboration with the UX team.
          </p>
          <h2>Technologies:</h2>
          <p>CSS, React, React Router, Netlify</p>
        </div>
      {/* </div> */}
    </div>
  );
}
