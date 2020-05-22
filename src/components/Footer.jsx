import React from 'react';
import GitHub from '../img/github.png';
import LinkedIn from '../img/linkedin.png';

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={GitHub}/>
        <img src={LinkedIn} />
      </div>
      <p>&copy;2020 Vasilya Nizamova</p>
    </div>
  )
}

export default Footer;