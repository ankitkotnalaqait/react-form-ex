import React from 'react';
import './component.header.css'
import logo from './0JKSf2-circle-icon.png'

class Header extends React.Component{
    render(){
     return(
        <div className='header'>
            <div className='header-icon'>
                <img className='header-icon-image' src={logo} alt='header icon'></img>
            </div>
        </div>
      );
    }
}

export default Header;