import React from 'react';
export const AccountButtons = (showModal) => {
  return (
    <div className="accountControllers">
      <span className="loginButton" id="login" onClick={(event) => showModal(event, 'showModal')}>
        Login
      </span>
      <span className="registerButton" id="register" onClick={(event) => showModal(event, 'showModal')}>
        Register
      </span>
    </div>
  );
};
export const LogoutButton = (logout) => {
  return (
    <div className="accountControllers">
      <button className="buttonWrapper logout" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

export const MobileNav = (setIsOpen, menu) => {
  return (
    <div className="mobile" onClick={(event) => setIsOpen((prevState) => !prevState)}>
      <img src={menu} alt={menu} />
    </div>
  );
};

export const LargeNav = (MobileNav, isAtMain, scrollToElem, isAuth, redirect, showModal, LogoutButton, AccountButtons, isOpen, MobileMenu, LargeNav,logout,setIsOpen,menu) => {
  return (
    <div className="navbarContainer">
      {MobileNav(setIsOpen, menu)}
      <div className="navigationControllers">
        <button className="buttonWrapper" onClick={() => (isAtMain() ? scrollToElem('top') : (window.location = '/'))}>
          Home
        </button>
        <button className="buttonWrapper" onClick={() => (isAtMain() ? scrollToElem('mid') : (window.location = '/howToMeditate'))}>
          How to
        </button>
        <button className="buttonWrapper" onClick={() => (isAtMain() ? scrollToElem('bottom') : (window.location = '/info'))}>
          The Science
        </button>
        <button className="buttonWrapper" id="register" onClick={(event) => (isAuth ? redirect('/meditate') : showModal(event, 'showModal'))}>
          Meditate
        </button>
      </div>
      {isAuth ? LogoutButton(logout) : AccountButtons(showModal)}
      {isOpen && MobileMenu(isAuth, logout, isAtMain)}
    </div>
  );
};
