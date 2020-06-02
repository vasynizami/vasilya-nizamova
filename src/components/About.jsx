import React from "react";
import Photo from "../img/me.jpg";

function About() {
  return (
    <div className="about">
        <img id="photo" src={Photo}></img>
      <div className="bio">
        <p>
          I'm Vasilya Nizamova, a NYC-based full-stack developer with a
          knack for visual aesthetics. I focus on writing a clean, elegant, and
          efficient code.
        </p>
        <h4>
          Technologies I use: 
        </h4>
        <p>
          HTML, CSS, Bootstrap, JavaScript, React, NodeJS, MongoDB, Express JS, Mongoose, PostgreSQL, Ruby, Ruby on Rails
        </p>
      </div>
      {/* <div className="technologies">
        <div className="parallelogram">
          <p>HTML</p>
        </div>
      </div> */}
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
