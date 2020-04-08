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
          <div className="project-image" />
          <div className="title-container">
            <div className="prev-work-btn" />
            <div className="work-title">Klipmunk</div>
            <div className="next-work-btn" />
          </div>
          <div className="work-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="tools-used">Tools used : <ToolUsed text="HTML/CSS/JS" /><ToolUsed text="NodeJS" /><ToolUsed text="ExpressJS" /></div>
          <div className="work-footer">
            <a href="" className="learn-more">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
