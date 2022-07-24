// const modal = document.querySelector('.js-modal');
export function makeModalCard({ id, title, poster_path,overview,vote_average,vote_count,popularity,release_date = "2021-01-01" },data) {
    let genre_ids = data;
    return `<button type="button" class="modal-close-btn js-close-btn">
      <svg class="modal-close-btn__icon" width="14" height="14">
        <use href="./images/close.svg"></use>
      </svg>
    </button>
    <div class="card-container">
      <div class='modal-wrapper js-modal-wrapper' data-id='${id}'>
        <div class='wrapper-img'>
          <img
            class='js-card-img'
            src='https://image.tmdb.org/t/p/w500${poster_path}'
            alt='moviе poster: ${title}'
          />
          <div class='overlay'>
            <img class='modal-img-play' src='./images/play-orange.png' alt='icon play' />
          </div>
        </div>
        <div class='modal-right-part'>
          <h2 class='modal-main-title'>${title}</h2>
          <div class='modal-lists-wrapper'>
            <ul class='modal-list-denominations list'>
              <li class='modal-item-position'>Vote<span class='modal-item-span'>/</span>Votes</li>
              <li class='modal-item-position'>Popularity</li>
              <li class='modal-item-position'>Original Title</li>
              <li class='modal-item-position'>Genre</li>
            </ul>
            <ul class='modal-list-descriptions list'>
              <li class='modal-item-description item-flex'>
                <p class='modal-item-description-rating'>${vote_average}</p><span
                  class='modal-item-span'
                >/</span>
                <p class='modal-item-description-views'>${vote_count}</p>
              </li>
              <li class='modal-item-description'>${popularity}</li>
              <li class='modal-item-description'>${title}</li>
              <li class='modal-item-description'>
              <li class='modal-item-genres'>${genre_ids}</li>
                 
              </li>
            </ul>
          </div>
          <h3 class='modal-secondary-title'>About</h3>
          <p class='modal-film-description'>${overview}</p>
          <div class='modal-wrapper-btn'>
            <button class='modal-btn modal-btn-watched js-modal-btn-watched' type='button'>add to watched</button>
            <button
              class='visually-hidden modal-btn modal-btn-remove modal-btn-remove-watched js-modal-btn-remove-watched'
              type='button'
            >remove from watched</button>
            <button class='modal-btn modal-btn-queue js-modal-btn-queue' type='button'>add to queue</button>
            <button
              class='visually-hidden modal-btn modal-btn-remove modal-btn-remove-queue js-modal-btn-remove-queue'
              type='button'
            >remove from queue</button>
          </div>
        </div>
      </div>
    </div>
 `;
 };
