import NewFilms from './fetch.js';
import { fetchGenre } from './genre.js';
import { createMarkup } from '../markupCard.js';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-field');
const gallery = document.querySelector('.gallary');
console.log(gallery);
console.log(input);
export let is_search = false;
export let query_line = '';
const newFilms = new NewFilms();

console.log(newFilms);

form.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
  evt.preventDefault();
  fetchGenre();
  is_search = true;
  query_line = input.value.trim();
  newFilms.name = query_line;
  newFilms
    .fetch(1)
    .then(data => {
      return data.results;
    })
    .then(results => {
      gallery.innerHTML = createMarkup(results);
    });
}

