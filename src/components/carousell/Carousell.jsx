import React, { useState } from 'react';
import './carousell.css';
import { Link } from 'react-router-dom';

// Uppdatera sökvägar till bilder på servern
const leftArrow = 'https://ericaborjesson.se/upload/dist/assets/leftarrow.png';
const rightArrow = 'https://ericaborjesson.se/upload/dist/assets/rightarrow.png';
const BruksholmenHeader = 'https://ericaborjesson.se/upload/dist/assets/Bruksholmen.svg';
const bruksholmen7 = 'https://ericaborjesson.se/upload/dist/assets/bruksholmen7.png';
const bruksholmen8 = 'https://ericaborjesson.se/upload/dist/assets/bruksholmen8.png';
const bruksholmen3 = 'https://ericaborjesson.se/upload/dist/assets/bruksholmen3.png';
const bruksholmen6 = 'https://ericaborjesson.se/upload/dist/assets/bruksholmen6.png';
const bruksholmen4 = 'https://ericaborjesson.se/upload/dist/assets/bruksholmen4.png';
const bruksholmen5 = 'https://ericaborjesson.se/upload/dist/assets/bruksholmen5.jpg';
const weddingheader = 'https://ericaborjesson.se/upload/dist/assets/weddingheader.svg';
const wedding1 = 'https://ericaborjesson.se/upload/dist/assets/wedding1.png';
const wedding2 = 'https://ericaborjesson.se/upload/dist/assets/wedding2.png';
const interior = 'https://ericaborjesson.se/upload/dist/assets/Interior.svg';
const nyttkontor2 = 'https://ericaborjesson.se/upload/dist/assets/nyttkontor2.png';
const nyttkontor3 = 'https://ericaborjesson.se/upload/dist/assets/nyttkontor3.png';
const singerheader = 'https://ericaborjesson.se/upload/dist/assets/Singer.svg';
const skidorheader = 'https://ericaborjesson.se/upload/dist/assets/Skidor.svg';
const skidor1 = 'https://ericaborjesson.se/upload/dist/assets/skidor.png';
const skidor2 = 'https://ericaborjesson.se/upload/dist/assets/skidor2.png';
const skidor3 = 'https://ericaborjesson.se/upload/dist/assets/skidor3.png';
const singer1 = 'https://ericaborjesson.se/upload/dist/assets/singer1.png';

// Projektdata med uppdaterade bild-URL:er
export const projects = [
    { 
        id: 1, 
        title: 'Bruksholmen Forssjö', 
        description: 'Från bryggan vid Forssjöbadet såg jag de tomma vackra gamla brukslokalerna. Dem renoverades och vi kunde flytta in...', 
        images: [
            bruksholmen7,
            bruksholmen8,
            bruksholmen3,
            bruksholmen6,
            bruksholmen4,
            bruksholmen5,
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
        <section className="carousell" id="carousell" >
            <div className="title">
                <h2>{projects[currentProjectIndex].title}</h2>
            </div>
            <div className="header-row">
                <button className="prev-button" onClick={prevProject}>
                    <img src={leftArrow} alt="Previous" className='left-arrow-img'/>
                </button>
                <div className="project-image">
                    <img src={projects[currentProjectIndex].headerImage} alt={projects[currentProjectIndex].title} />  
                </div>
                <button className="next-button" onClick={nextProject}>
                    <img src={rightArrow} alt="Next" className='right-arrow-img'/>
                </button>
            </div>
            <div className="description">
                <p>{projects[currentProjectIndex].description}</p>
            </div>
            <div className="link">
                <Link className="see-more-link" to={`/project/${projects[currentProjectIndex].id}`}>Läs mer...</Link>
            </div>
        </section>
    );
};

export default Carousell;