import React, { Component } from "react";
import "./personalPage.css";
var stopwatch = require("simple-stopwatch");
// import stats from '../../stats'
class PersonalPage extends Component {
  state = {};
  handleStart = () => {
      console.log(stopwatch())
  const g =   stopwatch().start();
    console.log(g.duration());
  };
  render() {
    return (
      <div className="layoutContainer">
        <div className="upperLayout"></div>
        <div className="buttomLayout">
          <div className="meditationCounter">
            <div className="display">
              <div className="counterDisplay">
                <div ref={c=>this.timeDisplay = c} className="hour">10:</div>
                <div className="seconds"></div>
              </div>
            </div>

            <div className="controls">
              <div className="btn stop">Stop</div>
              <div onClick={this.handleStart} className="btn start">
                Start
              </div>
              <div className="btn reset">Reset</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalPage;
