const galleryListModal = document.querySelector('.js-gallery-list');
const backdropModal = document.querySelector('.js-backdrop');
const modalCloseBtn = document.querySelector('.js-close-btn');
const films = document.querySelector('.movie-gallery-js');
const cardContainer = document.querySelector('.films_container');
const modal = document.querySelector('.js-modal');

backdropModal.addEventListener('click', closeOnClick);

export function closeOnClick(e) {
  if (e.target.closest('.js-close-btn') || e.target === backdropModal) {
    modal.innerHTML = '';

    e.stopPropagation();
    modalAppearanceToggle();
    backdropModal.removeEventListener('click', closeOnClick);
    if (films.dataset.page === 'queue' || films.dataset.page === 'watched') {
      renderMovieList(films.dataset.page, 1);
    }
  }
}

async function renderMovieList(key, page) {
  if (page === 1) {
    galleryListModal.innerHTML = '';
  }
}

export function modalKeypressEsc(e) {
  if (e.keyCode === 27) {
    //cardContainer.innerHTML = '';
    modalAppearanceToggle();
    document.removeEventListener('keydown', modalKeypressEsc);
    if (films.dataset.page === 'queue' || films.dataset.page === 'watched') {
      renderMovieList(films.dataset.page, 1);
    }
  }
}

function modalAppearanceToggle() {
  backdropModal.classList.toggle('is-hidden');
  document.body.classList.remove('modal-open');
}
