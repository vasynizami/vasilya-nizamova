import React from "react";
import Logo from '../img/my-logo.png';

function Title() {
  return (
    <div className="title">
      <div className="intro">
        <img src={Logo} alt="logo"/>
        <p>vasilya nizamova | full-stack developer</p>
      </div>
    </div>
  );
}
export default Title;
