import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // We'll add small CSS for mobile

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" onClick={() => setIsOpen(false)}>Travel Adventures</Link>
        </div>
        
        {/* Burger Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'line open' : 'line'}></div>
          <div className={isOpen ? 'line open' : 'line'}></div>
          <div className={isOpen ? 'line open' : 'line'}></div>
        </div>

        {/* Menu Links */}
        <div className={`menu-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/trip1" onClick={() => setIsOpen(false)}>Trip 1</Link>
          <Link to="/trip2" onClick={() => setIsOpen(false)}>Trip 2</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
