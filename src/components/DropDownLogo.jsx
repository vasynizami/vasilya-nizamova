import React from 'react';
import Logo from '../img/my-logo.png';


const DropDownLogo = ({ open, setOpen }) => {
  return (
    <div className="nav-toggle">
      <img open={open} onClick={() => setOpen(!open)} src={Logo} />
      <p>vasilya nizamova | software engineer</p>
    </div>
  );
}

export default DropDownLogo;