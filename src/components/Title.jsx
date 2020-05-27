import React from "react";
import Hero from "../img/Hero.jpg";
import { Link } from "react-scroll";

function Title({ id }) {
  return (
    <div
      className="title"
      style={{
        backgroundImage: "url(" + Hero + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div id={id}>
        <h1>Vasilya Nizamova</h1>
        <p>full-stack developer</p>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-10}
          duration={900}
        >
          View my work
        </Link>
      </div>
    </div>
  );
}
export default Title;
