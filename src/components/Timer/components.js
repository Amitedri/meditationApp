import React from 'react';
export const StopButton = (pauseTimer,setIsActive,intreval) => {
  return (
    <div className="sessionEnd">
      <button className="timerButton pause" onClick={pauseTimer}>
        PAUSE
      </button>
      <button className="timerButton finish">FINISH</button>
    </div>
  );
};
export const StartButton = (startTimer,seconds, setMinutes, setSeconds, setIsActive, intreval) => {
  return (
    <button className="timerButton start" onClick={() => startTimer(seconds, setMinutes, setSeconds, setIsActive, intreval)}>
      START
    </button>
  );
};
