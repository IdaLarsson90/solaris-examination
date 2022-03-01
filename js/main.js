const planetsContainerElem = document.querySelector('.planets');
const planetGradientElem = document.querySelector('.planet__gradient');

import { getApiKey } from "./modules/api.js";
import { createOverlayContent } from "./modules/overlay.js";

const planets = await getApiKey();
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

    while (planetGradientElem.firstElementChild) {
        planetGradientElem.removeChild(planetGradientElem.firstElementChild);
    }
}

export {hideOverlay}