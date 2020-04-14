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
    desc:'',
    link:'https://klipmunk.com/',
  },
  {
    name:'Speedklip',
    desktopImg:'speedklip-lg',
    tabletImg:'speedklip-md',
    mobileImg:'speedklip-sm',
    tools:['HTML/CSS/JS','Figma'],
    desc:'',
    link:''
  },
  {
    name:'Mindly',
    desktopImg:'klipmunk-lg',
    tabletImg:'klipmunk-md',
    mobileImg:'klipmunk-sm',
    tools:['React-native','Redux'],
    desc:'',
    link:''
  },
];

function MyWork() {

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
    else {
      if(currentWork === 0) {
        setCurrentWork(workArr.length-1);
      }
      else {
        setCurrentWork( prevValue => prevValue-1);
      }
    }
  }

  return (
    <div className="my-work-container">
      <div className="my-work-section section" id="my-work">
        <Heading text="My work" />
        <div className="display-container">
          <div className="sub-container-1">
            <div className="screens-container">
              <div className="desktop-frame">
                <div className="desktop-screen">
                  <DisplayWork className={workArr[currentWork].desktopImg} />
                </div>
              </div>
              <div className="tablet-frame">
                <div className="tablet-screen">
                  <DisplayWork className={workArr[currentWork].tabletImg} />
                </div>
                <div className="tablet-button" />
              </div>
              <div className="mobile-frame">
              <div className="mobile-screen">
                <DisplayWork className={workArr[currentWork].mobileImg} />
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
                <div onClick={() => handleClick('prev')} className="prev-work-btn" />
                <div className="work-title">{workArr[currentWork].name}</div>
                <div onClick={() => handleClick('next')} className="next-work-btn" />
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <div onClick={() => handleClick('prev')} className="nav-prev">PREV</div>
          <div onClick={() => handleClick('next')} className="nav-next">NEXT</div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
