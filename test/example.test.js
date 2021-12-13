/* eslint-disable no-useless-escape */
// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=2"><div class="dog-card"><p>buff</p><img src="./assets/good.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let dog = {
        name: 'buff',
        id: 2,
        breed: 'good'
    };

    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('this function', (expect) => {

    const expected = `<div class=\"dog-detail\"><p class=\"name\">bite</p><img src=\"../assets/fancy.jpeg\"><div class=\"age-and-breed\"><p class=\"age\">14 years old</p><p class=\"breed\">fancy</p></div><p class=\"description\">what a good doggie</p></div>`;

    let dog = {
        name: 'bite',
        description: 'what a good doggie',
        age: 14,
        breed: 'fancy'
    };
    
    const actual = renderDogDetail(dog);

    expect.equal(actual.outerHTML, expected);
});