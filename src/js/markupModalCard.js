// const modal = document.querySelector('.js-modal');
export function makeModalCard({ id, title="", name="",poster_path,overview,vote_average,vote_count,popularity},data) {
    let genre_ids = data;
    return `<button type="button" class="modal-close-btn js-close-btn">
      <svg class="modal-close-btn__icon" width="14" height="14">
        <use href='/src/images/sprite.svg#icon-close'></use>
      </svg>
    </button>
    <div class="card-container">
      <div class='modal-wrapper js-modal-wrapper' data-id='${id}'>
        <div class='wrapper-img'>
          <img
            class='js-card-img'
            src='https://image.tmdb.org/t/p/w500${poster_path}'
            alt='moviе poster: ${title}${name}'
          />
          <div class='overlay'>
            <img class='modal-img-play' src="/images/play-orange.png" alt='icon-play'/>
          </div>
        </div>
        <div class='modal-right-part'>
          <h2 class='modal-main-title'>${title}${name}</h2>
          <div class='modal-lists-wrapper'>

            <ul class='modal-list'>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Vote / Votes</h3><p class='modal-list__content--item item-flex'><span class='modal-item-description-rating'>${vote_average}</span> / ${vote_count}</p></li>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Popularity</h3><p class='modal-list__content--item'>${popularity}</p></li>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Original Title</h3><p class='modal-list__content--item modal-list__content--title'>${title}</p></li>
            <li class='modal-list__info--item'><h3 class='modal-list__info--title'>Genre</h3><p class='modal-list__content--item'>${genre_ids}</p></li>
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
 }
