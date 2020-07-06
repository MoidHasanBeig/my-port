import React,{ useEffect,useState,Suspense } from 'react';
import './main.styles.scss';
import './main.responsive.scss';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Top = React.lazy(() => import('./Top/Top'));
const AboutMe = React.lazy(() => import('./AboutMe/AboutMe'));
const MyTools = React.lazy(() => import('./MyTools/MyTools'));
const MyWork = React.lazy(() => import('./MyWork/MyWork'));
const Credentials = React.lazy(() => import('./Credentials/Credentials'));
const Contact = React.lazy(() => import('./Contact/Contact'));
const MenuNonMobile = React.lazy(() => import('./components/MenuNonMobile/MenuNonMobile'));
const MenuButton = React.lazy(() => import('./components/MenuButton/MenuButton'));
const ToggleTheme = React.lazy(() => import('./components/ToggleTheme/ToggleTheme'));
const DarkModeToggle = React.lazy(() => import('react-dark-mode-toggle'));

function App() {

  let [activeSection,setActiveSection] = useState("top");
  let [isDark,setIsDark] = useState(false);

  // function getScreenHeight() {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // }

  // var resizeTimeout;
  // function resizeThrottler() {
  //   // ignore resize events as long as an actualResizeHandler execution is in the queue
  //   if ( !resizeTimeout ) {
  //     resizeTimeout = setTimeout(function() {
  //       resizeTimeout = null;
  //       getScreenHeight();
  //      // The actualResizeHandler will execute at a rate of 15fps
  //      }, 66);
  //   }
  // }

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

  function darkMode() {
    setIsDark(prevValue => !prevValue);
  }

  useEffect(() => {
    // getScreenHeight();
    // window.addEventListener("orientationchange", resizeThrottler, false);
    window.addEventListener("scroll", scrollThrottler, false);
    return function cleanUp() {
      // window.removeEventListener("orientationchange", resizeThrottler, false);
      window.removeEventListener("scroll", scrollThrottler, false);
    }
  });

  useEffect(() => {
    localStorage.setItem("theme",isDark);
  },[isDark]);

  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen dark={isDark} />}>
        <MenuButton />
        <MenuNonMobile activeSection={activeSection} dark={isDark} />
        <div className="dark-mode-toggle">
          <DarkModeToggle
          onChange={setIsDark}
          checked={isDark}
          size={60}
          />
        </div>
        <Top dark={isDark} />
        <div className={`mode-toggle-container ${isDark && "invert"}`}>
          <AboutMe dark={isDark} />
          <MyTools dark={isDark} />
          <MyWork dark={isDark} />
          <Credentials dark={isDark} />
          <Contact dark={isDark} />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
