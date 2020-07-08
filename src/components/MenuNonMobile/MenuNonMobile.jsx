import React from 'react';
import './menunonmobile.styles.scss';
import './menunonmobile.responsive.scss';

function MenuNonMobile(props) {
  let activeStyle = {color: "#595959",fontSize: "0.9rem"};

  return (
    <div className={`menu-non-mobile ${props.dark && "invert"}`}>
      {
        props.menuItems.map( (item) => {
          return <a href={`#${item.id}`} key={item.id} className="menu-option" style={props.activeSection===item.id ? activeStyle :{}}>{item.name}</a>;
        })
      }
    </div>
  );
}

export default MenuNonMobile;
