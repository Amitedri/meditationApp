export const handleIncreaseTimer = (setMinutes) => {
  return setMinutes((prevState) => prevState + 5);
};
export const handleDecreaseTimer = (setMinutes, minutes) => {
  if (minutes > 5) {
    return setMinutes((prevState) => prevState - 5);
  }
};

export const startTimer = (seconds, setMinutes, setSeconds, setIsActive, intreval) => {
  if (typeof seconds === 'string') {
    setMinutes((prevState) => prevState - 1);
    setSeconds(59);
  }
  setIsActive((prevState) => !prevState);
  intreval = setInterval(() => {
    setSeconds((prevState) => prevState - 1);
  }, 1000);
};

export const pauseTimer = (setIsActive,intreval) => {
  setIsActive((prevState) => !prevState);
  return clearInterval(intreval);
};
