import axios from "axios";
import { ref } from "./ref-pagin";
import { madeMarkupMorePages, madeMarkupLastPages, madeMarkupFirstPages } from "./markup-pages";

const API_KEY = "63c49d80fa037ae8f982024576ca5e08";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

let page = 1;
let pagesArray;
let totalPages;

madeMarkupPopular()
ref.pagBox.addEventListener("click", onClick);

async function onClick(e) {
  let targetElem = e.target.dataset.action;
  let nodeElem = e.target.nodeName;
  let n = totalPages - 4;
  if (nodeElem !== "BUTTON" || nodeElem !== "LI");
  if (e.target.textContent === "...") {
    return;
  }
 
  if (ref.selectedPage) {
      ref.selectedPage.classList.remove('pagination-list_item--selected');
  };
  if (targetElem === "btn-page") {
    page = Number(e.target.textContent);
  };
  if (targetElem === "right-btn" || nodeElem === "use" || nodeElem == "svg") {
         page = Number(page)+1;
  };
    if (targetElem === "left-btn"||nodeElem ==="use"||nodeElem === "svg") {
         page = Number(page)-1;
  };

  if (page <= 0 || page > totalPages) {
    return;
  };
   if (page >= 1 || page <= 5) {
    madeMarkupFirstPages();
  };
  if (page > 5) {
    pagesArray = [page - 2, page - 1, page, page + 1, page + 2];
    madeMarkupMorePages()  
  };
  if (page >= n) {
    pagesArray = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    madeMarkupLastPages();
  }
    madeMarkupPopular();
 
// e.target.classList.add('pagination-list_item--selected');
};




function madeMarkup(data) { 
 
         const markup = data.map(({ poster_path }) => {
            return `<li><img class = "gallery_img" src=https://image.tmdb.org/t/p/w154${poster_path} alt="" loading="lazy" /></li>`
         }).join("");
        
    return  ref.gallary.insertAdjacentHTML("beforeend", markup);
};

 async function getFilms(page) {
    try {
      
      const response = await axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`);
      console.log(response);
       totalPages = response.data.total_pages;
      // console.log(totalPages);
       const data = response.data.results;
      
        return data;
        
  } catch (error) {
    console.error(error);
  }
}



async function madeMarkupPopular() {
    const popular = await getFilms(page);
  madeMarkup(popular);
};




