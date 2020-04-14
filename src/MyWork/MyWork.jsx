import React,{ Suspense } from 'react';
import './mywork.styles.scss';
import './mywork.responsive.scss';
import './mywork.images.scss';
import Heading from '../components/Heading/Heading';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ToolUsed from './subcomponents/ToolUsed/ToolUsed';
const DisplayWork = React.lazy( () => import('./subcomponents/DisplayWork/DisplayWork'));

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
              <div className="desktop-frame">
                <div className="desktop-screen">
                  <Suspense fallback={<LoadingScreen />}>
                    <DisplayWork className="klipmunk-lg" />
                  </Suspense>
                </div>
              </div>
              <div className="tablet-frame">
                <div className="tablet-screen">
                  <Suspense fallback={<LoadingScreen />}>
                    <DisplayWork className="klipmunk-md" />
                  </Suspense>
                </div>
                <div className="tablet-button" />
              </div>
              <div className="mobile-frame">
              <div className="mobile-screen">
                <Suspense fallback={<LoadingScreen />}>
                  <DisplayWork className="klipmunk-sm" />
                </Suspense>
              </div>
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
