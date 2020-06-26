import React from 'react';
import './certificate.styles.scss';

function Certificate(props) {
  return (
    <div className={`cert-cont ${props.dark && 'invert'}`}>
      <div className={`cert ${props.class}`} />
    </div>
  );
}

export default Certificate;
