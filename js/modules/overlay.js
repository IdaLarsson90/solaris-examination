/* Här lade jag all kod som hör till att skapa overlayen */

const overlayElem = document.querySelector('.overlay');
const planetGradientElem = document.querySelector('.planet__gradient');

import {hideOverlay} from "../main.js";

function createOverlayContent (planet) {
    const planetInfoElem = document.querySelector('.planet__info');
    const planetNameElem = document.querySelector('.planet__name');
    const planetLatinNameElem = document.querySelector('.planet__latin');
    planetInfoElem.innerText = planet.desc;
    planetNameElem.innerText = planet.name;
    planetLatinNameElem.innerText = planet.latinName;
    createPlanet(planet);
    createNumbersContent(planet);
    createMoonsContent(planet);
    
}

function createNumbersContent(planet) {
    const circumferenceElem = document.querySelector('.circumference');
    const distanceElem = document.querySelector('.distance');
    const maxTemperatureElem = document.querySelector('.max-temperature');
    const minTemperatureElem = document.querySelector('.min-temperature');

    circumferenceElem.innerText = `${planet.circumference} km`;
    distanceElem.innerText = `${planet.distance} km`;
    maxTemperatureElem.innerText = `${planet.temp.day} C`;
    minTemperatureElem.innerText  = `${planet.temp.night} C`;
} 

function createMoonsContent(planet){
    const moonsElem = document.querySelector('.moons > section');
    while (moonsElem.firstElementChild) {
        moonsElem.removeChild(moonsElem.firstElementChild);
    }
    let moons = planet.moons;
    for (let i = 0; i < moons.length; i++) {
        const moon = moons[i];
        moonsElem.insertAdjacentHTML("beforeend", `<p>${moon}</p>`);
    }
}

function createPlanet(planet){
    
    
    const planetItem = document.createElement('div');
    planetGradientElem.appendChild(planetItem);
    planetItem.classList.add(`planet`, `planet--outer`, `planet__${planet.latinName.toLowerCase()}--color`);
    
    const planetMiddleItem = document.createElement('div');
    planetGradientElem.appendChild(planetMiddleItem);
    planetMiddleItem.classList.add(`planet`,`planet--middle`, `planet__${planet.latinName.toLowerCase()}--color`);
    
    const planetOuterItem = document.createElement('div');
    planetGradientElem.appendChild(planetOuterItem);
    planetOuterItem.classList.add(`planet`, `planet__solis`, `planet--inner`, `planet__${planet.latinName.toLowerCase()}--color`);
    planetItem.addEventListener('click', () => {
        hideOverlay();
    });
    planetMiddleItem.addEventListener('click', () => {
        hideOverlay();
    });
    planetOuterItem.addEventListener('click', () => {
        hideOverlay();
    });
}

export {createOverlayContent};