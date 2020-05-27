import React from "react";
import GitHub from "../img/github.png";
import LinkedIn from "../img/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/vasynizami" target="_blank">
          <img src={GitHub} />
        </a>
        <a href="https://www.linkedin.com/in/vasilya-nizamova/" target="_blank">
          <img src={LinkedIn} />
        </a>
      </div>
      <p>&copy;2020 Vasilya Nizamova</p>
    </div>
  );
}

export default Footer;
