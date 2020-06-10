import React,{ useState } from 'react';
import './credentials.styles.scss';
import './credentials.responsive.scss';
import './credentials.images.scss';
import Heading from '../components/Heading/Heading';

function Credentials(props) {

  return (
    <div className={`credentials-container ${props.dark && "invert"}`}>
      <div className="credentials-section section" id="credentials">
        <Heading text="Credentials" />
        <div className="certification-logos-container">
          <div className="udemy-logo certification-logo" />
          <div className="logo-sub-container">
            <div className="fcc-logo certification-logo" />
            <div className="idf-logo certification-logo" />
          </div>
        </div>
      </div>
    </div>
  );

}

export default Credentials;
