import PopulаrFilms from './fetchPopular.js';
import {fetchGenre} from '../fetchfilm/genre.js'

const gallery = document.querySelector('.gallary')

const populаrFilms = new PopulаrFilms();
console.log(populаrFilms)


    fetchGenre()
    populаrFilms.fetch()
  .then(data => {
    console.log(data.results)
    return data.results
  })
  .then(results => {gallery.innerHTML = createMarkup(results)})


   

function createMarkup(results){
    const markup = results.map(({title, backdrop_path, release_date = "2021-01-01", genre_ids}) => {
        const url = `https://image.tmdb.org/t/p/w500`
        const date = release_date.slice(0, 4)
        const genreItems = JSON.parse(localStorage.getItem("genre")).genres
          let newName = []
        for (const genre of genreItems){
          for (const el of genre_ids){
          if (genre.id === el){
            newName.push(genre.name)} }          
          }
        genre_ids = newName.slice(0,2)
        return `
        
       <div class="film-card">
       <a class="gallery__link" href="${url}${backdrop_path}">
       <img class="gallery__image" src="${url}${backdrop_path}" alt="${title}" loading="lazy" />
       </a>
       <div class="info">
         <h2 class="title">
            ${title}
         </h2>
         <p class="genre">
           ${genre_ids}
         </p>
         <p class="yers">
           ${date}
         </p>
         
       </div>
     </div>`;}).join("");
    return markup;
     
     
 };