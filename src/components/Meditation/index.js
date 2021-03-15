import React from 'react';
import './Meditation.css';
import MobileNav from '../Navbar/MobileMenu';
//Components
import Timer from '../Timer';
import Affirmations from '../Affirmations';
import Mplayer from '../MPlayer';
import Chart from '../Charts';

const PersonalPage = ({ isAuth, logout }) => {
  const [session, setSession] = React.useState(null);
  const getSessionInfo = (data) => {
    return setSession(() => data);
  };
  return (
    <div className="meditationContainer">
      <div className="mainContainer">
        <div className="circle player">
          <Mplayer />
        </div>
        <div className="circle timer">
          <Timer getSessionInfo={getSessionInfo} />
        </div>
        <div className="circle affirm">
          <Affirmations />
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default PersonalPage;
