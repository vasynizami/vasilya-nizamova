import React from "react";
import HtmlLogo from "../img/html.svg";
import CssLogo from "../img/css3.svg";
import BootstrapLogo from "../img/bootstrap.svg";
import JSLogo from "../img/jslogo.svg";
import JQLogo from "../img/jquery.svg";
import ExpressLogo from "../img/express.svg";
import NodeJSLogo from "../img/nodejs.svg";
import ReactLogo from "../img/react.svg";
import RubyLogo from "../img/ruby.svg";
import PostgresLogo from "../img/postgresql.svg";
import RailsLogo from "../img/rails.svg";
import MongoLogo from "../img/mongodb.svg";
import Photo from "../img/yo_Fotor.jpg";

function About() {
  return (
    <div className="about">
      <div className="logos">
        <img src={HtmlLogo} />
        <img src={CssLogo} />
        <img src={BootstrapLogo} />
        <img src={JSLogo} />
        <img src={JQLogo} />
        <img src={ExpressLogo} />
        <img src={NodeJSLogo} />
        <img src={ReactLogo} />
        <img src={RubyLogo} />
        <img src={PostgresLogo} />
        <img src={RailsLogo} />
        <img src={MongoLogo} />
      </div>
      <div className="bio">
        <p>
          Hi, I'm Vasilya, or Vasy for short!
          <br />
          I'm a Full-Stack Developer who holds three years experience in the
          Digital Marketing space. With a background in both Software
          Engineering and Graphic Design, I bring a strong design sensibility to
          the websites and applications I create.
        </p>
        <img src={Photo} id="my-photo" />
      </div>
    </div>
  );
}
export default About;
