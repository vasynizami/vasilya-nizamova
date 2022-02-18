import React from "react";
import Photo from "../img/me.jpg";

function About() {
  return (
    <div className="about">
      <div className="bio">
        <p>
          Hi! I'm Vasilya, a NYC-based Software Engineer with a
          knack for quality assurance. I focus on bringing strong attention to detail and quality control to the products I work on.
        </p>
        <h4>
          Technologies I use: 
        </h4>
        <p style={{fontSize: "18px", marginTop: "20px"}}>
          HTML, CSS, Bootstrap, Sass, JavaScript, TypeScript, jQuery, ReactJS, React Bootstrap, Redux, AngularJS, Cypress, WebdriverIO, Selenium, Jest, Chai, Mocha, MongoDB, Mongoose, Express, NodeJS, MySQL, Ruby, Ruby on Rails
        </p>
      </div>
        <img id="photo" src={Photo}></img>
    </div>
  );
}
export default About;


