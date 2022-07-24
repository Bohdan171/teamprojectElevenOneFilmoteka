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

madeMarkupPopular();

const populаrFilms = new PopulаrFilms();
// console.log(populаrFilms)

async function madeMarkupPopular() {
  await fetchGenre();
    populаrFilms.fetch(page)
    .then(data => {
      totalPages = data.total_pages;
      return data.results;
    })
     .then(results => { ref.gallary.innerHTML = createMarkup(results) })
}


async function onPageBtnClick(e) {
  // if (e.type !== "click") {

  //   ref.pagBox.classList.add("is-hidden");
  //   return;
  // }
  console.log(e);
  let nodeElem = e.target.nodeName;
  console.log(nodeElem);
  let targetElem = e.target.dataset.action;
  // console.log(targetElem);
  if (nodeElem == "DIV") {
    return;
  };
  //  if (nodeElem !== "BUTTON" || nodeElem !== "LI") {
  //   return
  // };
 if (ref.selectedPage) {
      ref.selectedPage.classList.remove("pagination-list_item--selected");
  };
  let n = totalPages - 4;
  
 
  if (e.target.textContent === "...") {
    return;
  };
   
  if (targetElem === "btn-page") {
    page = Number(e.target.textContent);
  };
  if (targetElem === "right-btn") {

         page = Number(page)+1;
  };
  if (targetElem === "left-btn") {
    
         page = Number(page)-1;
  };

  if (page <= 0 || page > totalPages) {
    return;
  };
  madeMarkupPopular();
   if (page >= 1 || page <= 5) {
    
    madeMarkupFirstPages();
    movePagesForFirstFivePage(page);
       
  };
  
    if (page > 5) {
    pagesArray = [page - 2, page - 1, page, page + 1, page + 2];
    madeMarkupMorePages(pagesArray,totalPages);
  };
  if (page >= n) {
    pagesArray = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    madeMarkupLastPages(pagesArray);
    movePagesForLastFivePage(totalPages,page);
  };
     
  window.scrollTo(0, 0);

};



function movePagesForFirstFivePage(data) {
  if (data > 5) {
    return;
   }
  let lips = document.querySelectorAll("li[data-action='btn-page']")
  let needPage = lips[page - 1];
    needPage.classList.add('pagination-list_item--selected');
    
  
};
function movePagesForLastFivePage(allPages, currentPage) {
  if (currentPage < allPages - 4) {
    return;
  }
  let totalPages = allPages;
  let page = currentPage;
  let lips = document.querySelectorAll('li[data-action="btn-page"]')
    
  let p = -1*(totalPages - (page + 4));
    let needPage = lips[p];
     needPage.classList.add('pagination-list_item--selected');
};
