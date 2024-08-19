import React from "react";
import './body.css';
import { Carousell } from './carousell/Carousell';
import { Footer } from './footer/Footer';
import { Intro } from './intro/Intro';
import { Contact } from './contact/Contact';
import { Posts } from './posts/Posts';

export const Body = () => {
    return (
        <div className="big-wrapper">
         <Intro id="Intro" />
         <Carousell id="carousell" />
         <Posts id="posts" />
         <Contact id="Contact" />
         <Footer />
        </div>
    );
};

export default Body;