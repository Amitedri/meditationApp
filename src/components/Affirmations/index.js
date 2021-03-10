import React from 'react';
import './Affirmations.css';
import close from './assets/close.svg';
import { removeAffirmation, mapAffirmations, addAffirmation } from './Utils';
const Affirmations = () => {
  const [affirmation, setAffirmation] = React.useState('');
  const [affirmations, setAffirmations] = React.useState(['Affirmations can help to set new beliefs in our subconsciousness !']);
  return (
    <div className="affirmationsWrapper">
      <div className="affirmationsHeader">
        <span>Add Affirmations!</span>
      </div>
      <div className="affirmationsControllers">
        <input type="text" onInput={(event) => setAffirmation(event.target.value)} />
        <button onClick={() => addAffirmation(setAffirmations, affirmation)}>+</button>
      </div>
      <div className="affirmationsTextContainer dragscroll">{mapAffirmations(affirmations,setAffirmations,close)}</div>
    </div>
  );
};

export default Affirmations;
