import React from "react";
import './body.css';
import { Skills } from './skills/Skills';
import { Carousell } from './carousell/Carousell';
import { Footer } from './footer/Footer';
import { Intro } from './intro/Intro';

export const Body = () => {
    return (
        <div classname="big-wrapper">
         <Intro />
         <Skills />
         <Carousell />
         <Footer />
        </div>
    );
};

export default Body; 