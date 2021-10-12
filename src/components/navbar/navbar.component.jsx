import React from 'react';
import './navbar.styles.css';

//assets
import {ReactComponent as Logo} from '../../assets/Logo.svg';


const Navbar = () => {
  return (
    <div className="navbar">
      <Logo/>
      <div className="dashboard-btn">Dashboard</div>
    </div>
  )
}


export default Navbar;
