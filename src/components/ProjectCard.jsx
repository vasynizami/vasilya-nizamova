import React, { Component } from "react";
import { Route } from "react-router-dom";
import Projects from "../Projects.json";
import Project from "./Project";

class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
      projects: Projects,
    };
  }

  render() {
    return (
      <div>
        <Route path="/project1" render={() => <Project project={this.state.projects.Project1}/>} />
        <Route path="/project2" render={() => <Project project={this.state.projects.Project2}/>} />
        <Route path="/project3" render={() => <Project project={this.state.projects.Project3}/>} />
        <Route path="/project4" render={() => <Project project={this.state.projects.Project4}/>} />
      </div>
    );
  }
}

export default ProjectCard;
