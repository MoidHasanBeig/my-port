import React from 'react';
import './toggletheme.styles.scss';
import './toggletheme.responsive.scss';

function ToggleTheme(props) {

  function handleClick() {
    props.darkMode();
  }

  return <div onClick={handleClick} className={`toggle-theme ${props.dark && "dark-mode"}`} />;
}

export default ToggleTheme;
