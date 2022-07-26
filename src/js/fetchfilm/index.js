import NewFilms from './fetch.js';
import { fetchGenre } from './genre.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
      let totalResults = data.total_results;
      if (data.results.length === 0) {
        Notify.failure('Nothing found according to your request!Please try again.');
      } else {
        Notify.success(`${totalResults}films found for your request`);
      }
      localStorage.setItem("array-films", JSON.stringify(data.results));
      arrayJSON  = localStorage.getItem("array-films");
      return data.results;
    })
    .then(results => {
      gallery.innerHTML = createMarkup(results);
    });
}

function createMarkup(results) {
  const markup = results
    .map(({ title, poster_path, release_date = '2021-01-01', genre_ids =[] }) => {
      const url = `https://image.tmdb.org/t/p/w500`;
      const date = release_date ? release_date.slice(0, 4) : 'No information';
      const genreItems = JSON.parse(localStorage.getItem('genre')).genres;
      let newName = [];
      for (const genre of genreItems) {
        for (const el of genre_ids) {
          if (genre.id === el) {
            newName.push(genre.name);
          }
        }
      }
      genre_ids = newName.slice(0, 2);
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
         <b class="genre"> ${genre_ids} </b>

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
