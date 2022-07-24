// import axios from "axios";
import { ref } from "./ref-pagin";
import { madeMarkupMorePages, madeMarkupLastPages, madeMarkupFirstPages } from "./markup-pages";
import  PopulаrFilms  from './popular/fetchPopular.js';
import { fetchGenre } from './fetchfilm/genre.js'
import { createMarkup } from "./markupCard";

let page = 1;
let pagesArray =[];
let totalPages;


ref.pagBox.addEventListener("click", onPageBtnClick);


const populаrFilms = new PopulаrFilms();
console.log(populаrFilms)

async function madeMarkupPopular() {
  await fetchGenre()
    populаrFilms.fetch(page)
    .then(data => {
      totalPages = data.total_pages;

      console.log(data.results)
      return data.results;
    })
     .then(results => { ref.gallary.innerHTML = createMarkup(results) })
}


async function onPageBtnClick(e) {
  console.log(pagesArray);
   if (ref.selectedPage) {
      ref.selectedPage.classList.remove("pagination-list_item--selected");
  };
  
  let targetElem = e.target.dataset.action;
  let nodeElem = e.target.nodeName;
  let n = totalPages - 4;
  if (nodeElem !== "BUTTON" || nodeElem !== "LI");
  if (e.target.textContent === "...") {
    return;
  }
  
 
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
    if (e.target.tagName === 'li') {
      e.target.classList.add('pagination-list_item--selected')
     };
    madeMarkupFirstPages();
  };
  console.log(pagesArray);
  if (page > 5) {
    pagesArray = [page - 2, page - 1, page, page + 1, page + 2];
    madeMarkupMorePages(pagesArray,totalPages);
  };
  if (page >= n) {
    pagesArray = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    // e.target.classList.add('pagination-list_item--selected');
    madeMarkupLastPages(pagesArray);
  }
    madeMarkupPopular();
 

};


madeMarkupPopular();