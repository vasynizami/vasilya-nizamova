import React, {Component} from "react";
import { Link } from "react-router-dom";
import Projects from "../Projects.json";
import ProjectCard from "./ProjectCard";
import bG1 from "../img/escapenyc.png";
import bG2 from "../img/my-recipe-book.png";
import bG3 from "../img/al-di-la.png";
import bG4 from "../img/fresh-cucumbers.png";

class Portfolio extends Component {
  state = {
    projects: Projects
  }
  render() {
    // const bG1 = this.state.projects.Project1.imgHor;
    // const bG2 = this.state.projects.Project2.imgHor;
    // const bG3 = this.state.projects.Project3.imgHor;
    // const bG4 = this.state.projects.Project4.imgHor;

    return (
      <div className="portfolio">
        <div className="grid-container">
          <Link id="project1" to="/project1" className="area">
            <div className="image" style={{ backgroundImage: "url(" + bG1 + ")", backgroundSize: "cover", backgroundPosition: "center", width: "auto", minHeight: "280px" }}>
               <div className="overlay">
              <h4>{this.state.projects.Project1.name}</h4>
            </div>
            </div>
          </Link>
          <Link id="project2" to="/project2" className="area">
          <div className="image" style={{ backgroundImage: "url(" + bG2 + ")", backgroundSize: "cover", backgroundPosition: "center", width: "auto",minHeight: "280px" }}>
          <div className="overlay">
              <h4>{this.state.projects.Project2.name}</h4>
            </div>
            </div>
          </Link>
          <Link id="project3" to="/project3" className="area">
          <div className="image" style={{ backgroundImage: "url(" + bG3 + ")", backgroundSize: "cover", backgroundPosition: "center", width: "auto", minHeight: "280px" }}>
          <div className="overlay">
              <h4>{this.state.projects.Project3.name}</h4>
            </div>
            </div>
          </Link>
          <Link id="project4" to="/project4" className="area">
          <div className="image" style={{ backgroundImage: "url(" + bG4 + ")", backgroundSize: "cover", backgroundPosition: "center", width: "auto", minHeight: "280px" }}>
          <div className="overlay">
              <h4>{this.state.projects.Project4.name}</h4>
            </div>
            </div>
          </Link>
        </div>
        <div className="project-card">
          <ProjectCard />
        </div>
      </div>
    );
  }
}
export default Portfolio;
