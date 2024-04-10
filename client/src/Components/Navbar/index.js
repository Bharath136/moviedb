import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Movie</div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/upcoming">Upcoming</Link></li>
      </ul>
      
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
