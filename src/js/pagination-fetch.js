import axios from "axios";

const API_KEY = "63c49d80fa037ae8f982024576ca5e08";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';



const ref = {
  five: document.querySelector(".five"),
  gallary: document.querySelector(".gallary"),
  pagBox: document.querySelector(".pagination-nav"),
  list: document.querySelector("[data-action ='pagin-list']"),
  leftBtn: document.querySelector("[data-action='left-btn']"),
  rightBtn: document.querySelector("[data-action='right-btn']"),
  selectedPage: document.querySelector(".pagination-list_item--selected")
};
let n = Number(ref.five.textContent);
console.log(n);
let intFrameWidth = window.innerWidth;
let page = 1;
console.log(page);
let pagesArray;
console.log(pagesArray);

let totalPages;

madeMarkupPopular()
ref.pagBox.addEventListener("click", onClick);

async function onClick(e) { 

  console.log(e.target);
  
  if(e.target.dataset.action === "btn-page") {
    page =   Number(e.target.textContent);
    // console.log(true);
  };
    if (e.target.dataset.action === "right-btn") {
         page = Number(page)+1;
        // console.log(true);
  };
    if (e.target.dataset.action === "left-btn") {
         page = Number(page)-1;
        // console.log(true);
  };
    madeMarkupPopular();
  if (page > 5) {
    pagesArray = [page-2, page-1, page, page + 1, page + 2];
    madeMarkupMorePages()  
    console.log(page);
  }
  // console.log(false);
 
  // console.log(page);
  // ref.selectedPage.classList.remove('pagination-list_item--selected');
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
// function madeMarkupFivePages() {
   
//   return ref.list.innerHTML = `  `
//  };
function madeMarkupMorePages() {
    return ref.list.innerHTML = ` <li  class = "pagination-list_item " data-action = "btn-page">1</li>
    <li  class = "pagination-list_item " data-action = "btn-page">...</li>
    <li  class = "pagination-list_item " data-action = "btn-page">${pagesArray[0]}</li>
    <li  class = "pagination-list_item " data-action = "btn-page">${pagesArray[1]}</li>
    <li  class = "pagination-list_item pagination-list_item--selected " data-action = "btn-page">${pagesArray[2]}</li>
    <li  class = "pagination-list_item " data-action = "btn-page">${pagesArray[3]}</li>
    <li  class = "pagination-list_item" data-action = "btn-page">${pagesArray[4]}</li>
    <li  class = "pagination-list_item " data-action = "btn-page">...</li>
    <li  class = "pagination-list_item" data-action = "btn-page">${totalPages}</li>`
};


// madeMarkupPopular();

