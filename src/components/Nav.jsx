import React from "react";
import { Link } from "react-scroll";

function Nav({ id }) {
  return (
    <div id={id} className="nav">
      {/* here we need a separate div to make the fixed .nav centered*/}
      <div className="links">
      <Link
          to="title"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          home
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={20}
          duration={900}
        >
          work
        </Link>
        <a href="https://docdro.id/jpzcvsT" target="_blank">
          resume
        </a>
        <a href="http://www.linkedin.com/in/vasilya-nizamova" target="_blank">
          linkedin
        </a>
        <a href="https://github.com/vasynizami" target="_blank">
          github
        </a>
        <a href="mailto:victoriartz89@gmail.com" target="_blank" rel="noopener noreferrer">e-mail</a>
      </div>
    </div>
  );
}

export default Nav;
