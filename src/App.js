import React,{ useEffect,useState } from 'react';
import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import MyTools from './MyTools/MyTools';
import MenuNonMobile from './components/MenuNonMobile/MenuNonMobile';
import MenuButton from './components/MenuButton/MenuButton';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import './main.styles.scss';
import './main.responsive.scss';

function App() {

  let [activeSection,setActiveSection] = useState("top");
  let [loadingState,setLoadingState] = useState(true);
  console.log(loadingState,"App");

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

  function handleLoading() {
    setLoadingState(false);
    console.log(loadingState,"handle");
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

  useEffect(() => {
    getScreenHeight();
    window.addEventListener("load", handleLoading, false);
    window.addEventListener("resize", resizeThrottler, false);
    window.addEventListener("scroll", scrollThrottler, false);
    return function cleanUp() {
      window.removeEventListener("resize", resizeThrottler, false);
      window.removeEventListener("scroll", scrollThrottler, false);
      window.removeEventListener("load", handleLoading, false);
    }
  },[loadingState]);

  return (
    <Provider store={store}>
      <div className="App">
        {loadingState && <LoadingScreen text={loadingState} />}
        <MenuButton />
        <MenuNonMobile activeSection={activeSection} />
        <ToggleTheme />
        <Top />
        <AboutMe />
        <MyTools />
      </div>
    </Provider>
  );
}

export default App;
