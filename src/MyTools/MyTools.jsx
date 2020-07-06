import React,{ useState } from 'react';
import './mytools.styles.scss';
import './mytools.responsive.scss';
import './mytools.icons.scss';
import Heading from '../components/Heading/Heading';
import FooterQuote from '../components/FooterQuote/FooterQuote';
import Level from './subcomponents/Level/Level'
import SelectSkill from './subcomponents/SelectSkill/SelectSkill'

let skillsArr = [
  {
    name: "ReactJS",
    desc: "In a parallel universe where Honda Cars run on JavaScript, a Porsche would be running on ReactJS. It makes everything faster.",
    class: "react-logo",
    level: 4.0,
    for: "Frontend development"
  },
  {
    name: "HTML/ CSS/ JS",
    desc: "HTML, JS & CSS are like the old but mighty & wise. You’re not a good developer if you don’t respect them. Eh... CSS maybe not so much.",
    class: "js-logo",
    level: 4.5,
    for: "Frontend development"
  },
  {
    name: "ReduxJS",
    desc: "Imagine solving an extremely complex maths problem without a calculator. That’s developing a React app without Redux.",
    class: "redux-logo",
    level: "4.0",
    for: "State management"
  },
  {
    name: "NodeJS",
    desc: "NodeJS is the rebellious offspring of JavaScript who refused to work with browsers and set out to rule the ‘Server’ reign.",
    class: "node-logo",
    level: 3.5,
    for: "Backend development"
  },
  {
    name: "MongoDB",
    desc: "To have your way with MongoDB, you’ve got to ask the right questions. This fellow knows everything about your users.",
    class: "mongo-logo",
    level: 3.5,
    for: "Database management"
  },
  {
    name: "ExpressJS",
    desc: "Well, NodeJS can do A LOT!! More than you can handle alone. ExpressJS to the rescue! It's a mediator between Node and yourself.",
    class: "express-logo",
    level: 3.5,
    for: "Backend development"
  },
  {
    name: "Figma",
    desc: "When it comes to design, Figma is a one-man army. Illustrations, wireframes, prototypes, anything. That too on the cloud!",
    class: "figma-logo",
    level: "4.5",
    for: "Illustrations/ Prototypes"
  },
  {
    name: "Adobe XD",
    desc: "AdobeXD is a lifelong rival to Figma. Can do things similar to Figma but comes as a bulky desktop application.",
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
    <div className="my-tools-container">
      <div className="my-tools-section section" id="my-tools">
        <Heading text="My tools" />
        <div className="display-container">
          <div className="sub-container-1">
            <div className={`tool-logo-lg ${skillsArr[currentSkill].class} ${props.dark && "invert"}`} />
            <div className="tool-desc-container">
              <div className="tool-name">{skillsArr[currentSkill].name}</div>
              <div className="tool-desc">{skillsArr[currentSkill].desc}</div>
              <div className="details-container">
                <div className="used-for">For : <span className="for">{skillsArr[currentSkill].for}</span></div>
                <div className="skill-level">Level : &nbsp;<span className="level"><Level lev={skillsArr[currentSkill].level}/></span></div>
              </div>
            </div>
          </div>
          <div className="sub-container-2">
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
        </div>
      </div>
      <FooterQuote text="&quot;All limitations are self-imposed.&quot; – Oliver Wendell Holmes" />
    </div>
  );
}

export default MyTools;
