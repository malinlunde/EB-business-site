import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Body } from './components/Body';
import { About } from './components/about/About';
import { ProjectPage } from './components/projectpage/ProjectPage';
import { Header } from './components/header/Header';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/About' element={<About />} />
                <Route path='/project/:id' element={<ProjectPage />} />
                <Route path='/' element={<Body />} />
            </Routes>
        </Router>
    );
};

export default App;