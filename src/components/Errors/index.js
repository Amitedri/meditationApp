import React from 'react';
import './Errors.css';
const ErrorDisplay = (errors) => {
  return (
    <div id="err" className="errorContainer">
      <span>{errors.errors || errors}</span>
    </div>
  );
};

export default ErrorDisplay;
