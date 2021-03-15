export const handleIncreaseTimer = (setMinutes) => {
  return setMinutes((prevState) => prevState + 5);
};
export const handleDecreaseTimer = (setMinutes, minutes) => {
  if (minutes > 5) {
    return setMinutes((prevState) => prevState - 5);
  }
};


