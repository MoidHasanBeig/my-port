import React from 'react';
import './menunonmobile.styles.scss';
import './menunonmobile.responsive.scss';

function MenuNonMobile() {
  return (
    <div className="menu-non-mobile">
      <a href="#top" className="menu-option">Top</a>
      <a href="#about-me" className="menu-option">About me</a>
      <a href="#my-tools" className="menu-option">My tools</a>
      <a href="#top" className="menu-option">My work</a>
      <a href="#top" className="menu-option">Credentials</a>
      <a href="#top" className="menu-option">Contact</a>
    </div>
  );
}

export default MenuNonMobile;
