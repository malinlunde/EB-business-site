import React from "react";
import './body.css';
import { Skills } from './skills/Skills';
import { Carousell } from './carousell/Carousell';
import { Footer } from './footer/Footer';
import { Intro } from './intro/Intro';
import { Contact } from './contact/Contact';

export const Body = () => {
    return (
        <div className="big-wrapper">
         <Intro id="Intro" />
         <Carousell id="carousell" />
         <Skills />
         <Contact id="Contact" />
         <Footer />
        </div>
    );
};

export default Body;