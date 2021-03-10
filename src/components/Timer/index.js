import React from 'react';
import './Timer.css';
import up from './assets/up.svg';
import bottom from './assets/down.svg';
import axios from 'axios';
import { throttling } from '../Intro/Utils';
import { handleIncreaseTimer, handleDecreaseTimer, pauseTimer,startTimer } from './Utils';
import { StopButton, StartButton } from './components';
let intreval;
const Timer = ({ getSessionInfo }) => {
  //Date with specific options 
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  //parsing
  var prnDt = new Date().toLocaleTimeString('en-us', options);

  let splittedDateArray = prnDt.split(',');

  const [seconds, setSeconds] = React.useState('00');
  const [minutes, setMinutes] = React.useState(10);
  const [isActive, setIsActive] = React.useState(false);
  const [result, setResult] = React.useState({});

  const axiosConfig = {
    method: 'post',
    url: 'localhost:5000/sessions',
    data: result,
  };

  //test
  //
  // window.addEventListener('beforeunload', async () => {
  //   const req = await axios({
  //     method: 'get',
  //     url: 'http://localhost:5000/like',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  // });


  const finsihSession = async () => {
    console.log('clc');
    try {
      pauseTimer();
      const resultObject = {
        day: splittedDateArray[0],
        date: splittedDateArray[1],
        year: splittedDateArray[2],
        time: splittedDateArray[3],
        sessionLength: `${minutes}:${seconds}`,
      };
      const req = await axios({
        method: 'put',
        url: 'http://localhost:5000/sessions',
        data: { result: resultObject, token: window.sessionStorage.getItem('token') },
      });
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (seconds === 0) {
      setMinutes((prevState) => prevState - 1);
      setSeconds(60);
    }
  }, [seconds]);

  return (
    <div className="timerContainer">
      <div className="more" onClick={() => handleIncreaseTimer(setMinutes)}>
        <img src={bottom} alt={bottom} />
      </div>
      <div className="currentTimeWrapper">
        <span>{`${minutes}:${seconds}`}</span>
      </div>
      <div className="more">
        <img src={up} alt={up} onClick={() => handleDecreaseTimer(setMinutes, minutes)} />
      </div>
      {isActive ? StopButton(pauseTimer, setIsActive,intreval) : StartButton(startTimer, seconds, setMinutes, setSeconds, setIsActive, intreval)}
    </div>
  );
};
export default Timer;
