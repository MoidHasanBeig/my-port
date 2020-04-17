import React from 'react';
import './footerquote.styles.scss';

function FooterQuote(props) {
  return (
    <div className="footer-quote">{props.text}</div>
  );
}

export default FooterQuote;
