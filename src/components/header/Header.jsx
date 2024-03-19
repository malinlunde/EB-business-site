import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
            <Link to="/" className="header-link">Hem</Link>
                <Link to="/Posts" className="header-link">Mina inlägg</Link>
                <Link to="/About" className="header-link">Om mig</Link> 
            </div>
        </header>
    );
};

export default Header;