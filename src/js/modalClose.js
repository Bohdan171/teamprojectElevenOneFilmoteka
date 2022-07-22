import { refs } from './refs.js';

//import aboutMovieTemplates from '../tmp/modalAboutFilm.hbs';



function modalAppearanceToggle() {
  refs.modalBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

async function renderMovieList(key, page) {
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }
}
export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    refs.cardContainer.innerHTML = '';
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
