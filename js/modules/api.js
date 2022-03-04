/* Valde att lägga api't separat då det är en 
egen funktion som kan återanvändas i andra projekt*/

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/';

async function getApiKey () {
    const KEY_URL = BASE_URL + 'keys';
    try {
        const response = await fetch(KEY_URL, {
            method: 'POST' });
        const data = await response.json();
        return data.key;
    } catch {
        console.error('Error');
    }
}

async function getPlanets() {
    const API_KEY = await getApiKey();
    const BODIES_URL = BASE_URL + 'bodies';
    try {
        let response = await fetch(BODIES_URL, {
        method: 'GET',
        headers: {'x-zocom': `${API_KEY}`}
        });
        const data = await response.json();
        return data.bodies;
    } catch {
        console.error('Error');
    }
}

export {getPlanets};