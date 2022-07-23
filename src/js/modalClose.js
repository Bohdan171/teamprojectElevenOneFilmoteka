import { refs } from './refs.js';

//import aboutMovieTemplates from '../tmp/modalAboutFilm.hbs';


backdropModal.addEventListener("click",closeOnClick)
function modalAppearanceToggle() {
  refs.modalBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

<<<<<<< Updated upstream
async function renderMovieList(key, page) {
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }
}
export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    refs.cardContainer.innerHTML = '';
=======

function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === backdropModal) {
    // cardContainer.innerHTML = '';
>>>>>>> Stashed changes
    e.stopPropagation();
    modalAppearanceToggle();
    refs.modalBackdrop.removeEventListener('click', closeOnClick);
    if (
      refs.films.dataset.page === 'queue' ||
      refs.films.dataset.page === 'watched'
    ) {
      renderMovieList(refs.films.dataset.page, 1);
    }
  }
}

export function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    refs.cardContainer.innerHTML = '';
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
    if (
      refs.films.dataset.page === 'queue' ||
      refs.films.dataset.page === 'watched'
    ) {
      renderMovieList(refs.films.dataset.page, 1);
    }
  }
}
