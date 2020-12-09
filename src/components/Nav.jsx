import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav({ id }) {

  //regular Link attr didn't work to scroll back up to Title component, so i used .scrollToTop
  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  return (
    <div id={id} className="nav">
      {/* here we need a separate div to make the fixed .nav centered*/}
      <div className="links">
        <Link onClick={scrollToTop}>home</Link>
        <Link to="about" spy={true} smooth={true} offset={20} duration={900}>
          about
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
        <a
          href="https://drive.google.com/file/d/1FF-uj0Gaztc9YYNMvs1uLSG35sqHNh3B/view?usp=sharing"
          target="_blank"
        >
          resume
        </a>
        <a href="http://www.linkedin.com/in/vasilya-nizamova" target="_blank">
          linkedin
        </a>
        <a href="https://github.com/vasynizami" target="_blank">
          github
        </a>
        <a
          href="mailto:vasilya.nizami@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          e-mail
        </a>
      </div>
    </div>
  );
}

export default Nav;
