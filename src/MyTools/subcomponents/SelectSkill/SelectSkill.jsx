import React from "react";
import './selectskill.styles.scss';
import './selectskill.responsive.scss';
import '../../mytools.icons.scss';

function SelectSkill(props) {
  return (
    <div onClick={() => props.handleClick(props.index)} className="select-skill-container">
      <div
        className={`select-skill ${props.class}`}
        style={props.active ? {filter:"grayscale(0)"} : {}}
      />
      <div className="skill-name">{props.active && props.name}</div>
    </div>
  );
}

export default SelectSkill;
