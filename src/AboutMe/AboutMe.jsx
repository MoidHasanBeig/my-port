import React from 'react';
import './aboutme.styles.scss';
import './aboutme.responsive.scss';
import FooterQuote from '../components/FooterQuote/FooterQuote';

function AboutMe(props) {
  return (
    <div className={`about-me-container ${props.dark && "invert"}`}>
      <div className={`about-me-section section ${props.dark && "no-bg"}`} id="about-me">
        <div className="about-heading">I design<br />& I develop</div>
        <div className="details-container">
          <div className="individual-intro cod-intro">
            <div className={`about-pic-container ${props.dark && "invert"}`}>
              <div className="about-pic-subcontainer">
                <div className="about-pic cod-pic" />
              </div>
            </div>
            <p className="about-text">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="individual-intro des-intro">
            <div className={`about-pic-container ${props.dark && "invert"}`}>
              <div className="about-pic-subcontainer">
                <div className="about-pic des-pic" />
              </div>
            </div>
            <p className="about-text">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="individual-intro pla-intro">
            <div className={`about-pic-container ${props.dark && "invert"}`}>
              <div className="about-pic-subcontainer">
                <div className="about-pic pla-pic" />
              </div>
            </div>
            <p className="about-text">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
      <FooterQuote text="&quot;Whatever you do, do it well.&quot; – Walt Disney" />
    </div>
  );

}

export default AboutMe;
