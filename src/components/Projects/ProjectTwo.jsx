import React from "react";
import Project2 from "../../img/escapenyc.png";
import Github from "../../img/github.png";
import Globe from "../../img/globe.png";

export default function ProjectTwo() {
  return (
    <div className="projects">
      <h1>Escape NYC</h1>
      <div className="snapshot-and-links">
        <img className="site-snap" src={Project2} />
        <div>
          <a href="https://github.com/vasynizami/escape_nyc" target="_blank">
            <img className="icons" src={Github} />
            </a>
          <a href="http://escapenyc333.surge.sh/" target="_blank">
            <img className="icons" src={Globe} />
            </a>
        </div>
      </div>
        <div className="description">
          <p>
            A front-end web app that displays the cheapest flights to the
            destination defined by the search input as well as current weather
            conditions in NYC in the side menu widget.
          </p>
          <h2>Technologies:</h2>
          <p>HTML, CSS, JavaScript, third party APIs, Surge</p>
        </div>
    </div>
  );
}
