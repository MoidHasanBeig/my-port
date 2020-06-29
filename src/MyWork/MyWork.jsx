import React,{ useState } from 'react';
import './mywork.styles.scss';
import './mywork.responsive.scss';
import './mywork.images.scss';
import Heading from '../components/Heading/Heading';
import ToolUsed from './subcomponents/ToolUsed/ToolUsed';
import DisplayWork from './subcomponents/DisplayWork/DisplayWork';

let workArr = [
  {
    name:'Klipmunk',
    desktopImg:'klipmunk-lg',
    tabletImg:'klipmunk-md',
    mobileImg:'klipmunk-sm',
    tools:['HTML/CSS/JS','NodeJS','ExpressJS','Figma'],
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link:'https://klipmunk.com/',
    git:false
  },
  {
    name:'Speedklip',
    desktopImg:'speedklip-lg',
    tabletImg:'speedklip-md',
    mobileImg:'speedklip-sm',
    tools:['HTML/CSS/JS','Figma'],
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link:'https://klipmunk.com/speedklip',
    git:false
  },
  {
    name:'Mindly',
    desktopImg:'klipmunk-lg',
    tabletImg:'klipmunk-md',
    mobileImg:'klipmunk-sm',
    tools:['React-native','Redux'],
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link:false,
    git:'https://github.com/MoidHasanBeig/mindly-copy-reactApp'
  },
];

function MyWork(props) {

  let [currentWork,setCurrentWork] = useState(0);

  function handleClick(type) {
    if(type === 'next') {
      if(currentWork === workArr.length-1) {
        setCurrentWork(0);
      }
      else {
        setCurrentWork( prevValue => prevValue+1);
      }
    }
    else if(type === 'prev') {
      if(currentWork === 0) {
        setCurrentWork(workArr.length-1);
      }
      else {
        setCurrentWork( prevValue => prevValue-1);
      }
    }
  }

  function handleChange(evt) {
    setCurrentWork(Number(evt.target.value));
  }

  return (
    <div className="my-work-container">
      <div className="my-work-section section" id="my-work">
        <Heading text="My work" />
          <div className="display-container">
            <div className="sub-container-1">
              <div className={`screens-container ${props.dark && "invert"}`}>
                <div onClick={() => handleClick('show')} className="desktop-frame">
                  <div className="desktop-screen">
                    <DisplayWork className={workArr[currentWork].desktopImg} />
                    <div className="desktop-details">
                      <div className="project-desc">{workArr[currentWork].desc}</div>
                    </div>
                  </div>
                </div>
                <div onClick={() => handleClick('show')} className="tablet-frame">
                  <div className="tablet-screen">
                    <DisplayWork className={workArr[currentWork].tabletImg} />
                    <div className="tablet-details">
                      <a className="project-live" href={workArr[currentWork].link} target={workArr[currentWork].link ? "blank" : undefined}>
                        <div className={workArr[currentWork].link && "project-live-icon"} />
                        <div className="project-link">{workArr[currentWork].link ? "View live\nproject" : "This project is\nnot live yet :("}</div>
                      </a>
                    </div>
                  </div>
                  <div className="tablet-button" />
                </div>
                <div onClick={() => handleClick('show')} className="mobile-frame">
                <div className="mobile-screen">
                  <DisplayWork className={workArr[currentWork].mobileImg} />
                  <div className="mobile-details">
                  <a className="project-repo" href={workArr[currentWork].git ? workArr[currentWork].git : undefined} target={workArr[currentWork].git ? "blank" : undefined}>
                    <div className={workArr[currentWork].git ? "github-icon" : undefined} />
                    <div className="repo-link">{workArr[currentWork].git ? "View GitHub repository" : "This repository\nis private :("}</div>
                  </a>
                  </div>
                </div>
                <div className="mobile-notch">
                  <div className="notch-1" />
                  <div className="notch-fill" />
                  <div className="notch-2" />
                </div>
                </div>
              </div>
              <div className="tools-used">
                {
                  workArr[currentWork].tools.map( (tool,index) => {
                    return <ToolUsed key={index} text={tool} />;
                  })
                }
              </div>
            </div>
            <div className="sub-container-2">
                <div className="title-container">
                  <select className="work-title" value={currentWork} onChange={handleChange}>
                    {
                      workArr.map( (work,index) => {
                        return <option value={index}>{work.name}</option>;
                      })
                    }
                  </select>
              </div>
            </div>
          </div>
          <div className={`nav-footer ${props.dark && "invert"}`}>
            <div onClick={() => handleClick('prev')} className="nav-prev nav-btn" />
            <div onClick={() => handleClick('next')} className="nav-next nav-btn" />
          </div>
      </div>
    </div>
  );
}

export default MyWork;
