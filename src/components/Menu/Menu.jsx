import React,{ useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import './menu.styles.scss';
import './menu.responsive.scss';

function Menu(props) {
  let [activeSection,setActiveSection] = useState("top");
  let [isMobileMenu,setIsMobileMenu] = useState(false);
  
  let activeStyle = {color: "#595959",fontSize: isMobileMenu ? "2.3rem" : "0.9rem"};

  var scrollTimeout;
  function scrollThrottler() {
    if ( !scrollTimeout ) {
      scrollTimeout = setTimeout(function() {
        scrollTimeout = null;
        checkActiveSection();
       }, 66);
    }
  }

  function checkActiveSection() {
    let sectionList = document.getElementsByClassName("section");
    let sectionArr = Array.from(sectionList);
    sectionArr.forEach( (section) => {
      let activeId = isInViewport(section);
      if (activeId && activeId!==activeSection) {
        setActiveSection(activeId);
      }
    });
  }

  let isInViewport = function (elem) {
      let bounding = elem.getBoundingClientRect();
      let screenHeight = window.innerHeight || document.documentElement.clientHeight;
      if ( bounding.top > -300 && bounding.top*2 <= (screenHeight)) {
        return elem.id;
      }
      else {
        return false;
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollThrottler, false);
    return function cleanUp() {
      window.removeEventListener("scroll", scrollThrottler, false);
    }
  });

  return (
    <>
      <div className={`menu-non-mobile ${props.dark && "invert"}`}>
        {
          props.menuItems.map( (item) => {
            return <a href={`#${item.id}`} key={item.id} className="menu-option" style={activeSection===item.id ? activeStyle :{}}>{item.name}</a>;
          })
        }
      </div>
      <div onClick={() => setIsMobileMenu(prevValue => !prevValue)} className="menu-button" />
      <div className={`menu-mobile ${props.dark && "invert"} ${isMobileMenu && "show-menu"}`}>
        <div onClick={() => setIsMobileMenu(prevValue => !prevValue)} className="close-menu">&times;</div>
        <div className={`dark-mode-toggle-mobile ${props.dark && "invert"}`}>
          <DarkModeToggle
          onChange={props.toggleTheme}
          checked={props.dark}
          size={60}
          />
        </div>
        {
          props.menuItems.map( (item) => {
            return <a href={`#${item.id}`} key={item.id} onClick={props.toggleMenu} className="menu-option" style={activeSection===item.id ? activeStyle :{}}>{item.name}</a>;
          })
        }
      </div>
    </>
  );
}

export default Menu;
