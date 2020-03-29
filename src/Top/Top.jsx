import React,{ useState } from 'react';
import './top.styles.scss';
import './top.responsive.scss';


function Top() {

  return (
    <div className="top-section">
      <div className="light-source" />
      <div className="cloud-1" />
      <div className="cloud-2" />
      <div className="speech-container">
        <div className="speech-bubble" />
        <div className="balloon" />
      </div>
      <div className="globe-container">
        <div className="globe" />
      </div>
    </div>
  );
}

export default Top;
