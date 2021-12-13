import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async() => {
    const dogs = await getDogs();
    // fetch all dogs
    for (let dog of dogs) {
        const dogEl = document.createElement('div');
        const nameEl = document.createElement('p');
        const dogImg = document.createElement('img');

        dogEl.classList.add('dog-selection');
        dogEl.href = `./dogs/?id=${dog.id}`;
        nameEl.textContent = dog.name;
        dogImg.src = `./assets/${dog.breed}.jpeg`;

        dogEl.append(nameEl, dogImg);
        dogListContainer.append(dogEl);
    }
});
// render and append all dog cards to the container
