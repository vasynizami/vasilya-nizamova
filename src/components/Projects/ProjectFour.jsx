import React from "react";
import Project4 from "../../img/my-recipe-book.png";
import Github from "../../img/github.png";
import Globe from "../../img/globe.png";

export default function ProjectFour() {
  return (
    <div className="projects">
      <h1>My Recipe Book</h1>
      <div className="snapshot-and-links">
        <img className="site-snap" src={Project4} />
        <div className="links">
          <a
            href="https://github.com/vasynizami/my-recipe-book"
            target="_blank"
          >
            <img className="icons" src={Github} />
          </a>
          <a href="http://my-recipebook.surge.sh/" target="_blank">
            <img className="icons" src={Globe} />
          </a>
        </div>
      </div>
      {/* <div className="project-info"> */}
        <div className="description">
          <p>
            A full-stack web app demonstrating full CRUD functionality. The user
            can create an account, add/edit/delete recipes, and view recipes
            created by other users.
          </p>
          <h2>Technologies:</h2>
          <p>
            CSS, React, Mongoose, MongoDB, Express, bcrypt, JWT, MongoDB Atlas,
            Heroku, Surge
          </p>
        </div>
      {/* </div> */}
    </div>
  );
}
