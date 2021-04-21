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
    desc: "From webpages to SPAs to android apps, ReactJS got it all. The declarative component-based approach makes debugging a child's play.",
    class: "react-logo",
    level: 4.0,
    for: "Frontend development"
  },
  {
    name: "NodeJS",
    desc: "Running on the V8 engine, NodeJS took JavaScript to the server side. World's largest software library, NPM, gives it unmatchable capabilities.",
    class: "node-logo",
    level: 3.5,
    for: "Backend development"
  },
  {
    name: "ExpressJS",
    desc: "Built atop NodeJS, ExpressJS really simplifies complex operations like routing, handling requests and connecting to a database by using various packages.",
    class: "express-logo",
    level: 4.0,
    for: "Backend development"
  },
  {
    name: "MongoDB",
    desc: "Need for handling large unstructrured data with speed calls for MongoDB. With its flexible schemas, scalability becomes really easy.",
    class: "mongo-logo",
    level: 3.5,
    for: "Database management"
  },
  {
    name: "ReduxJS",
    desc: "Features like state persistence, state predictability, time-travel debugging and more, makes ReduxJS a great companion for ReactJS.",
    class: "redux-logo",
    level: "4.0",
    for: "State management"
  },
  {
    name: "HTML/ CSS/ JS",
    desc: "The base foundation of majority web-frameworks, this trio rules the client side of web applications, with or without frameworks.",
    class: "js-logo",
    level: 4.5,
    for: "Frontend development"
  },
  {
    name: "Python",
    desc: "Easy to read syntax, versitality, efficiency, speed and unending libraries and frameworks makes Python a must know for all developers as a general purpose language.",
    class: "python-logo",
    level: "3.5",
    for: "Backend development"
  },
  {
    name: "Figma",
    desc: "With the ability to make illustrations, wireframes and prototypes, topped with real-time collaboration, Figma is all I need when it comes to design.",
    class: "figma-logo",
    level: "4.5",
    for: "Illustrations/ Prototypes"
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
                    key={new Date().getTime() + index}
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
          <div className="scroll-left-placeholder">&lt;&lt; Scroll left</div>
        </div>
      </div>
    </div>
  );
}

export default MyTools;
