import { refs } from './refs.js';
export default function modalAppearanceToggle() {
  refs.modalBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}