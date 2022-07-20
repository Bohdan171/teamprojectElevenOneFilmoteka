import { refs } from './refs.js';

export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === refs.modalBackdrop) {
    refs.cardContainer.innerHTML = '';
    e.stopPropagation();
    modalAppearanceToggle();
    refs.modalBackdrop.removeEventListener('click', closeOnClick);
    if (refs.films.dataset.page === 'queue' || refs.films.dataset.page === 'watched') {
      renderMovieList(refs.films.dataset.page, 1);
    }
  }
}

export function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    refs.cardContainer.innerHTML = '';
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
    if (refs.films.dataset.page === 'queue' || refs.films.dataset.page === 'watched') {
      renderMovieList(refs.films.dataset.page, 1);
    }
  }
}