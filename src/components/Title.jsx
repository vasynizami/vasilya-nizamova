import React from "react";
import Hero from "../img/Hero.jpg";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div className="title"
      style={{
        backgroundImage: "url(" + Hero + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1>Vasilya Nizamova</h1>
        <p>full-stack developer</p>
        <Link to="#">View my work</Link>
      </div>
    </div>
  );
}
export default Title;
