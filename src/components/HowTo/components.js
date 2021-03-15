import React from 'react';
import './How.css';
export const InfoBubble = ({ textObj }) => {
  return (
    <div className="infoBubble">
      <h1>{textObj.title}</h1>
      <span>{textObj.body}</span>
    </div>
  );
};
