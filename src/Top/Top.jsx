import React, { useState,useEffect } from 'react';
import './top.styles.scss';
import './top.responsive.scss';

function Top(props) {

  let [isSunAnimate, setIsSunAnimate] = useState(false);

  useEffect(() => {
    setIsSunAnimate(true);
  },[props.dark]);

  return (
    <div className={`top-section section ${props.dark && "night-sky"}`} id="top">
      <div className="top-additional-images" />
      <div className={`light-source ${props.dark && "moon"} ${isSunAnimate && "animate-sunset"}`} onAnimationEnd={() => setIsSunAnimate(false)}/>
      <div className="speech-container">
        <div className="speech-bubble" />
        <div className={`balloon ${props.dark && "night-colors"}`} />
      </div>
      <div className="glob-container">
        <div className={`globe ${props.dark && "night-colors"}`} />
      </div>
      <div className={`${!props.dark && "hide-planet"} new-planet planet-1`} />
      <div className={`${!props.dark && "hide-planet"} new-planet planet-2`} />
      <div className={`${props.dark && "shooting-star"}`} />
      <div className={`seamless-clouds ${props.dark && "invert"}`} />
    </div>
  );
}

export default Top;
