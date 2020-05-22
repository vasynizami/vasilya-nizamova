import React from "react";
import HtmlLogo from "../img/html.png";
import CssLogo from "../img/css3.png";
import BootstrapLogo from "../img/bootstrap.png";
import JSLogo from "../img/jslogo.png";
import JQLogo from "../img/jquery.png";
import NodeJSLogo from "../img/nodejs.png";
import ReactLogo from "../img/react.png";
import RubyLogo from "../img/ruby.png";
import PostgresLogo from "../img/postgres.png";
import RailsLogo from "../img/rails.png";
import MongoLogo from "../img/mongodb.png";
import Photo from "../img/yo_Fotor.jpg";

function About() {
  return (
    <div className="about">
      <img src={HtmlLogo} />
      <img src={CssLogo} />
      <img src={BootstrapLogo} />
      <img src={JSLogo} />
      <img src={JQLogo} />
      <img src={NodeJSLogo} />
      <img src={ReactLogo} />
      <img src={RubyLogo} />
      <img src={PostgresLogo} />
      <img src={RailsLogo} />
      <img src={MongoLogo} />
      <p>
        Hi, I'm Vasilya! I'm a Full-Stack Developer who holds three years
        experience in the Digital Marketing space. With a background in both
        Software Engineering and Graphic Design, I bring a strong design
        sensibility to the websites and applications I create.
      </p>
      <img src={Photo} />
    </div>
  );
}
export default About;
