import React, { useState } from 'react';
import './carousell.css';
import { Link } from 'react-router-dom';
import leftArrow from '../images/leftarrow.png';
import rightArrow from '../images/rightarrow.png';
import BruksholmenHeader from '../images/Bruksholmen.svg';
import bruksholmen from '../images/bruksholmen.jpeg';
import bruksholmen1 from '../images/bruksholmen1.jpg';
import bruksholmen2 from '../images/bruksholmen2.jpg';
import bruksholmen3 from '../images/bruksholmen3.jpg';
import bruksholmen4 from '../images/bruksholmen4.jpg';
import bruksholmen5 from '../images/bruksholmen5.jpg';
import bruksholmen6 from '../images/bruksholmen6.jpg';
import bruksholmen7 from '../images/bruksholmen7.jpg';
import bruksholmen8 from '../images/bruksholmen8.jpg';
import bruksholmen9 from '../images/bruksholmen9.jpg';
import weddingheader from '../images/weddingheader.svg';
import wedding1 from '../images/wedding1.jpeg';
import wedding2 from '../images/wedding2.jpeg';
import interior from '../images/Interior.svg';
import nyttkontor1 from '../images/nyttkontor1.jpeg';
import nyttkontor2 from '../images/nyttkontor2.jpeg';
import nyttkontor3 from '../images/nyttkontor3.jpeg';
import singerheader from '../images/Singer .svg';
import skidorheader from '../images/Skidor.svg';
import skidor1 from '../images/skidor.jpeg';
import skidor2 from '../images/skidor2.jpg';
import skidor3 from '../images/skidor3.jpg';
import singer1 from '../images/singer1.jpg';



const projects = [
    { 
        id: 1, 
        title: 'Bruksholmen Forssjö', 
        description: 'Från bryggan vid Forssjöbadet såg jag de tomma vackra gamla brukslokalerna. Dem renoverades och vi kunde flytta in...', 
        images: [
            bruksholmen,
            bruksholmen1,
            bruksholmen2,
            bruksholmen3,
            bruksholmen4,
            bruksholmen5,
            bruksholmen6,
            bruksholmen7,
            bruksholmen8,
            bruksholmen9,
        ],
        headerImage: BruksholmenHeader,
        additionalText: 'Från bryggan vid Forssjöbadet såg jag de tomma vackra gamla brukslokalerna. Dem renoverades och vi kunde flytta in. Vi skapade en restaurang med dagens lunch, a la carte meny, napolitansk pizza, goda drycker och smarriga bakverk. En inredningsbutik/klädbutik med utvalda favoriter. En 24-food butik där vi sålde våra egna matlådor och tog vara på det som annars hade blivit svinn. Eventloge där vi anordnade konserter med kända svenska artister tack vare samarbete med Henrik Olsson. Vi anordnade även trädgårdsfest med liveband, afterski-fester, stand-up samt bröllop och privata fester. Under våren blev logen istället en blomsterloge med trädgårdshandel. Mitt mål var att skapa ”Ett café med Napolitansk pizza fullt av snygg inredning som gick att köpa samtidigt som ett lokalt eller stort band/artist stod på en liten scen och gav oss en magisk upplevelse. Viktigt är att det blir en plats att träffa nya bekantskaper och en familjär känsla med stammisar.”'
    }, 
    { 
        id: 2, 
        title: 'Event- & bröllopskoordinator', 
        description: 'Planerar ni er stora dag eller kanske en större fest?', 
        images: [
            wedding1,
            wedding2,
        ],
        headerImage: weddingheader,
        additionalText: 'Planerar ni er stora dag eller kanske en större fest men saknar en samordnare eller lite hjälp i starten. Boka ett möte med mig så gör vi en första plan. Ibland stannar vi där eller så önskar ni hjälp ända till städningen efter festen, här bestämmer ni förutsättningarna. Är det dags för er förening att skapa en årsdag eller kanske önskar ni ha en artist på er scen, event av alla dess slag är min absoluta styrka.'
    }, 
    { 
        id: 3, 
        title: 'Projektledare & Inredning', 
        description: 'Nätverk och mötet med nya människor har alltid drivit mig framåt...', 
        images: [
            nyttkontor1,
            nyttkontor2,
            nyttkontor3,
        ],
        headerImage: interior,
        additionalText: 'Nätverk och mötet med nya människor har alltid drivit mig framåt. Projektledarrollen ger mig möjlighet att tillsammans med fantastiska personer anordna meditativa träffar, event, bröllop, styling mm. Se mer om vad jag kan erbjuda och vad jag gjort här på sidan.'
    }, 
    { 
        id: 4, 
        title: 'Sångerska', 
        description: 'Att få förtroendet att sjunga någons favoritsång på en högtidsdag är en ynnest.', 
        images: [
            singer1,
        ],
        headerImage: singerheader,
        additionalText: 'Att få förtroendet att sjunga någons favoritsång på en högtidsdag är en ynnest. Anlita mig gärna som sångerska till ditt bröllop, dop eller vid begravning. Självklart skickas ljudfiler innan ni bestämmer er. Jag har även kontakt med musiker för komp.'
    }, 
    { 
        id: 5, 
        title: 'Skidlärare', 
        description: 'Nybörjare eller vill utbeckla din teknik?',
        images: [
            skidor1,
            skidor2,
            skidor3,
        ],
        headerImage: skidorheader,
        additionalText: 'Efter slalomutbildningar och arbete som skidlärare i Idre lär jag mer än gärna ut mina kunskaper. Är du nybörjare eller önskar utveckla din teknik, kontakta mig så skapar vi minnen tillsammans.',
    },  
];

export const Carousell = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const nextProject = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
    };


    return (
        <section className="carousell">
            <div className="navigation">
                <button className="prev-button" onClick={prevProject}>
                    <img src={leftArrow} alt="Previous" />
                </button>
            </div>
            <div className="carousell-content">
                <div className="project-item">
                    <h2>{projects[currentProjectIndex].title}</h2>
                    <p>{projects[currentProjectIndex].description}</p>
                    <img src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].title} />
                    <Link className="see-more-link" to={`/project/${projects[currentProjectIndex].id}`}>Läs mer...</Link> 
                </div>
            </div>
            <div className="navigation">
                <button className="next-button" onClick={nextProject}>
                    <img src={rightArrow} alt="Next" />
                </button>
            </div>
        </section>
    );
};

export default Carousell;