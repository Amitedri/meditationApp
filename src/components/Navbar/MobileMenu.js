import React from 'react';
import redirect from '../../Utils/redirect';
import './Navbar.css';
import { scrollToElem, showModal } from './Utils';
const MobileNav = (isAuth, logout, isAtMain) => {  
  const Login = (
    <button id="register" className="navItem" onClick={(event) => showModal(event, 'showModal')}>
      Login / Rgister
    </button>
  );
  const Logout = (
    <button className="navItem" onClick={(event) => logout()}>
      <span id="register">Logout</span>
    </button>
  );
  const handleMeditationClick = (event) => {
    if (isAuth && !isAtMain() || isAuth && isAtMain()) {
      redirect('/meditate');
    }
    if (!isAuth && isAtMain()) {
      showModal(event, 'showModal');
    }
  };

  return (
    <div className="mobileNavContainer">
      <div className="mobileNavMenu">
        {isAuth ? Logout : Login}
        <div className="navItem" onClick={() => (isAtMain() ? scrollToElem('top') : (window.location = '/'))}>
          <span>Home</span>
        </div>
        <div className="navItem" onClick={() => (isAtMain() ? scrollToElem('mid') : (window.location = '/howToMeditate'))}>
          <span>How to Meditate</span>
        </div>
        <div className="navItem" onClick={() => (isAtMain() ? scrollToElem('bottom') : (window.location = '/info'))}>
          <span>The Science</span>
        </div>
        <div className="navItem" id="register" onClick={(event) => handleMeditationClick(event)}>
          <span>Meditate</span>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
