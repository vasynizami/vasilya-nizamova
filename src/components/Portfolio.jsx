import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project2 from "../img/escapenyc.png";
import Project4 from "../img/my-recipe-book.png";
import Project5 from "../img/al-di-la.png";
import Project6 from "../img/fresh-cucumbers.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Link to="/project2">
          <div className="project-container">
            <div className="overlay">
              <h4>Escape NYC</h4>
            </div>
            <img src={Project2} />
          </div>
        </Link>
        <Link to="/project4">
          <div className="project-container">
            <div className="overlay">
              <h4>My Recipe Book</h4>
            </div>
            <img src={Project4} />
          </div>
        </Link>
        <Link to="/project5">
          <div className="project-container">
            <div className="overlay">
              <h4>Al Di La Trattoria</h4>
            </div>
            <img src={Project5} />
          </div>
        </Link>
        <Link to="/project6">
          <div className="project-container">
            <div className="overlay">
              <h4>Fresh Cucumbers</h4>
            </div>
            <img src={Project6} />
          </div>
        </Link>
      </div>
    );
  }
}
export default Portfolio;
