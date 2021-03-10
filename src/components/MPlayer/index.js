import React from 'react';
import './Mplayer.css';
import pause from './assets/pause.svg';
import stop from './assets/stop.svg';
import play from './assets/play.svg';
import binaural from '../../binaural/binaural.mp3';
import Delta from '../../binaural/Delta.mp3';
import Theta from '../../binaural/Theta.mp3';
import { startPlay, stopPlay, pausePlay, handleClick } from './Utils';
const Mplayer = () => {
  const [source, setSource] = React.useState(binaural);
  const [counter, setCounter] = React.useState(0);

  const audioFiles = [
    { text: 'Beta Rythem - for Focus', src: binaural },
    { text: 'Delta Rythem - for Meditation', src: Delta },
    { text: 'Theta Rythem - for Sleep', src: Theta },
  ];

  React.useEffect(() => {
    console.log('county', counter);
    let playingText = document.querySelector('#playingNowText');
    playingText.animate([{ opacity: '0' }, { opacity: 1 }], {
      duration: 1000,
    });
  }, [counter]);

  
  return (
    <div className="mplayerContainer">
      <div className="playigInfo" onClick={() => handleClick(counter, audioFiles, setCounter, setSource)}>
        <span id="playingNowText" className="playignNow">
          {audioFiles[counter].text}
        </span>
        <audio>
          <source src={source} type="audio/mpeg" />
        </audio>
      </div>
      <div className="mediaControllers">
        <div className="mediaButton" onClick={stopPlay}>
          <img src={stop} alt={stop} />
        </div>
        <div className="mediaButton" onClick={pausePlay}>
          <img src={pause} alt={pause} />
        </div>
        <div className="mediaButton" onClick={startPlay}>
          <img src={play} alt={play} />
        </div>
      </div>
    </div>
  );
};

export default Mplayer;
