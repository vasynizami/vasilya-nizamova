import React from "react";
import { Link } from "react-router-dom";
// import Projects from "../Projects.json";
import ProjectCard from "./ProjectCard";
import bG1 from "../img/project-background.jpg";
import bG2 from "../img/project-background2.jpg";
import bG3 from "../img/project-background3.jpg";
import bG4 from "../img/project-background4.jpg";

export default function Portfolio() {

    return (
      <div className="portfolio">
        <div className="grid-container">
          <Link id="project1" to="/project1" className="area">
            <div
              className="image"
              style={{
                backgroundImage: "url(" + bG1 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "auto",
                minHeight: "100%",
              }}
            >
              <div className="overlay">
                <h4>I</h4>
              </div>
            </div>
          </Link>
          <Link id="project2" to="/project2" className="area">
            <div
              className="image"
              style={{
                backgroundImage: "url(" + bG2 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "auto",
                minHeight: "100%",
              }}
            >
              <div className="overlay">
                <h4>II</h4>
              </div>
            </div>
          </Link>
          <Link id="project3" to="/project3" className="area">
            <div
              className="image"
              style={{
                backgroundImage: "url(" + bG3 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "auto",
                minHeight: "100%",
              }}
            >
              <div className="overlay">
                <h4>III</h4>
              </div>
            </div>
          </Link>
          <Link id="project4" to="/project4" className="area">
            <div
              className="image"
              style={{
                backgroundImage: "url(" + bG4 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "auto",
                minHeight: "100%",
              }}
            >
              <div className="overlay">
                <h4>IV</h4>
              </div>
            </div>
          </Link>
        </div>
        <ProjectCard />
      </div>
    );
};
