import React from 'react';
import './workdetailsdialog.styles.scss';
import './workdetailsdialog.responsive.scss';
import '../../mywork.images.scss';

function WorkDetailsDialog(props) {
  return (
    <div onClick={props.dismissDialog} className="work-details-dialog-container">
      <div className="work-details-dialog">
        <div className="work-title">Klipmunk</div>
          <div className="text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Non odio euismod lacinia at quis. Vulputate sapien nec sagittis aliquam. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.oreet. Id di</p>
          </div>
          <div className="button-container">
            <a href="#top">View live</a>
            <a href="#top">Git repo</a>
          </div>
      </div>
    </div>
  );
}

export default WorkDetailsDialog;
