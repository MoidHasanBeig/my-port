import React,{ useState } from 'react';
import Certificate from './subcomponents/Certificate/Certificate';
import './credentials.styles.scss';
import './credentials.responsive.scss';
import './credentials.images.scss';
import Heading from '../components/Heading/Heading';

const certArr = [
  {class:'cert-1',link:'https://www.udemy.com/certificate/UC-0154076c-23f9-4e79-9bbc-72d0684f8b22/'},
  {class:'cert-2',link:'https://www.freecodecamp.org/certification/moid/javascript-algorithms-and-data-structures'},
  {class:'cert-3',link:'https://www.freecodecamp.org/certification/moid/front-end-libraries'},
  {class:'cert-4',link:'https://www.freecodecamp.org/certification/moid/responsive-web-design'},
  {class:'cert-5',link:'https://www.interaction-design.org/moid-hasan-beig/certificate/course/e8f1edbf-2daf-42b3-a70f-bef331146b08'},
  {class:'cert-6',link:'https://www.interaction-design.org/moid-hasan-beig/certificate/course/fltqnHSHvVTSSLnd9x'},
  {class:'cert-7',link:'https://www.interaction-design.org/moid-hasan-beig/certificate/course/fltqnHSHvQz7wWtkkD'},
  {class:'cert-8',link:'https://www.interaction-design.org/moid-hasan-beig/certificate/course/fltqnHSHvWsvnmTbFx'},
  {class:'cert-9',link:'https://www.interaction-design.org/moid-hasan-beig/certificate/course/fltqnHSHvVTRFLXTd2'},
]

function Credentials(props) {

  const [viewNumber,setViewNumber] = useState(6);

  function collapseToggle() {
    if (viewNumber == 6) {
      setViewNumber(certArr.length);
    }
    else {
      setViewNumber(6);
    }
  }

  return (
    <div className="credentials-container">
      <div className="credentials-section section" id="credentials">
        <Heading text="Credentials" />
        <div className="certificates-container">
          <div className="row">
            {
              certArr.slice(0,viewNumber).map((cert,index) => {
                return (
                  <Certificate
                    dark={props.dark}
                    class={cert.class}
                    link={cert.link}
                  />
                );
              })
            }
          </div>
          <div onClick={collapseToggle} className="view-all">
            <p>{viewNumber == 6 ? 'View more' : 'View less'}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Credentials;
