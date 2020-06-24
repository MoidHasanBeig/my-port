import React,{ useState } from 'react';
import './credentials.styles.scss';
import './credentials.responsive.scss';
import './credentials.images.scss';
import Heading from '../components/Heading/Heading';

function Credentials(props) {

  return (
    <div className="credentials-container">
      <div className="credentials-section section" id="credentials">
        <Heading text="Credentials" />
      </div>
    </div>
  );

}

export default Credentials;
