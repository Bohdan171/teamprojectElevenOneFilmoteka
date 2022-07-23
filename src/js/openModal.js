const refs = { 
  galleryList: document.querySelector('.js-gallery-list'),
  modalBackdrop: document.querySelector('.js-backdrop'),
  modal: document.querySelector('.js-modal'),
  trailerBackdrop: document.querySelector('.js-backdrop-trailer'),
  trailerIframe: document.querySelector('.js-trailer'),
};

refs.galleryList.addEventListener('click', onCardClick);

function onCardClick(eve) {
  const isCardMovie = eve.target.closest('.gallery-items');
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
      document
        .querySelector('.js-modal-btn-watched')
        .classList.toggle('visually-hidden');
      document
        .querySelector('.js-modal-btn-remove-watched')
        .classList.toggle('visually-hidden');
    }

    document
      .querySelector('.js-modal-btn-watched')
      .addEventListener('click', onWatchedAdd);
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
      document
        .querySelector('.js-modal-btn-queue')
        .classList.toggle('visually-hidden');
      document
        .querySelector('.js-modal-btn-remove-queue')
        .classList.toggle('visually-hidden');
    }

    document
      .querySelector('.js-modal-btn-queue')
      .addEventListener('click', onQueueAdd);
    function onQueueAdd(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.nextElementSibling.classList.toggle('visually-hidden');
      localStorageAPI.set(localStorageAPI.KEYS.QUEUE, movie);
    }

    document
      .querySelector('.js-modal-btn-remove-queue')
      .addEventListener('click', onQueueRemove);
    function onQueueRemove(event) {
      event.target.classList.toggle('visually-hidden');
      event.target.previousElementSibling.classList.toggle('visually-hidden');
      localStorageAPI.delete(localStorageAPI.KEYS.QUEUE, movie);
    }
    document
      .querySelector('.modal-img-play')
      .addEventListener('click', watchTrailer);
  });

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;


async function watchTrailer() {
  const id = document.querySelector('.modal-wrapper').dataset.id;
  const fetchResult = await FetchAPI.getTrailers(id);
  refs.trailerBackdrop.classList.remove('is-hidden');
  if (fetchResult.results.length === 0) {
    refs.trailerBackdrop.insertAdjacentHTML(
      'afterbegin',
      '<div class=""><svg class="" width="280" height="280"><use href="./play-orange.svg"></use></svg></div>'
    );
    return;
  }

  let resultArray = fetchResult.results.find(item => (item.type === 'Trailer' && item.site === 'YouTube'));
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: resultArray.key,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

refs.trailerBackdrop.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('is-hidden');
  refs.trailerBackdrop.innerHTML = '';
  refs.trailerBackdrop.innerHTML = '<div id="player"></div>';
  stopVideo();
});

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  
}

function stopVideo() {
  player.stopVideo();
}
}

