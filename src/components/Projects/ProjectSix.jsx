import React from "react";
// import { Link } from 'react-router-dom';
import Project6 from "../../img/fresh-cucumbers.png";
import Github from "../../img/github.png";
import Globe from "../../img/globe.png";

export default function ProjectSix() {
  return (
    <div className="projects">
      <h1>Fresh Cucumbers</h1>
      <div className="snapshot-and-links">
        <img className="site-snap" src={Project6} />
        <div className="links">
          <a
            href="https://github.com/vasynizami/fresh-cucumbers"
            target="_blank"
          >
            <img className="icons" src={Github} />
          </a>
          <a href="http://fresh-cucumbers.surge.sh/" target="_blank">
            <img className="icons" src={Globe} />
          </a>
        </div>
      </div>
      {/* <div className="project-info"> */}
        <div className="description">
          <p>
            A full-stack web app demonstrating full CRUD functionality. The user
            can create an account, add/edit/delete movie reviews, and view the
            reviews created by other users.
          </p>
          <h2>Technologies:</h2>
          <p>
            CSS, React, React Router, Ruby on Rails, bcrypt, JWT, Heroku, Surge
          </p>
        </div>
      {/* </div> */}
    </div>
  );
}
