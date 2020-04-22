import React from 'react';
import './loadingscreen.styles.scss';

function LoadingScreen(props) {
  return (
    <div className={`loading-screen ${props.dark && "invert"}`}>
      <div className="loading-ball" />
    </div>
  );
}

export default LoadingScreen;
