import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => (
  <div>

    <nav className="navbar">
      <div className="links">
        <div className="logo">
          <img src={logo} className="logo-pic" alt="spacehub-logo" />
          <h1 className="logo-title">Space Travelers&apos Hub</h1>
        </div>
        <ul>
          <li><Link to="/">Rockets</Link></li>
          <li><Link to="/missions">Missions</Link></li>
          <li><Link to="/profile">My profile</Link></li>
        </ul>
      </div>
    </nav>

  </div>
);

export default Navigation;
