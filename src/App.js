import React,{ useEffect } from 'react';
import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
import MyTools from './MyTools/MyTools';
import MenuNonMobile from './components/MenuNonMobile/MenuNonMobile';
import MenuButton from './components/MenuButton/MenuButton';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import './main.styles.scss';
import './main.responsive.scss';
import { getScreenHeight,resizeThrottler } from './functions'

function App() {
  useEffect(() => {
    getScreenHeight();
    window.addEventListener("resize", resizeThrottler, false);
    return function cleanUp() {
      window.removeEventListener("resize", resizeThrottler, false);
    }
  });

  return (
    <Provider store={store}>
      <div className="App">
        <MenuButton />
        <MenuNonMobile />
        <Top />
        <AboutMe />
        <MyTools />
      </div>
    </Provider>
  );
}

export default App;
