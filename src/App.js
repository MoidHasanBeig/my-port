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
const MenuMobile = React.lazy(() => import('./components/MenuMobile/MenuMobile'));
const MenuButton = React.lazy(() => import('./components/MenuButton/MenuButton'));
const Notification = React.lazy(() => import('./components/Notification/Notification'));
const DarkModeToggle = React.lazy(() => import('react-dark-mode-toggle'));

function App() {

  let [activeSection,setActiveSection] = useState("top");
  let [notification,setNotification] = useState(false);
  let [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("theme")) || false);
  let [isMobileMenu,setIsMobileMenu] = useState(false);

  let menuItems = [
    {name:'Top', id:'top'},
    {name:'About me', id:'about-me'},
    {name:'My tools', id:'my-tools'},
    {name:'My work', id:'my-work'},
    {name:'Credentials', id:'credentials'},
    {name:'Contact', id:'contact'}
  ];

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

  function newNotification(message) {
    setNotification(message);
  }

  function toggleMenu() {
    setIsMobileMenu(prevValue => !prevValue);
  }

  function toggleTheme() {
    setIsDark(prevValue => !prevValue);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollThrottler, false);
    return function cleanUp() {
      window.removeEventListener("scroll", scrollThrottler, false);
    }
  });

  useEffect(() => {
    localStorage.setItem("theme",isDark);
  },[isDark]);

  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen dark={isDark} />}>
        <div className={`landscape-small ${isDark && "invert"}`}>
          <p>Please switch to portrait mode</p>
        </div>
        <MenuButton toggleMenu={toggleMenu} />
        <MenuNonMobile
          menuItems={menuItems}
          activeSection={activeSection}
          dark={isDark}
        />
        <MenuMobile
          menuItems={menuItems}
          activeSection={activeSection}
          dark={isDark}
          visible={isMobileMenu}
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme}
        />
        <div className="dark-mode-toggle">
          <DarkModeToggle
          onChange={setIsDark}
          checked={isDark}
          size={50}
          />
        </div>
        <Notification text={notification} dNone={!notification && "d-none"} newNotification={(message) => newNotification(message)} />
        <Top dark={isDark} />
        <div className={`theme-container ${isDark && "invert"}`}>
          <AboutMe dark={isDark} />
          <MyTools dark={isDark} />
          <MyWork dark={isDark} />
          <Credentials dark={isDark} />
          <Contact dark={isDark} newNotification={(message) => newNotification(message)} />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
