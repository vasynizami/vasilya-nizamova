import React, { Component } from "react";
import Projects from "../Projects.json";
import Project from "./Project";


class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: Projects,
      project: Projects[0]
    }
  } 
  nextProject = () => {
    const newIndex = this.state.project.index + 1;
    this.setState({
      project: Projects[newIndex]
    })
  }
  prevProject = () => {
    const newIndex = this.state.project.index - 1;
    this.setState({
      project: Projects[newIndex]
    })
  }

  render() {
    const { projects, project } = this.state;
    return (
      <div className="portfolio">
        <button
          onClick={() => this.prevProject()}
          disabled={project.index === 0}
        >
          Prev
        </button>
        <button
          onClick={() => this.nextProject()}
          disabled={project.index === Projects.length - 1}
        >
          Next
        </button>

        <div className="col">
          <div className={`slider active-slide-${project.index}`}>
            <div className="slider-wrapper" style={{
                'transform': `translateX(-${project.index*(100/projects.length)}%)`
              }}>
                {
                  projects.map(project => <Project key={project._id}  project={project} />)
                }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Portfolio;
