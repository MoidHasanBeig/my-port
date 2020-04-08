import React from 'react';
import './toolused.styles.scss';
import './toolused.responsive.scss';

function ToolUsed(props) {
  return (
    <span className="tool-name-component">{props.text}</span>
  );
}

export default ToolUsed;
