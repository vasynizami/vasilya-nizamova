import React from "react";
import Photo from "../img/me.jpg";

function About() {
  return (
    <div className="about">
      <div className="bio">
        <p>
          Hi! I'm Vasilya, a NYC-based Software Engineer with a
          knack for visual aesthetics. I focus on creating visually intuitive web apps with real users in mind.
        </p>
        <h4>
          Technologies I use: 
        </h4>
        <p style={{fontSize: "18px", marginTop: "20px"}}>
          HTML, CSS, Bootstrap, JavaScript, ReactJS, MongoDB, Express, Mongoose, PostgreSQL, Ruby, Ruby on Rails
        </p>
      </div>
        <img id="photo" src={Photo}></img>
    </div>
  );
}
export default About;


