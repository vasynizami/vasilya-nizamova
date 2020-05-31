import React, { Component } from "react";
import { Route } from "react-router-dom";
import Projects from "../Projects.json";
import Project from "./Project";
import BG from "../img/project-background2.jpg";

class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
      projects: Projects,
    };
  }

  render() {
    return (
      <div
        className="project-card"
        style={{
          backgroundImage: "url(" + BG + ")",
          filter: "grayscale(50%)",
          backgroundSize: "cover",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <Route
          path="/project1"
          render={() => <Project project={this.state.projects.Project1} />}
        />
        <Route
          path="/project2"
          render={() => <Project project={this.state.projects.Project2} />}
        />
        <Route
          path="/project3"
          render={() => <Project project={this.state.projects.Project3} />}
        />
        <Route
          path="/project4"
          render={() => <Project project={this.state.projects.Project4} />}
        />
      </div>
    );
  }
}

export default ProjectCard;
