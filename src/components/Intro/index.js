import React, { useState } from 'react';
import './Intro.css';
import Login from '../Login/';
import Register from '../Register/';
import ErrorDisplay from '../Errors/';
import { showModal } from '../Navbar/Utils';
import { scrollToElem, displayComponent } from './Utils';
//images
import background from './assets/background.svg';
import decoration from './assets/decoration.svg';
import button from './assets/button.svg';
import scrollButton from './assets/scrollButton.svg';
//
const Intro = (props) => {
  const [error, setError] = useState(null);
  const [accountState, setAccountState] = useState('');

  React.useEffect(() => {
    window.addEventListener('showModal', (event) => {
      const origin = event.path[0].id;
      setAccountState(() => origin);
    });
    window.addEventListener('closeModal', () => {
      setAccountState(() => '');
    });

    //Cleanup
    return () => {
      window.removeEventListener('showModal', () => {}, false);
      window.removeEventListener('closeModal', () => {}, false);
    };
  }, []);

  //recieve error via props
  const getErrors = (data) => {
    setError(() => data);
    setTimeout(() => {
      setError(() => null);
    }, 1500);
  };

  return (
    <div className="introContainer">
      {displayComponent(Register, getErrors, props, Login, accountState)}
      <div className="introImageWrapper">
        <img src={background} alt={background} />
      </div>
      <div className="introTopContainer">
        <h1>MEDITATION</h1>
        <img id="decImage" src={decoration} alt={decoration} />
        <span className="secondary">
          <h2>BECAME</h2>
          <span className="changeable">FUN</span>
        </span>
      </div>
      <div className="introMidContainer">
        <p>
          Register and start meditating with Binaural beats.
          <br /> save your session and see your progress.
        </p>
      </div>
      <div className="actionButton">
        <img src={button} alt={button} id="register" onClick={(event) => showModal(event, 'showModal')} />
      </div>
      <div className="scrollButton" onClickCapture={scrollToElem}>
        <img src={scrollButton} alt={scrollButton} />
      </div>
      {error && <ErrorDisplay errors={error} />}
    </div>
  );
};

export default Intro;
