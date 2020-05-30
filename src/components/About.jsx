import React from "react";
// import HtmlLogo from "../img/logo-html5.svg";
// import CssLogo from "../img/logo-css3.svg";
// // import BootstrapLogo from "../img/bootstrap.svg";
// import JSLogo from "../img/logo-js.svg";
// import JQLogo from "../img/jquery.svg";
// import GitLogo from "../img/git1.svg";
// import NodeJSLogo from "../img/logo-nodejs.svg";
// import ReactLogo from "../img/logo-react.svg";
// import RubyLogo from "../img/ruby.svg";
// import PostgresLogo from "../img/postgresql.svg";
// import RailsLogo from "../img/rail.svg";
// import MongoLogo from "../img/leaf-outline.svg";
import Photo from "../img/me8.jpg";

function About() {
  return (
    <div className="about">
      <div className="bio">
        <h2>Hello!</h2>
        <p>
          My name is Vasilya and I am a NYC-based full-stack developer with a
          knack for visual aesthetics. I focus on writing clean, elegant and
          efficient code.
        </p>
        <img id="photo" src={Photo}></img>
      </div>
      <div className="technologies">
        <div className="parallelogram">
          <p>HTML</p>
        </div>
      </div>
    </div>
  );
}
export default About;

// <div className="logos">
{
  /* <img src={HtmlLogo} />
<img src={CssLogo} />
<img src={JSLogo} />
<img src={JQLogo} />
<img src={GitLogo}/>
<img src={NodeJSLogo} />
<img src={ReactLogo} />
<img src={RubyLogo} />
<img src={PostgresLogo} />
<img src={RailsLogo} />
<img src={MongoLogo} />
</div> */
}
