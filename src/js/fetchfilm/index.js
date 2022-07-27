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

function createMarkup(results) {
  const markup = results
    .map(({ title, poster_path, release_date = '2021-01-01', genre_ids }) => {
      const url = `https://image.tmdb.org/t/p/w500`;
      const date = release_date ? release_date.slice(0, 4) : 'No information';
      const genreItems = JSON.parse(localStorage.getItem('genre')).genres;

      let genreNames = genreItems.filter(genre => genre_ids.includes(genre.id))
        .map(genre => genre.name);
      if (genreNames.length > 2) {
        genreNames = genreNames.slice(0, 2).concat(['other...']);
      }
      else if (genreNames.length === 0) {
        genreNames = ['No information'];
      }
      genreNames = genreNames.join(', ');

      return `

      <div class="film-card">
      <a class="gallery__link" href="${url}${poster_path}">
      <img class="gallery__image" src=${
        poster_path !== null
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : `https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`
        } alt="${title}" loading="lazy" />
        </a>
        <div class="info">
        <h2 class="title">
        ${title}
        </h2>
        <p class="info-description">
        <b class="genre"> ${genreNames} </b>
        <b> | </b>
        <b class="yers">
        ${date}
        </b>
        </p>

        </div>
        </div>`;
    })
    .join('');
  return markup;
}
