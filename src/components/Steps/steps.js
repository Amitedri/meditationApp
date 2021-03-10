import React from 'react';
import './steps.css';
const StepOne = () => {
  return (
    <div className="stepContainer">
      <div className="stepNumber">
        <span>.01</span>
      </div>
      <div className="stepDescription">
        <span>Choose the right Binaural Beat for you</span>
      </div>
    </div>
  );
};
const StepTwo = () => {
    return (
        <div className="stepContainer">
          <div className="stepNumber">
            <span>.02</span>
          </div>
          <div className="stepDescription">
            <span>Start Meditating</span>
          </div>
        </div>
      );
};
const StepThree = () => {
    return (
        <div className="stepContainer">
          <div className="stepNumber">
            <span>.03</span>
          </div>
          <div className="stepDescription">
            <span>Check your progress</span>
          </div>
        </div>
      );
};

export { StepOne, StepTwo, StepThree };
