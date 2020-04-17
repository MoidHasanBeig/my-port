import React from 'react';
import './aboutme.styles.scss';
import './aboutme.responsive.scss';
import Fade from 'react-reveal/Fade';
import FooterQuote from '../components/FooterQuote/FooterQuote';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-section section" id="about-me">
        <Fade bottom>
          <div className="about-heading">I design&emsp;&&emsp;I develop</div>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="about-pic-container">
            <div className="about-pic-subcontainer">
              <div className="about-pic" />
            </div>
          </div>
        </Fade>
      </div>
      <FooterQuote text="&quot;Whatever you do, do it well.&quot; – Walt Disney" />
    </div>
  );

}

export default AboutMe;
