import React,{ useState } from 'react';
import './mytools.styles.scss';
import './mytools.responsive.scss';
import './mytools.icons.scss';
import Heading from '../components/Heading/Heading';
import Level from './subcomponents/Level/Level'
import SelectSkill from './subcomponents/SelectSkill/SelectSkill'

let skillsArr = [
  {
    name: "ReactJS",
    desc: "",
    class: "react-logo",
    level: 4.0,
    for: "Frontend development"
  },
  {
    name: "HTML/CSS/JS",
    desc: "",
    class: "js-logo",
    level: 4.5,
    for: "Frontend development"
  },
  {
    name: "ReduxJS",
    desc: "",
    class: "redux-logo",
    level: "4.0",
    for: "State management"
  },
  {
    name: "NodeJS",
    desc: "",
    class: "node-logo",
    level: 3.5,
    for: "Backend development"
  },
  {
    name: "MongoDB",
    desc: "",
    class: "mongo-logo",
    level: 3.5,
    for: "Database management"
  },
  {
    name: "ExpressJS",
    desc: "",
    class: "express-logo",
    level: 3.5,
    for: "Backend development"
  },
  {
    name: "Figma",
    desc: "",
    class: "figma-logo",
    level: "4.5",
    for: "Illustrations/Prototypes"
  },
  {
    name: "Adobe XD",
    desc: "",
    class: "xd-logo",
    level: "4.0",
    for: "Prototypes"
  },
];

function MyTools() {

  let [currentSkill,setCurrentSkill] = useState(0);

  function handleClick(value) {
    setCurrentSkill(value);
  }

  return (
    <div className="my-tools-container">
      <div className="my-tools-section" id="my-tools">
        <Heading text="My tools" />
        <div className="display-container">
          <div className={`tool-logo-lg ${skillsArr[currentSkill].class}`} />
          <div className="tool-desc-container">
            <div className="tool-name">{skillsArr[currentSkill].name}</div>
            <div className="tool-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="details-container">
              <div className="used-for">For : <span className="for">{skillsArr[currentSkill].for}</span></div>
              <div className="skill-level">Level : &nbsp;<span className="level"><Level lev={skillsArr[currentSkill].level}/></span></div>
            </div>
          </div>
        </div>
        <div className="selector-container">
          {
            skillsArr.map( (skill,index) => {
              return (
                <SelectSkill
                  key={index}
                  index={index}
                  handleClick={handleClick}
                  name={skill.name}
                  class={skill.class}
                  active={currentSkill===index ? true : false}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default MyTools;
