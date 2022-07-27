export function createMarkup(results) {
  const markup = results
    .map(({ title, poster_path, release_date = '2021-01-01', genre_ids }) => {
      const url = `https://image.tmdb.org/t/p/w500`;
      const date = release_date ? release_date.slice(0, 4) : 'No information';
      const genreItems = JSON.parse(localStorage.getItem('genre')).genres;

      let genreNames = genreItems.filter(genre => genre_ids.includes(genre.id))
        .map(genre => genre.name);
      if (genreNames.length > 2) {
        genreNames = genreNames.slice(0, 2).concat(['other...']);
      }
      else if (genreNames.length === 0) {
        genreNames = ['No information'];
      }
      genreNames = genreNames.join(', ');

      return `

      <div class="film-card">
      <a class="gallery__link" href="${url}${poster_path}">
      <img class="gallery__image" src=${
        poster_path !== null
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : `https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`
        } alt="${title}" loading="lazy" />
        </a>
        <div class="info">
        <h2 class="title">
        ${title}
        </h2>
        <p class="info-description">
        <b class="genre"> ${genreNames} </b>
        <b> | </b>
        <b class="yers">
        ${date}
        </b>
        </p>

        </div>
        </div>`;
    })
    .join('');
  return markup;
}


// export  function createMarkup(results) {
//   const markup = results.map(({id, title="", name="", poster_path, release_date = "2021-01-01", genre_ids =[] }) => {
//         const url = `https://image.tmdb.org/t/p/w500`
//         const date = release_date.slice(0, 4)
//         const genreItems = JSON.parse(localStorage.getItem("genre")).genres
//           let newName = []
//         for (const genre of genreItems){
//           for (const el of genre_ids){
//           if (genre.id === el){
//             newName.push(genre.name)} }          
//         };
//     genre_ids = newName.slice(0, 2);
//     if (genre_ids.length === 0) {
//        genre_ids="Other";
//     }
//         return `
      
//        <div  class="film-card gallery-items" data-modal="${id}">
//        <a class="gallery__link" href="${url}${poster_path}">
//        <img class="gallery__image js-card-img" src="${url}${poster_path}" alt="${title}${name}" loading="lazy" />
//        </a>
//        <div class="info">
//          <h2 class="title">
//             ${title}${name}
//          </h2>
//          <p class="info-description">
//          <b class="genre">${genre_ids} </b>
//          <b> | </b>
//          <b class="yers">
//            ${date}
//          </b>
//          </p>
         
//        </div>
//      </div>`;}).join("");
//     return markup;
     
     
// };