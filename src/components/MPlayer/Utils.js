export const startPlay = () => {
  const audioPlay = document.querySelector('audio');
  return audioPlay.play();
};
//stop play
export const stopPlay = () => {
  const audioPlay = document.querySelector('audio');
  audioPlay.currentTime = 0;
  return audioPlay.pause();
};
//pause
export const pausePlay = () => {
  const audioPlay = document.querySelector('audio');
  return audioPlay.pause();
};
export const handleClick = (counter, audioFiles, setCounter, setSource) => {
  if (counter < audioFiles.length - 1) {
    let audioSrc = document.querySelector('audio');
    setCounter((prevState) => prevState + 1);
    setSource(() => audioFiles[counter].src);
    audioSrc.load();
    audioSrc.play();
  } else {
    setCounter(0);
  }
};
