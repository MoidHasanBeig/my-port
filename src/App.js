import React,{ useEffect,useState,Suspense } from 'react';
import './main.styles.scss';
import './main.responsive.scss';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import MyTools from './MyTools/MyTools';
import MyWork from './MyWork/MyWork';
import Credentials from './Credentials/Credentials';
import Contact from './Contact/Contact';
import Menu from './components/Menu/Menu';
import Notification from './components/Notification/Notification';
import DarkModeToggle from 'react-dark-mode-toggle';

function App() {

  let [isLoading,setIsLoading] = useState(true);
  let [notification,setNotification] = useState(false);
  let [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("theme")) || false);

  let menuItems = [
    {name:'Top', id:'top'},
    {name:'About me', id:'about-me'},
    {name:'My tools', id:'my-tools'},
    {name:'My work', id:'my-work'},
    {name:'Credentials', id:'credentials'},
    {name:'Contact', id:'contact'}
  ];

  function newNotification(message) {
    setNotification(message);
  }

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("theme",isDark);
  },[isDark]);

  return (
    <div className="App">
      {isLoading && <LoadingScreen dark={isDark} />}
      <Suspense fallback={<LoadingScreen dark={isDark} />}>
        <div className={`landscape-small ${isDark && "invert"}`}>
          <p>Please switch to portrait mode</p>
        </div>
        <Menu
          menuItems={menuItems}
          dark={isDark}
          toggleTheme={setIsDark}
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
