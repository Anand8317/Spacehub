import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to="/">Rockets</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to="/missions">Missions</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to="/profile">My profile</NavLink></li>
        </ul>
      </div>
    </nav>

  </div>
);

export default Navigation;
