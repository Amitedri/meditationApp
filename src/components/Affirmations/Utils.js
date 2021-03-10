import React from 'react';
import Affirmations from '.';
export const removeAffirmation = (event,setAffirmations,affirmations) => {
    const newAffirmations = affirmations.filter((affirmation) => {
      const elem = event.target.parentNode.parentNode.children[0];
      console.log(event.target.parentNode.parentNode);
      return affirmation !== elem.textContent;
    });
    setAffirmations(newAffirmations);
  };
  export const mapAffirmations = (affirmations,setAffirmations,close) => {
    if (!affirmations) {
      return;
    }
    return affirmations.map((value, i) => {
      return (
        <div key={i} className="singleAffirmation">
          <span className="affirmationText">{value}</span>
          <span className="removeAffirmation" onClick={(event) => removeAffirmation(event,setAffirmations,Affirmations)}>
            <img src={close} alt={close} />
          </span>
        </div>
      );
    });
  };
  export const addAffirmation = (setAffirmations, affirmation) => {
    const elem = document.querySelector('INPUT');
    if (elem.value !== '') {
      setAffirmations((prevState) => [...prevState, affirmation]);
      elem.value = '';
    }
  };