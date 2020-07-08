import React,{ useState,useEffect } from 'react';
import './notification.styles.scss';
import './notification.responsive.scss';

function Notification(props) {

  let [animateNotify,setAnimateNotify] = useState(false);

useEffect(() => {
  setAnimateNotify(true)
},[props.text]);

  return (
    <div className={`floating-notification ${props.dNone} ${animateNotify && "animate-notification"}`} onAnimationEnd={() => {setAnimateNotify(false); props.newNotification(false);}}>{props.text}</div>
  );

}

export default Notification;
