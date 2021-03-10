import React from 'react';

export const mapInteractiveBenefits = (list) => {
  return list.map((item, index) => {
    return (
      <div key={index} className="interactiveBenefit">
        <h2>{item.text}</h2>
        <img src={item.src} alt={item.src}></img>
      </div>
    );
  });
};

export const handleTryClick = (props) => {
  const elem = document.querySelector('.introContainer');
  elem.scrollIntoView({
    behavior: 'smooth',
  });
  props.getUserAccountAction('register');
};

export const mapText = (list) => {
  return list.map((item, index) => {
    return (
      <div key={index} className="howtoRow">
        <h2>{item.text}</h2>
        <div className="howtoStep">
          <img src={item.src} alt={item.src}></img>
        </div>
      </div>
    );
  });
};
