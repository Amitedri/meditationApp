import React from 'react';
import './How.css';
import { mapInteractiveBenefits, handleTryClick, mapText } from './Utils';
import bubble from './assets/bubblePurple.svg';
import decoration from './assets/decoration.svg';
import focus from './assets/focus.svg';
import mental from './assets/mental.svg';
import stress from './assets/stress.svg';
//how to images
import one from './assets/one.svg';
import two from './assets/two.svg';
import three from './assets/three.svg';
import six from './assets/six.svg';
import five from './assets/five.svg';
import seven from './assets/seven.svg';

const HowTo = (props) => {
  const items = [
    { text: 'BETTER FOCUS', src: focus },
    { text: 'MENTAL ABILITIES', src: mental },
    { text: 'STRESS REDUCER', src: stress },
  ];
  const [displayItems, setDisplayItems] = React.useState(items);

  const itemsForReplace = [
    { text: 'Mental Stamina', src: stress },
    { text: 'Attention Span', src: stress },
    { text: 'ONESS', src: stress },
    { text: 'CREATIVITY', src: stress },
    { text: 'THINKING CAPACITY', src: stress },
  ];

  const howToArray = [
    { text: 'Choose a quiet place where you most likeley wont be disturbed.', src: one },
    { text: 'Put headphones and choose your binaural beat and close your eyes.', src: two },
    { text: 'Breat from the nose and release through mouth.', src: three },
    { text: 'Body scans - feel your body and lay your attention on it.', src: six },
    { text: 'The Binaural Effect will start after 6 - 8 minutes.', src: five },
    { text: 'Choose a quiet place where you most likeley wont be disturbed.', src: seven },
  ];

  return (
    <div className="pageContainer">
      <div className="bubbleBackground">
        <img className="bubble" src={bubble} alt={bubble} />
      </div>
      <div className="howtoTopContainer">
        <div className="pageHeader">
          <h1>Meditating!What is it?</h1>
          <span>
            It has been said that the mind is a great servent but a terrible master. the way of meditation is been passed through the ages by every group in
            history in this way or another.
            <br /> So, if you ask what practically is going to do for you, well thats Depends on the angle you are taking
            <br />
            Choose What you would like to achive:
          </span>
        </div>
        <img src={decoration} alt={decoration} />
      </div>
      <span className="scrollToView">(Interact to see more)</span>
      <div className="howtoMidContainer">{mapInteractiveBenefits(displayItems)}</div>
      <div className="howtoBottomContainer">
        <h1>Ok,How to meditate?</h1>
        {mapText(howToArray)}
      </div>
      <button className="firstTryActionButton" onClick={handleTryClick}>
        Give it a try?
      </button>
    </div>
  );
};

export default HowTo;
