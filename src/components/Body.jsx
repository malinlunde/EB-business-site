import React from "react";
import './body.css';
import { Carousell } from './carousell/Carousell';
import { Footer } from './footer/Footer';
import { Intro } from './intro/Intro';
import { Contact } from './contact/Contact';

export const Body = () => {
    return (
        <div className="big-wrapper">
         <Intro id="Intro" />
         <Carousell id="carousell" />
         <Contact id="Contact" />
         <Footer />
        </div>
    );
};

export default Body;