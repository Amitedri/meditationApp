import React from 'react';
import './Navbar.css';
import menu from '../../Assets/menu (1).svg';
import { AccountButtons,LogoutButton,MobileNav,LargeNav } from './components';
import {scrollToElem,showModal} from './Utils'
import MobileMenu from './MobileMenu';


const Navbar = ({ isAuth, logout, redirect }) => {
  let isAtMain = () => (window.location.pathname !== '/' ? false : true);
  const [isOpen, setIsOpen] = React.useState(false);



  return (LargeNav(MobileNav,isAtMain,scrollToElem,isAuth,redirect,showModal,LogoutButton,AccountButtons,isOpen,MobileNav,LargeNav,logout,setIsOpen, menu));
};

export default Navbar;
