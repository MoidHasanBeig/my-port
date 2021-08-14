import React,{ useState,Suspense } from 'react';
import './mywork.styles.scss';
import './mywork.responsive.scss';
import './mywork.images.scss';
import Heading from '../components/Heading/Heading';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ToolUsed from './subcomponents/ToolUsed/ToolUsed';
const DisplayWork = React.lazy(() => import('./subcomponents/DisplayWork/DisplayWork'));

let workArr = [
  {
    name:'Webbcast',
    desktopImg:'webbcast-lg',
    tabletImg:'webbcast-md',
    mobileImg:'webbcast-sm',
    tools:['ReactJS','NodeJS','WebRTC','WebSockets'],
    desc:'This is a live streaming app that can put you live in few seconds without any signup. Built on React+Node. WebRTC and WebSockets at the very core of the app.',
    link:'https://webbcast.herokuapp.com/',
    git:'https://github.com/MoidHasanBeig/axtrion-broadcast-app'
  },
  {
    name:'Moon of Doom',
    desktopImg:'game-lg',
    tabletImg:'game-md',
    mobileImg:'game-sm',
    tools:['PhaserJS','HTML5','Canvas','JavaScript'],
    desc:'Built on PhaserJS, this is a survival game where the player is tested on how long he can survive the unending alien attack. Shoutout to Rick and Morty. ',
    link:'https://moonofdoom.github.io/',
    git:'https://github.com/MoidHasanBeig/theMoonOfDoomVsJanMichaelVincent'
  },
  {
    name:'Klipmunk',
    desktopImg:'klipmunk-lg',
    tabletImg:'klipmunk-md',
    mobileImg:'klipmunk-sm',
    tools:['JavaScript','NodeJS','ExpressJS','Figma'],
    desc:'Klipmunk is a cloud-based platform where users can save and annotate videos, create their own libraries and collaborate. Also they can discover interesting videos via the custom feed.',
    link:'https://klipmunk.com/',
    git:false
  },
  {
    name:'Chatrooms',
    desktopImg:'chatrooms-lg',
    tabletImg:'chatrooms-md',
    mobileImg:'chatrooms-sm',
    tools:['JavaScript','NodeJS','ExpressJS','WebSockets'],
    desc:'Based on WebSocket protocol, Chatrooms is a simple peer to peer communication app where users can form groups and send instant messages.',
    link:'https://codesandbox.io/s/frosty-thunder-yvysl',
    git:'https://github.com/MoidHasanBeig/chatrooms'
  },
  {
    name:'Keeper App',
    desktopImg:'keeper-lg',
    tabletImg:'keeper-md',
    mobileImg:'keeper-sm',
    tools:['ReactJS','CSS3','JavaScript'],
    desc:'An imitation of the Google Keep App, Keeper is a note taking platform. This is only the Frontend built on React without a backend.',
    link:'https://codesandbox.io/s/peaceful-haze-mm0hq',
    git:'https://github.com/MoidHasanBeig/keeper-app'
  },
  {
    name:'My Portfolio',
    desktopImg:'portfolio-lg',
    tabletImg:'portfolio-md',
    mobileImg:'portfolio-sm',
    tools:['ReactJS','CSS3','JavaScript','Figma'],
    desc:'Built on ReactJS, this portfolio is lightweight, fast and super responsive to all screen sizes.',
    link:'http://moidhasan.herokuapp.com/',
    git:'https://github.com/MoidHasanBeig/my-port'
  },
  {
    name:'Speedklip',
    desktopImg:'speedklip-lg',
    tabletImg:'speedklip-md',
    mobileImg:'speedklip-sm',
    tools:['HTML/CSS/JS','Figma'],
    desc:'A simple Landing Page built as a part of a Marketing Startegy for the Klipmunk app. Also the illustrations were done by me :)',
    link:'https://klipmunk.com/speedklip',
    git:false
  }
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
                    <Suspense fallback={<LoadingScreen dark={props.dark} />}>
                      <DisplayWork className={workArr[currentWork].desktopImg} />
                    </Suspense>
                    <div className="desktop-details">
                      <div className="project-desc">{workArr[currentWork].desc}</div>
                    </div>
                  </div>
                </div>
                <div onClick={() => handleClick('show')} className="tablet-frame">
                  <div className="tablet-screen">
                    <Suspense fallback={<LoadingScreen dark={props.dark} />}>
                      <DisplayWork className={workArr[currentWork].tabletImg} />
                    </Suspense>
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
                  <Suspense fallback={<LoadingScreen dark={props.dark} />}>
                    <DisplayWork className={workArr[currentWork].mobileImg} />
                  </Suspense>
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
                    return <ToolUsed key={new Date().getTime() + index} text={tool} />;
                  })
                }
              </div>
            </div>
            <div className="sub-container-2">
                <div className="title-container">
                  <select className="work-title" value={currentWork} onChange={handleChange}>
                    {
                      workArr.map( (work,index) => {
                        return <option key={new Date().getTime() + index} value={index}>{work.name}</option>;
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
