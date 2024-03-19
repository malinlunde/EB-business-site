import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Body } from './components/Body';
import { Posts } from './components/posts/Posts';
import { About } from './components/about/About';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Hem</Link>
                    </li>
                    <li>
                        <Link to="/Posts">Mina inlägg</Link>
                    </li>
                    <li>
                        <Link to="/About">Om mig</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/Posts' element={<Posts />} />
                <Route path='/About' element={<About />} />
                <Route path='/' element={<Body />} />
            </Routes>
        </Router>
    );
};

export default App;