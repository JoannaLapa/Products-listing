'use strict'

const favBtn1 = document.querySelector('#btn-fav-1')
const favBtn2 = document.querySelector('#btn-fav-2')
const favBtn3 = document.querySelector('#btn-fav-3')
const favbtns = [favBtn1, favBtn2, favBtn3]

const consoleEvent = (e) => {
    console.log('Here should be a logic for adding items to favourite');
    e.target.closest('g').classList.toggle('gold')
}

favbtns.forEach((btn) => btn.addEventListener('click', consoleEvent))
