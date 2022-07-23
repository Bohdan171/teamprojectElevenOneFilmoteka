const refs = {
  galleryList: document.querySelector('.js-gallery-list'),
  modalBackdrop: document.querySelector('.js-backdrop'),
  modalCloseBtn: document.querySelector('.js-close-btn'), 
  films: document.querySelector('.movie-gallery-js'),
  cardContainer: document.querySelector('.films_container'),   
};

function modalAppearanceToggle() {
  refs.modalBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}


function closeOnClick(e) {
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

async function renderMovieList(key, page) {
  if (page === 1) {
    refs.galleryList.innerHTML = '';
  }
}

function modalKeypressEsc(e) {
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