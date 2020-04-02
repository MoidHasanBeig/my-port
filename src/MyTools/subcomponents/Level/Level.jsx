import React from "react";
import './level.styles.scss';
import './level.responsive.scss';
let runSampleArr = [1,2,3,4,5];

function Level(props) {
  let x = props.lev;
  return (
    <div className="level-container">
      {
        runSampleArr.map( (item) => {
          if (x === 0.5) {
            x = x-0.5;
            return (<div className="level-ball half" />);
          }
          else if (x>=1) {
            x = x-1;
            return (<div className="level-ball one" />);
          }
          else {
            x=0;
            return (<div className="level-ball zero" />);
          }
        })
      }
    </div>
  );
}

export default Level;
