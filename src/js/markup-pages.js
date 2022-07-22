import { ref } from "./ref-pagin";
export function madeMarkupMorePages() {
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

export function madeMarkupLastPages() {
  return ref.list.innerHTML = `<li class="pagination-list_item pagination-list_item--selected" data-action="btn-page">${pagesArray[0]}</li>
      <li class="pagination-list_item" data-action="btn-page">${pagesArray[1]}</li>
      <li class="pagination-list_item" data-action="btn-page">${pagesArray[2]}</li>
      <li class="pagination-list_item" data-action="btn-page">${pagesArray[3]}</li>
      <li class="pagination-list_item" data-action="btn-page">${pagesArray[4]}</li>`
};
export function madeMarkupFirstPages() {
  return ref.list.innerHTML = `<li class="pagination-list_item pagination-list_item--selected" data-action="btn-page">1</li>
      <li class="pagination-list_item" data-action="btn-page">2</li>
      <li class="pagination-list_item" data-action="btn-page">3</li>
      <li class="pagination-list_item" data-action="btn-page">4</li>
      <li class="pagination-list_item" data-action="btn-page">5</li>`
};