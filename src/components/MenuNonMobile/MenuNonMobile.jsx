import React from 'react';
import './menunonmobile.styles.scss';
import './menunonmobile.responsive.scss';

function MenuNonMobile(props) {
  let activeStyle = {color: "#595959",fontSize: "0.9rem"};

  return (
    <div className="menu-non-mobile">
      <a href="#top" className="menu-option" style={props.activeSection==="top" ? activeStyle :{}}>Top</a>
      <a href="#about-me" className="menu-option" style={props.activeSection==="about-me" ? activeStyle :{}}>About me</a>
      <a href="#my-tools" className="menu-option" style={props.activeSection==="my-tools" ? activeStyle :{}}>My tools</a>
      <a href="#my-work" className="menu-option" style={props.activeSection==="my-work" ? activeStyle :{}}>My work</a>
      <a href="#credentials" className="menu-option" style={props.activeSection==="credentials" ? activeStyle :{}}>Credentials</a>
      <a href="#contact" className="menu-option" style={props.activeSection==="contact" ? activeStyle :{}}>Contact</a>
    </div>
  );
}

export default MenuNonMobile;
