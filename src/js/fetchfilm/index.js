import NewFilms from './fetch.js';
import {fetchGenre} from './genre.js';

const form = document.querySelector(".search-form");
const input = document.querySelector('.search-field');
const gallery = document.querySelector(".gallary");
console.log(gallery);
console.log(input);

const newFilms = new NewFilms();

console.log(newFilms);

form.addEventListener("submit", onSubmit);

async function onSubmit(evt){
    evt.preventDefault();
    fetchGenre();
             
    newFilms.name = input.value.trim();
    newFilms.fetch()
  .then(data => {
    return data.results;
  })
  .then(results => {gallery.innerHTML = createMarkup(results);});
}

    

function createMarkup(results){
    const markup = results.map(({title, poster_path, release_date = "2021-01-01", genre_ids}) => {
        const url = `https://image.tmdb.org/t/p/w500`;
        const date = release_date.slice(0, 4);
        const genreItems = JSON.parse(localStorage.getItem("genre")).genres;
          let newName = [];
        for (const genre of genreItems){
          for (const el of genre_ids){
          if (genre.id === el){
            newName.push(genre.name);} }          
      }
      genre_ids = newName.slice(0, 2);
        return `
        
       <div class="film-card">
       <a class="gallery__link" href="${url}${poster_path}">
       <img class="gallery__image" src="${url}${poster_path}" alt="${title}" loading="lazy" />
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
     </div>`;}).join("");
    return markup;
     
 }