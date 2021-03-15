import React from 'react';
import './Timer.css';
import up from './assets/up.svg';
import bottom from './assets/down.svg';
import axios from 'axios';
import { throttling } from '../Intro/Utils';
import { handleIncreaseTimer, handleDecreaseTimer, pauseTimer, startTimer } from './Utils';
// import { StopButton, StartButton } from './components';
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
  const [savedSessionsCounter, setSavedSessionsCounter] = React.useState(0);
  const [requestCounter, setRequestCounter] = React.useState(0);

  const axiosConfig = {
    method: 'post',
    url: 'localhost:5000/sessions',
    data: result,
  };
  const resultObject = {
    day: splittedDateArray[0],
    date: splittedDateArray[1],
    year: splittedDateArray[2],
    time: splittedDateArray[3],
    sessionLength: `${minutes}:${seconds}`,
  };
  const addSession = async () => {
    try {
      if (minutes >= 5 && setSavedSessionsCounter < 1) {
        setSavedSessionsCounter((prevState) => prevState + 1);
        pauseTimer();
        const req = await axios({
          method: 'put',
          url: 'http://127.0.0.1:5000/meditate/sessions',
          data: { result: resultObject, token: window.sessionStorage.getItem('token') },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  //stop button component
  const StopButton = (pauseTimer) => {
    return (
      <div className="sessionEnd">
        <button className="timerButton pause" onClick={() => pauseTimer()}>
          PAUSE
        </button>
        <button className="timerButton finish" onClick={() => addSession()}>
          FINISH
        </button>
      </div>
    );
  };
  //start button component
  const StartButton = (startTimer) => {
    return (
      <button className="timerButton start" onClick={startTimer}>
        START
      </button>
    );
  };
  // starting timer
  const startTimer = () => {
    if (typeof seconds === 'string') {
      setMinutes((prevState) => prevState - 1);
      setSeconds(59);
    }
    setIsActive((prevState) => !prevState);
    intreval = setInterval(() => {
      setSeconds((prevState) => prevState - 1);
    }, 1000);
  };
  //pause timer
  const pauseTimer = function () {
    setIsActive((prevState) => !prevState);
    return clearInterval(intreval);
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
        {/*  handleDecreaseTimer(setMinutes, minutes) */}
        <img src={up} alt={up} onClick={() => clearInterval(intreval)} />
      </div>
      {isActive ? StopButton(pauseTimer) : StartButton(startTimer)}
    </div>
  );
};
export default Timer;
