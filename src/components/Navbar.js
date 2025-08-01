import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;