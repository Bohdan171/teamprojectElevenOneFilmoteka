import {filmList} from './openModal.js'
import {createMarkup} from './markupCard.js'


const btnWatchedLib = document.querySelector(".watched")
const btnQueueLib = document.querySelector(".queue")
const gallaryhLib = document.querySelector('.gallery-list')
console.log(btnWatchedLib)


btnWatchedLib.addEventListener('click', onClickWatchedLib)

function onClickWatchedLib(evt){
    const filmListLib = JSON.parse(localStorage.getItem('watched')) 
    console.log(filmListLib)
    gallaryhLib.innerHTML = createMarkup(filmListLib)
}

btnQueueLib.addEventListener('click', onClickQueueLib)

function onClickQueueLib(evt){
    const filmListLib = JSON.parse(localStorage.getItem('queue')) 
    console.log(filmListLib)
    gallaryhLib.innerHTML = createMarkup(filmListLib)



}