import React,{ useState } from 'react';
import './mytools.styles.scss';
import './mytools.responsive.scss';
import './mytools.icons.scss';
import Heading from '../components/Heading/Heading';
import FooterQuote from '../components/FooterQuote/FooterQuote';
import Level from './subcomponents/Level/Level'
import SelectSkill from './subcomponents/SelectSkill/SelectSkill'
import Fade from 'react-reveal/Fade';

let skillsArr = [
  {
    name: "ReactJS",
    desc: "",
    class: "react-logo",
    level: 4.0,
    for: "Frontend development"
  },
  {
    name: "HTML/ CSS/ JS",
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
    for: "Illustrations/ Prototypes"
  },
  {
    name: "Adobe XD",
    desc: "",
    class: "xd-logo",
    level: "4.0",
    for: "Prototypes"
  },
];

function MyTools(props) {

  let [currentSkill,setCurrentSkill] = useState(0);

  function handleClick(value) {
    setCurrentSkill(value);
  }

  return (
    <div className={`my-tools-container ${props.dark && "invert"}`}>
      <div className="my-tools-section section" id="my-tools">
        <Heading text="My tools" />
          <div className="display-container">
            <Fade bottom>
              <div className={`tool-logo-lg ${skillsArr[currentSkill].class} ${props.dark && "invert"}`} />
              <div className="tool-desc-container">
                <div className="tool-name">{skillsArr[currentSkill].name}</div>
                <div className="tool-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className="details-container">
                  <div className="used-for">For : <span className="for">{skillsArr[currentSkill].for}</span></div>
                  <div className="skill-level">Level : &nbsp;<span className="level"><Level lev={skillsArr[currentSkill].level}/></span></div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
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
                      dark={props.dark}
                    />
                  );
                })
              }
            </div>
          </Fade>
      </div>
      <FooterQuote text="&quot;All limitations are self-imposed.&quot; – Oliver Wendell Holmes" />
    </div>
  );
}

export default MyTools;
