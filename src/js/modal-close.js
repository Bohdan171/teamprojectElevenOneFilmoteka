const refs = {
  btnOpen: document.querySelector('[modal-footer-open]'),
  btnClose: document.querySelector('[modal-footer-close]'),
  modalFooterBackdrop: document.querySelector('.footer_backdrop'),
};

refs.btnOpen.addEventListener('click', onClickOpenModalFooter);
refs.btnClose.addEventListener('click', onClickCloseModalFooter);
refs.modalFooterBackdrop.addEventListener('click', onBackdropFooterClick);

function onClickOpenModalFooter() {
  event.preventDefault();
  window.addEventListener('keydown', onModalFooterEsc);
  refs.modalFooterBackdrop.classList.remove('is-hidden');
}
function onClickCloseModalFooter() {
  window.removeEventListener('keydown', onModalFooterEsc);
  refs.modalFooterBackdrop.classList.add('is-hidden');
}

function onBackdropFooterClick(e) {
  if (e.target === e.currentTarget) {
    onClickCloseModalFooter();
  }
}

function onModalFooterEsc(event) {
  const key = event.code;
  if (key === 'Escape') {
    onClickCloseModalFooter();
  }
}
