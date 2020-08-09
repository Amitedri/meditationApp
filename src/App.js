import React from 'react';
import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/navbar';
import PersonalPage from './components/personalPage/personalPage'
function App() {
  return (
    <>
    <NavBar/>    
    {/* <Home/> */}
    <PersonalPage/>
    </>
  );

}

export default App;
