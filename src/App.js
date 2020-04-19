import React,{ useEffect,useState } from 'react';
import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import MyTools from './MyTools/MyTools';
import MyWork from './MyWork/MyWork';
import MenuNonMobile from './components/MenuNonMobile/MenuNonMobile';
import MenuButton from './components/MenuButton/MenuButton';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import store from './redux/reduxStore'
import './main.styles.scss';
import './main.responsive.scss';

function App() {

  let [activeSection,setActiveSection] = useState("top");
  let [isDark,setIsDark] = useState(false);

  function getScreenHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();
       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
  }

  function actualResizeHandler() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

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
      if ( bounding.top > -300 && bounding.bottom*0.6 <= (screenHeight)) {
        return elem.id;
      }
      else {
        return false;
      }
  };

  function darkMode() {
    setIsDark(prevValue => !prevValue);
  }

  useEffect(() => {
    getScreenHeight();
    window.addEventListener("resize", resizeThrottler, false);
    window.addEventListener("scroll", scrollThrottler, false);
    return function cleanUp() {
      window.removeEventListener("resize", resizeThrottler, false);
      window.removeEventListener("scroll", scrollThrottler, false);
    }
  });

  return (
    <div className="App">
      <MenuButton />
      <MenuNonMobile activeSection={activeSection} dark={isDark} />
      <ToggleTheme darkMode={darkMode} dark={isDark} />
      <Top dark={isDark} />
      <AboutMe dark={isDark} />
      <MyTools dark={isDark} />
      <MyWork dark={isDark} />
    </div>
  );
}

export default App;
