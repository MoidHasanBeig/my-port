import React from 'react';
import './menubutton.styles.scss';
import './menubutton.responsive.scss';

function MenuButton(props) {
  return <div onClick={props.toggleMenu} className="menu-button" />
}

export default MenuButton;
