import fetchGenre from './popular/fetchPopular.js';
import { refs } from './refs.js';
import aboutMovieTemplates from '../tmp/modalAboutFilm.hbs';
import { localStorageAPI } from './localStorageAPI.js';
import { closeOnClick, modalKeypressEsc } from './modalClose.js';
// const newsPictureApi = new Fetch();
import { watchTrailer } from './modalTrailer.js';
//import axios from 'axios';
//import PopulаrFilms from './fetchPopular.js';
//import {fetchGenre} from '../fetchfilm/genre.js'

refs.galleryList.addEventListener('click', onCardClick);

function onCardClick(eve) {
  const isCardMovie = eve.target.closest('.film-card');
  if (!isCardMovie) {
    return;
  }
  const idMovie = isCardMovie.dataset.index;
  onOpenModal(idMovie);
}

function onOpenModal(id) {
  document.addEventListener('keydown', modalKeypressEsc);
  refs.modalBackdrop.addEventListener('click', closeOnClick);

  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');

  fetchGenre.searchByMovieId(id).then(movie => {
    
    const w = localStorageAPI.check(localStorageAPI.KEYS.WATCHED, movie);
    const q = localStorageAPI.check(localStorageAPI.KEYS.QUEUE, movie);
    if (w) {
      document.querySelector('.js-modal-btn-watched').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-watched').classList.toggle('visually-hidden');
    }

    document.querySelector('.js-modal-btn-watched').addEventListener('click', onWatchedAdd);
    function onWatchedAdd(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.nextElementSibling.classList.toggle('visually-hidden');
      localStorageAPI.set(localStorageAPI.KEYS.WATCHED, movie);
    }

    document
      .querySelector('.js-modal-btn-remove-watched')
      .addEventListener('click', onWatchedRemove);
    function onWatchedRemove(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.previousElementSibling.classList.toggle('visually-hidden');
      localStorageAPI.delete(localStorageAPI.KEYS.WATCHED, movie);
    }

    if (q) {
      document.querySelector('.js-modal-btn-queue').classList.toggle('visually-hidden');
      document.querySelector('.js-modal-btn-remove-queue').classList.toggle('visually-hidden');
    }

    document.querySelector('.js-modal-btn-queue').addEventListener('click', onQueueAdd);
    function onQueueAdd(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.nextElementSibling.classList.toggle('visually-hidden');
      localStorageAPI.set(localStorageAPI.KEYS.QUEUE, movie);
    }

    document.querySelector('.js-modal-btn-remove-queue').addEventListener('click', onQueueRemove);
    function onQueueRemove(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.previousElementSibling.classList.toggle('visually-hidden');
      localStorageAPI.delete(localStorageAPI.KEYS.QUEUE, movie);
    }
    document.querySelector('.modal-img-play')
      .addEventListener('click', watchTrailer);

  });

}


