import React from 'react';
import './loadingscreen.styles.scss';
import './loadingscreen.responsive.scss';

function LoadingScreen(props) {
  return (
    <div className="loading-screen">{props.text}</div>
  );
}

export default LoadingScreen;
