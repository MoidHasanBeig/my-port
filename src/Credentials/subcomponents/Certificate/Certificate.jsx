import React from 'react';
import './certificate.styles.scss';

function Certificate(props) {
  return (
    <div className={`cert-cont ${props.dark && 'invert'}`}>
      <div className={`cert ${props.class}`}>
        <div className="cert-details">
          <a href={props.link} target="blank" className="cert-verify">Verify credential</a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
