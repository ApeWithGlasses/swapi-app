import { swapiService } from '../services/swapiService.js';
import { createPeopleCards } from '../services/createPeopleCards.js';

const element = document.querySelector('.cards__container');

let section = [
    'people/',
    'starships/'
];

swapiService(section[0]).then((response) =>{
    createPeopleCards(element, response);
});

