'use strict';

//4 A)

const btnTitle = document.querySelectorAll('.display-album-btn');
const btnSongList = document.querySelectorAll('.songs-list');
btnTitle.forEach((btnTitle, i ) => {
    btnTitle.addEventListener('click', (e) => {
        document.querySelector(`.song-list-${i}`).classList.add('active');
        console.log('SAMI EVER');
        // e.currentTarget.classList.add('.active');
    })
})