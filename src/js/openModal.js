import {closeOnClick, modalKeypressEsc}  from './modalClose';
import {watchTrailer} from './modalTrailer';
import  PopulаrFilms  from './popular/fetchPopular.js';
import { makeModalCard } from "./markupModalCard.js";


const galleryList = document.querySelector('.js-gallery-list');
const modalBackdrop = document.querySelector('.js-backdrop');
const modal = document.querySelector('.js-modal');
const trailerBackdrop = document.querySelector('.js-backdrop-trailer');
const trailerIframe = document.querySelector('.js-trailer');
const cardContainer = document.querySelector('.card-container');
const btnwatched = document.querySelector('.modal-btn-watched')
console.log(btnwatched)
const btnqueue = document.querySelector('.modal-btn-queue')




galleryList.addEventListener('click', onCardClick);
modalBackdrop.classList.add("is-hidden");

const populаrFilms = new PopulаrFilms();
let arrayJSON;
let dataFilms;
let film;

function onCardClick(event) {
  const isCardMovie = event.target.closest('.gallery-items');
  if (!isCardMovie) {
    return;
  }
  let idFilm=isCardMovie.dataset.modal;
  onOpenModal(idFilm);
}

function findGenre(obj) {
  let arrayGenre = obj.genre_ids;
  let g = arrayGenre[0];
  let genreFilms = JSON.parse(localStorage.getItem("genre")).genres;
  let currentGenre = genreFilms.find(item => item.id === g);
  if (!currentGenre) {
    return "Other";
  }
return currentGenre.name;
}

function onOpenModal(id) {
  event.preventDefault();
  document.addEventListener('keydown', modalKeypressEsc);
  modalBackdrop.addEventListener('click', closeOnClick);

  modalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  let needId = Number(id);
  arrayJSON = localStorage.getItem("array-films");
  dataFilms = JSON.parse(arrayJSON);
  film = dataFilms.find(film => film.id === needId);
  let genre_ids = findGenre(film);
  modal.insertAdjacentHTML("beforeend", "<div> </div>")
  modal.insertAdjacentHTML("afterbegin", makeModalCard(film,genre_ids));
  
  
//   populаrFilms.fetch(1)
//     .then(search => {
//       let api = search.results;
//       return api;
   
//     })
//     .then(api => {
//       console.log(api);
//     })
// .then(movie => {
//     let currentPageLanguage = localStorage.getItem('language');

//     if (currentPageLanguage === 'en-US') {
//       cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplates(movie));
//     } else if (currentPageLanguage === 'ru-RU') {
//       cardContainer.insertAdjacentHTML('beforeend', aboutMovieTemplatesRU(movie));

//     }
//     const w = localStorageAPI.check(localStorageAPI.KEYS.WATCHED, movie);
//     const q = localStorageAPI.check(localStorageAPI.KEYS.QUEUE, movie);
//     if (w) {
//       document.querySelector('.js-modal-btn-watched').classList.toggle('visually-hidden');
//       document.querySelector('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
//     }

//     document.querySelector('.js-modal-btn-watched').addEventListener('click', onWatchedAdd);
//     function onWatchedAdd(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.nextElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.set(localStorageAPI.KEYS.WATCHED, movie);
//     }

//     document
//       .querySelector('.js-modal-btn-remove-watched')
//       .addEventListener('click', onWatchedRemove);
//     function onWatchedRemove(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.previousElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.delete(localStorageAPI.KEYS.WATCHED, movie);
//     }

//     if (q) {
//       document.querySelector('.js-modal-btn-queue').classList.toggle('visually-hidden');
//       document.querySelector('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
//     }

//     document.querySelector('.js-modal-btn-queue').addEventListener('click', onQueueAdd);
//     function onQueueAdd(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.nextElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.set(localStorageAPI.KEYS.QUEUE, movie);
//     }

//     document.querySelector('.js-modal-btn-remove-queue').addEventListener('click', onQueueRemove);
//     function onQueueRemove(event) {
//       event.target.classList.toggle('visually-hidden');
//       event.target.previousElementSibling.classList.toggle('visually-hidden');
//       localStorageAPI.delete(localStorageAPI.KEYS.QUEUE, movie);
//     }
//     document.querySelector('.modal-img-play')
//       .addEventListener('click', watchTrailer);
//   });


}
   
btnwatched.addEventListener('click', onWatchedClick)

let filmList = []

function onWatchedClick(evt){
  evt.preventDefault()
  const filmObj = film
  filmList.push(filmObj) 
  console.log(filmList)
  localStorage.setItem('watched', JSON.stringify(filmList)) 
  }

  btnqueue.addEventListener('click', onQueueClick)

let filmQueueList = []

function onQueueClick(evt){
  evt.preventDefault()
  const filmQueueObj = film
  filmQueueList.push(filmQueueObj) 
  console.log(filmQueueList)
  localStorage.setItem('queue', JSON.stringify(filmQueueList)) 
  }

let list = new Array();
class localStorageAPI {
  constructor() {}
  static get KEYS() {
    return {
      WATCHED: 'watched',
      QUEUE: 'queue',
      THEME: 'theme',
    };
  }
  static get(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  static set(key, Obj) {
    if (!localStorageAPI.get(key)) {
      list.push(Obj);
      localStorage.setItem(key, JSON.stringify(list));
      list = [];
      return;
    }

    list = localStorageAPI.get(key);
    if (list.find(item => item.id === Obj.id) !== undefined) {
      return;
    }
    list.push(Obj);
    localStorage.setItem(key, JSON.stringify(list));
  }
  static delete(key, Obj) {
    if (!localStorageAPI.get(key)) {
      return;
    }
    let list = localStorageAPI.get(key);
    const searchIndex = list.findIndex(item => item.id === Obj.id);
    if (searchIndex !== -1) {
      list.splice(searchIndex, 1);
      localStorage.setItem(key, JSON.stringify(list));
    }
  }

  static check(key, Obj) {
    if (!localStorageAPI.get(key)) return false;

    list = localStorageAPI.get(key);
    if (list.find(item => item.id === Obj.id)) return true;

    return false;
  }
  static getDataPerPage(key, page = 1, perPage = 18) {
    const data = localStorageAPI.get(key);
    if (!data || data.length === 0) {
      return;
    }
    let forRender;
    forRender = data.slice(0 + perPage * (page - 1), perPage * page);

    if (page === 1) {
      forRender = data.slice(0, perPage);
    }
    return forRender;
  }
}

