import React from 'react';
import './mywork.styles.scss';
import './mywork.responsive.scss';
import Heading from '../components/Heading/Heading';
import ToolUsed from './subcomponents/ToolUsed/ToolUsed';

function MyWork() {
  return (
    <div className="my-work-container">
      <div className="my-work-section section" id="my-work">
        <Heading text="My work" />
        <div className="display-container">
          <div className="sub-container-1">
            <div className="screens-container">
              <div className="desktop-screen">
                <div className="desktop-image" />
              </div>
              <div className="tablet-screen">
                <div className="tablet-image" />
                <div className="tablet-button" />
              </div>
              <div className="mobile-screen">
              <div className="mobile-image" />
              <div className="mobile-notch">
                <div className="notch-1" />
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
      </div>
    </div>
  );
}

export default MyWork;
