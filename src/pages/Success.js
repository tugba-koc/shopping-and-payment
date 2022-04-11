import React from 'react';
import SuccessIcon from '../components/SuccessIcon/SuccessIcon';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';
import Header from '../components/Header/Header';


function Success() {
  return (
    <div className="main-wrapper--success">
      <Header />
      <div className="success-outer">
        <div className="success-inner">
          <SuccessIcon />
          <SuccessMessage />
        </div>
      </div>


    </div>
  )
}

export default Success