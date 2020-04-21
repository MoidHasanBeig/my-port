import React from 'react';
import './top.styles.scss';
import './top.responsive.scss';

function Top(props) {

  return (
    <div className={`top-section section ${props.dark && "night-sky"}`} id="top">
      <div className="top-additional-images" />
      <div className={`light-source ${props.dark && "moon"}`} />
      <div className={`cloud-1 ${props.dark && "slide-left"}`} />
      <div className={`cloud-2 ${props.dark && "slide-right"}`} />
      <div className="speech-container">
        <div className="speech-bubble" />
        <div className={`balloon ${props.dark && "night-colors"}`} />
      </div>
      <div className="glob-container">
        <div className={`globe ${props.dark && "night-colors"}`} />
      </div>
      <div className={`seamless-clouds ${props.dark && "invert"}`} />
    </div>
  );
}

export default Top;
