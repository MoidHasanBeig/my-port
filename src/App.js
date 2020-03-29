import React,{ useEffect } from 'react';
import Top from './Top/Top';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import './main.styles.scss';
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
        <Top />
      </div>
    </Provider>
  );
}

export default App;
