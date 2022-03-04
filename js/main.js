const planetsContainerElem = document.querySelector('.planets');


import { getPlanets } from "./modules/api.js";
import { createOverlayContent } from "./modules/overlay.js";

const planets = await getPlanets();
const overlayElem = document.querySelector('.overlay');

showPlanets();

function showPlanets () {
    planets.forEach(planet => {
        const planetItem = document.createElement('div');
        planetsContainerElem.appendChild(planetItem);
        planetItem.classList.add(`planet`, `planet__${planet.latinName.toLowerCase()}`, `planet__${planet.latinName.toLowerCase()}--color`);
        planetItem.addEventListener('click', () => {
            showOverlay(planet);
        });
    });
}

function showOverlay(planet) {
    overlayElem.classList.add('show');
    createOverlayContent(planet);
}

function hideOverlay() {
    overlayElem.classList.remove('show');
    
    const innerPlanetElem = document.querySelector('.planet--inner');
    const middlePlanetElem = document.querySelector('.planet--middle');
    const outerPlanetElem = document.querySelector('.planet--outer');

    innerPlanetElem.className = "planet planet__solis planet--inner";
    middlePlanetElem.className = "planet planet--middle";
    outerPlanetElem.className = "planet planet--outer";
}

export {hideOverlay};