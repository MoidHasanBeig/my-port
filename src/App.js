import React,{ useEffect } from 'react';
import Top from './Top/Top';
import AboutMe from './AboutMe/AboutMe';
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
        <Top />
        <AboutMe />
      </div>
    </Provider>
  );
}

export default App;
