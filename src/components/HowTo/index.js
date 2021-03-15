import React from 'react';
import './How.css';
import { InteractiveBenefits, handleTryClick, mapText, updateArrayWithItems } from './Utils';
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

import { BubbleInfo, InfoBubble } from './components';
const HowTo = (props) => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [benefitsCounter, setBenefitsCounter] = React.useState(0);
  const [popupText, setPopupText] = React.useState('');

  const items = [
    { text: 'Better Focus', src: focus },
    { text: 'Mental Abilites', src: mental },
    { text: 'Stress reducer', src: stress },
  ];
  const [displayItems, setDisplayItems] = React.useState(items);

  const itemsForReplace = [
    { text: 'Mental Stamina', src: stress },
    { text: 'Attention Span', src: stress },
    { text: 'Oness', src: stress },
    { text: 'Creativity', src: stress },
    { text: 'thinking Capacity', src: stress },
  ];

  const howToArray = [
    { text: 'Choose a quiet place where you most likeley wont be disturbed.', src: one },
    { text: 'Put headphones and choose your binaural beat and close your eyes.', src: two },
    { text: 'Breat from the nose and release through mouth.', src: three },
    { text: 'Body scans - feel your body and lay your attention on it.', src: six },
    { text: 'The Binaural Effect will start after 6 - 8 minutes.', src: five },
    { text: 'Choose a quiet place where you most likeley wont be disturbed.', src: seven },
  ];
  const benefitsText = [
    { title: 'Better Focus', body: 'Meditation can enhance your ability to focus and come up with incredible solutions.' },
    { title: 'Mental Abilites', body: 'Gradully your mental abilities will improve and allow you to proccess more sensory information.' },
    {
      title: 'Stress reducer',
      body: 'Stress reducing is one of the most incredible effects of meditation. you will become much more capeable when it comes to self control.',
    },
    { title: 'Mental Stamina', body: 'The ability to focus for longer and complete more tasks without breaks.' },
    { title: 'Attention Span', body: 'Ability to hold deep attention without getting disctructed by the environment.' },
    { title: 'Oness', body: 'The feeling of being one with every thing that around you will get stronger as long as you keep meditating. ' },
    { title: 'Creativity', body: 'Mental proccessing and imagination abilites will gradually improve and help you get your way right.' },
    { title: 'thinking Capacity', body: 'Hold more information at once, allow your brain to do what he is really good at.' },
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
        {isHovering && <InfoBubble textObj={popupText} />}
      </div>
      <div className="howtoMidContainer">
        <span className="scrollToView" onClick={() => updateArrayWithItems(items, itemsForReplace, setDisplayItems, benefitsCounter, setBenefitsCounter)}>
          (Click to see more)
        </span>
        <InteractiveBenefits list={displayItems} setIsHovering={setIsHovering} textObj={benefitsText} setPopupText={setPopupText} />
      </div>
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
