import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const dog = await getDog(id);

    const dogEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    const dogImg = document.createElement('img');

    dogEl.classList.add('dog-detail');
    nameEl.classList.add('name');
    ageEl.classList.add('age');
    breedEl.classList.add('breed');
    descriptionEl.classList.add('descript');

    nameEl.textContent = dog.name;
    ageEl.textContent = `${dog.age} years young`;
    breedEl.textContent = dog.breed;
    descriptionEl.textContent = dog.description;
    dogImg.src = `../assets/${dog.breed}`;
    
    // render and append this dog's details to the container
    dogEl.append(nameEl, ageEl, breedEl, descriptionEl, dogImg);
    dogDetailContainer.append(dogEl);
});
// get the id from URL
// use the id to fetch the dog
