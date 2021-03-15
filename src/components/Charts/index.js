import React from 'react';
import './Charts.css';
let sessionData;
const Chart = (props) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  var prnDt = new Date().toLocaleTimeString('en-us', options);
  let splitted = prnDt.split(',');
  splitted.splice(3, 1, null);


    React.useEffect(()=>{
        sessionData = window.sessionStorage.getItem('sessions');
        if(sessionData){
          
        }
    },[]);

  return (
    <div className="chartContainer dragscroll">
      <h1>Your Last Results</h1>
      <h2>check your progress</h2>
      <div className="session">
        {sessionData ? <span>{`on ${prnDt} you had session for ${sessionData}`}</span>: <span>You currently have no sessions. (5 minutes and more :)) </span>}
      </div>
    </div>
  );
};

export default Chart;
