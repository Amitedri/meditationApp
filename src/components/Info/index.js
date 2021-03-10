import React from 'react';
import './Info.css';
import info from './assets/background (4).svg';
import atom from './assets/atom.svg';
import brain from './assets/brain.svg';
import yoga from './assets/yoga.svg';
import exercise from './assets/exercise.svg';
import chakra from './assets/chakra.svg';
import line from './assets/line.svg';
import decoration from './assets/decoration (3).svg';

const Info = (props) => {
  return (
    <div className="infoContainer">
      <div className="infoImageWrapper">
        <img src={info} alt={info} />
      </div>
      <div className="infoTopContainer">
        <h1>
          WHAT SCIENCE
          <br /> THINKS ABOUT
          <br /> MEDITATION?
        </h1>
        <div className="infoTopText">
          In recent years science has made a great progress, especially when it comes to understanding the not so obvious parts of our brain. now it has been
          clear that our mind and body are one.
        </div>
        <img src={decoration} alt={decoration} />
      </div>
      <div className="infoMidContainer">
        <img src={atom} alt={atom} />
        <img src={exercise} alt={exercise} />
        <img src={yoga} alt={yoga} />
        <img src={brain} alt={brain} />
        <img src={chakra} alt={chakra} />
      </div>
      <div className="infoBottomContainer">
        <img src={line} alt={line} />
        <img src={line} alt={line} />
        <img src={line} alt={line} />
      </div>
    </div>
  );
};

export default Info;
