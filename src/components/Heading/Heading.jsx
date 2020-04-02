import React from 'react';
import './heading.styles.scss';
import './heading.responsive.scss';

function Heading(props) {
  return (
    <div className="heading-general">{props.text}</div>
  );
}

export default Heading;
