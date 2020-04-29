import React from 'react';
import './aboutme.styles.scss';
import './aboutme.responsive.scss';
import FooterQuote from '../components/FooterQuote/FooterQuote';

function AboutMe(props) {
  return (
    <div className={`about-me-container ${props.dark && "invert"}`}>
      <div className={`about-me-section section ${props.dark && "no-bg"}`} id="about-me">
        <div className="about-heading">I design&emsp;&&emsp;I develop</div>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className={`about-pic-container ${props.dark && "invert"}`}>
          <div className="about-pic-subcontainer">
            <div className="about-pic" />
          </div>
        </div>
      </div>
      <FooterQuote text="&quot;Whatever you do, do it well.&quot; – Walt Disney" />
    </div>
  );

}

export default AboutMe;
