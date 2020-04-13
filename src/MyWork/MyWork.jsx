import React from 'react';
import './mywork.styles.scss';
import './mywork.responsive.scss';
import './mywork.images.scss';
import Heading from '../components/Heading/Heading';
import ToolUsed from './subcomponents/ToolUsed/ToolUsed';

let workArr = [
  {
    name:'klipmunk.com',
    desktopImg:'klipmunk-lg',
    tabletImg:'klipmunk-md',
    mobileImg:'klipmunk-sm',
    tools:['HTML/CSS/JS','NodeJS','ExpressJS','Figma'],
    desc:'',
    link:'https://klipmunk.com/',
    git:'Private'
  },
  {
    name:'',
    desktopImg:'',
    tabletImg:'',
    mobileImg:'',
    tools:[],
    desc:'',
    link:''
  },
  {
    name:'',
    desktopImg:'',
    tabletImg:'',
    mobileImg:'',
    tools:[],
    desc:'',
    link:''
  },
];

function MyWork() {
  return (
    <div className="my-work-container">
      <div className="my-work-section section" id="my-work">
        <Heading text="My work" />
        <div className="display-container">
          <div className="sub-container-1">
            <div className="screens-container">
              <div className="desktop-screen">
                <div className="desktop-image klipmunk-lg" />
              </div>
              <div className="tablet-screen">
                <div className="tablet-image klipmunk-md" />
                <div className="tablet-button" />
              </div>
              <div className="mobile-screen">
              <div className="mobile-image klipmunk-sm" />
              <div className="mobile-notch">
                <div className="notch-1" />
                <div className="notch-fill" />
                <div className="notch-2" />
              </div>
              </div>
            </div>
            <div className="tools-used"><ToolUsed text="HTML/CSS/JS" /><ToolUsed text="NodeJS" /><ToolUsed text="ExpressJS" /></div>
          </div>
          <div className="sub-container-2">
              <div className="title-container">
                <div className="prev-work-btn" />
                <div className="work-title">Klipmunk</div>
                <div className="next-work-btn" />
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <div className="nav-prev">PREV</div>
          <div className="nav-next">NEXT</div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
