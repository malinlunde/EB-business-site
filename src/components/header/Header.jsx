import React, { useState } from 'react';
import './header.css';
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    const isHashLink = path.startsWith('/#');
    const cleanPath = path.replace('/#', '');

    setIsOpen(false);

    if (isHashLink) {
      if (window.location.pathname !== '/') {
        navigate('/');
      }
      
      setTimeout(() => {
        const element = document.getElementById(cleanPath);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Adjust the delay if necessary
    } else {
      navigate(path);
    }
  };
  
  return (
    <header className='header'>
      <div className='headerbox'>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className='nav-link' onClick={() => handleNavigation('/')}>Hem</Link>
            </li>
            <li>
              <Link to="/About" className='nav-link' onClick={() => handleNavigation('/About')}>Om mig</Link>
            </li>
            <li>
              <span className='nav-link' onClick={() => handleNavigation('/#carousell')}>Projekt</span> 
            </li>
            <li>
              <span className='nav-link' onClick={() => handleNavigation('/#posts')}>Instagram</span>
            </li>
            <li>
              <span className='nav-link' onClick={() => handleNavigation('/#contact')}>Kontakt</span>
            </li>
          </ul>
        </nav>
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;