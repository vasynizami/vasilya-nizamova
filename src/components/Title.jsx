import React, { useState, useRef } from "react";
import Logo from "../img/my-logo.png";
import { useOnClickOutside } from "../hooks";
import DropDownLogo from "../components/DropDownLogo";
import DropDownNav from "../components/DropDownNav";

function Title() {
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="title">
      <div ref={node}>
        <DropDownLogo open={open} setOpen={setOpen}/>
        <DropDownNav open={open}/>
      </div>
      <div className="intro">
        <img src={Logo} alt="logo" id="logo" />
        <p>vasilya nizamova | software engineer</p>
      </div>
    </div>
  );
}
export default Title;
