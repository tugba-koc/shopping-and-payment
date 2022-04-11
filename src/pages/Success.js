import React from 'react';
import SuccessIcon from '../components/SuccessIcon/SuccessIcon';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';


function Success() {
  return (
    <div className="main-wrapper--success">
      <div className="success-inner">
        <SuccessIcon />
        <SuccessMessage />
        </div>

    </div>
  )
}

export default Success