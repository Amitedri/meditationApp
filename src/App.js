import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Intro from './components/Intro/';
import Navbar from './components/Navbar';
import Meditation from './components/Meditation';
import particlesConfig from './particlesjs.json';
import HowTo from './components/HowTo';
import Info from './components/Info';
import useToken from './Utils/useToken';
import redirect from './Utils/redirect';

const App = () => {
  const { token, deleteToken } = useToken();

  // Particles effect will start after window.onLoad
  React.useEffect(() => {
    let particlesJS = '';
    const setParticlesEffect = () => {
      try {
        particlesJS = window.particlesJS;
        particlesJS('particles-js', particlesConfig);
      } catch (err) {
        setParticlesEffect();
        return false;
      }
    };
  }, []);

  const Main = () => {
    return (
      <React.Fragment>
        <Intro redirect={redirect} isAuth={token} logout={deleteToken} />
        <HowTo />
        <Info />
      </React.Fragment>
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuth={token} logout={deleteToken} redirect={redirect} />
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/howToMeditate" render={() => <HowTo />} />
          <Route exact path="/info" render={() => <Info />} />
          <Route exact path="/meditate" render={() => (token ? <Meditation isAuth={token} logout={deleteToken} /> : <Main />)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
