import React,{ useState } from 'react';
import Certificate from './subcomponents/Certificate/Certificate';
import './credentials.styles.scss';
import './credentials.responsive.scss';
import './credentials.images.scss';
import Heading from '../components/Heading/Heading';

function Credentials(props) {

  return (
    <div className="credentials-container">
      <div className="credentials-section section" id="credentials">
        <Heading text="Credentials" />
        <div className="certificates-container">
          <div className="row">
            <Certificate />
            <Certificate />
            <Certificate />
            <Certificate />
            <Certificate />
            <Certificate />
          </div>
          <div className="view-all">
            <p>View all</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Credentials;
