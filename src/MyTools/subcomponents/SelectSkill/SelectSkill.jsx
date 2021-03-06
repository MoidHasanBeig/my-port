import React from "react";
import './selectskill.styles.scss';
import './selectskill.responsive.scss';
import '../../mytools.icons.scss';

function SelectSkill(props) {
  return (
    <div onClick={() => props.handleClick(props.index)} className={`select-skill-container ${props.dark && "invert"}`}>
      <div
        className={`select-skill ${props.class}`}
        style={props.active ? {filter:"grayscale(0)",opacity:1} : {}}
      />
      <div className="skill-name">{props.active && props.name}</div>
    </div>
  );
}

export default SelectSkill;
