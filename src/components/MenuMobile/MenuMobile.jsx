import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import './menumobile.styles.scss';
import './menumobile.responsive.scss';

function MenuMobile(props) {
  let activeStyle = {color: "#595959",fontSize: "2.3rem"};

  return (
    <div className={`menu-mobile ${props.dark && "invert"} ${props.visible && "show-menu"}`}>
      <div onClick={props.toggleMenu} className="close-menu">&times;</div>
      <div className={`dark-mode-toggle-mobile ${props.dark && "invert"}`}>
        <DarkModeToggle
        onChange={props.toggleTheme}
        checked={props.dark}
        size={60}
        />
      </div>
      {
        props.menuItems.map( (item) => {
          return <a href={`#${item.id}`} key={item.id} onClick={props.toggleMenu} className="menu-option" style={props.activeSection===item.id ? activeStyle :{}}>{item.name}</a>;
        })
      }
    </div>
  );
}

export default MenuMobile;
