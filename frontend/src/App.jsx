import React from 'react';
import './App.css';
import { Body } from '../src/components/Body';
import { Posts } from '../src/components/posts/Posts';
import { About } from '../src/components/about/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/Posts' element={<Posts />} />
                <Route path='/About' element={<About />} />
                <Route path='/' element={<Body />} />
            </Routes>
        </Router>
    );
};

export default App;