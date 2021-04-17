import React from 'react';
import './aboutme.styles.scss';
import './aboutme.responsive.scss';

function AboutMe(props) {
  return (
    <div className="about-me-container">
      <div className={`about-me-section section ${props.dark && "about-night"}`} id="about-me">
        <div className="about-heading">I design<br />& I develop</div>
        <div className="details-container">
          <div className="individual-intro cod-intro">
            <div className={`about-pic-container ${props.dark && "invert"}`}>
              <div className="about-pic cod-pic" />
            </div>
            <p className="about-text">You’ll either find me writing code or rambling to someone about how Linux is the best OS. You using Windows?!</p>
          </div>
          <div className="individual-intro des-intro">
            <div className={`about-pic-container ${props.dark && "invert"}`}>
              <div className="about-pic des-pic" />
            </div>
            <p className="about-text">Well I hope you appreciate this portfolio. I’ve poured my heart out while designing it!</p>
          </div>
          <div className="individual-intro pla-intro">
            <div className={`about-pic-container ${props.dark && "invert"}`}>
              <div className="about-pic pla-pic" />
            </div>
            <p className="about-text">I hardly ever turn down anything fun. So you’ve got a plan for the weekend? Do count me in!</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AboutMe;
