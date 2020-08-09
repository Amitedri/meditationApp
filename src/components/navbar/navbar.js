import React from 'react';
import './navbar.css';
import chakraBlue from '../../assets/chakraBlue.png';
import chakraRed from '../../assets/chakraRed.png'
import chakraGreen from '../../assets/chakraGreen.png'
import chakraYellow from '../../assets/chakraYellow.png'
import chakraOrange from '../../assets/chakraOrange.png'
import chakraBlue2 from '../../assets/chakrablue2.png'
import chakraPurple from '../../assets/chakraPurple.png'

const NavBar = ()=>{

    return(
        <div className='navContainer'>
            <div className='navChakra'>
            <div className='charkaContainer'>
                <img src={chakraBlue}/>
                <span style={{color:"lightblue",borderBottom:'1px solid lightblue',padding:'5px 5px'}}>Throat</span>
            </div>
            <div className='charkaContainer'>
                <img src={chakraRed}/>
                <span style={{color:"red",borderBottom:'1px solid red',padding:'5px 5px'}}>Root</span>
            </div>
            <div className='charkaContainer'>
                <img src={chakraGreen}/>
                <span style={{color:"green",borderBottom:'1px solid green',padding:'5px 5px'}} >Heart</span>
            </div>
            <div className='charkaContainer'>
                <img src={chakraYellow}/>
                <span style={{color:"#bdbd62",borderBottom:'1px solid #bdbd62',padding:'5px 5px'}}>Plexux</span>
            </div>
            <div className='charkaContainer'>
                <img src={chakraOrange}/>
                <span style={{color:"orange",borderBottom:'1px solid orange',padding:'5px 5px'}}>Sacral</span>
            </div>
            <div className='charkaContainer'>
                <img src={chakraBlue2}/>
                <span style={{color:"blue",borderBottom:'1px solid blue',padding:'5px 5px'}}>third eye</span>
            </div>
            <div className='charkaContainer'>
                <img src={chakraPurple}/>
                <span style={{color:"purple",borderBottom:'1px solid purple',padding:'5px 5px'}}>Crown</span>
            </div>
            </div>
        </div>
    )
}

export default NavBar;