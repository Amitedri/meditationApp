import React from 'react';
const handleHover = (event, setIsHovering, textObj, setPopupText) => {
  const textObjCopy = [...textObj];
  for (let line of textObjCopy) {
    if (line.title === event.target.textContent) {
      setPopupText(() => line);
    }
  }
  console.log(event.target.textContent);
  setIsHovering((prevState) => !prevState);
  return;
};
export const InteractiveBenefits = ({ list, setIsHovering, textObj,setPopupText }) => {
  return list.map((item, index) => {
    return (
      <div
        key={index}
        className="interactiveBenefit"
        onMouseEnter={(event) => handleHover(event, setIsHovering, textObj,setPopupText)}
        onMouseLeave={() => setIsHovering((prevState) => !prevState)}
      >
        <h2>{item.text}</h2>
        <img src={item.src} alt={item.src}></img>
      </div>
    );
  });
};

export const handleTryClick = (props) => {
  const elem = document.querySelector('.introContainer');
  elem.scrollIntoView({
    behavior: 'smooth',
  });
  props.getUserAccountAction('register');
};

export const mapText = (list) => {
  return list.map((item, index) => {
    return (
      <div key={index} className="howtoRow">
        <h2>{item.text}</h2>
        <div className="howtoStep">
          <img src={item.src} alt={item.src}></img>
        </div>
      </div>
    );
  });
};
export const updateArrayWithItems = (originalList, newList, setDisplayItems, benefitsCounter, setBenefitsCounter) => {
  const copyOfList = [...originalList];
  if (benefitsCounter <= newList.length - 1) {
    let elem = document.querySelector('.interactiveBenefit');
    console.log(elem);
    setBenefitsCounter((prevState) => prevState + 1);
    let temp = [...originalList];
    temp.shift();
    temp.push(newList[benefitsCounter]);
    setDisplayItems(() => temp);
  }
  if (benefitsCounter === newList.length - 1) {
    setDisplayItems(copyOfList);
    setBenefitsCounter(() => 0);
  }
};
