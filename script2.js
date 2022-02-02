'use strict';

//4 A)

const btnTitle = document.querySelectorAll('.display-album-btn');
const btnSongList = document.querySelectorAll('.songs-list');
btnTitle.forEach((btnTitle, i) => {
  btnTitle.addEventListener('click', e => {
    document.querySelector(`.song-list-${i}`).classList.add('active');
    console.log('good job');
    // e.currentTarget.classList.add('.active');
  });
});

////////////////////////////////////////////
////////////////////////////////////////////
//////⬇️⬇️⬇️⬇️   JSON    ⬇️⬇️⬇️⬇️//////////
////////////////////////////////////////////
////////////////////////////////////////////
// async function getConcert() {
//   //   let url = `${__dirname}/data/data-albums.json`;
//   try {
//     let res = await fetch('http://127.0.0.1:3000/api/v1/concerts/', {
//       mode: 'no-cors',
//       method: 'GET',
//     });
//     console.log(res.status);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function renderConcerts(container, k) {
//   let concert = await getConcert();
//   let html = '';
//   //   console.log(concerts[1].PIESA[1]);
//   let htmlSegment = `
//   <div class="date-location">
//   <div class="date-days-remain date-10">
//     <h4 class="date">oct 10, 2021</h4>
//   </div>
//   <div class="location-capacity loc-10">
//     <h2 class="location">${concert[k].city}</h2>
//   </div>
// </div>
// <div class="place-item">
//   <h3 class="place">${concert[k].location}</h3>
// </div>
// <button class="buy-ticket buy-ticket-10">
//   <a class="tickets-link ticket-color"> tickets &#8594; </a>
// </button>`;
//   html += htmlSegment;

//   let containerHTML = document.querySelector(`.${container}`);
//   containerHTML.innerHTML = html;
// }

// renderConcerts('containerHTML0', 0);
// renderConcerts('containerHTML1', 1);
// renderConcerts('containerHTML2', 2);
// renderConcerts('containerHTML3', 3);
// renderConcerts('containerHTML4', 4);
// renderConcerts('containerHTML5', 5);

// async function renderConcerts(container, k) {
//   let concert = await getConcert();
//   let html = '';
//   //   console.log(concerts[1].PIESA[1]);
//   let htmlSegment = `
// <li class="song"><h4 class="songs-heading">${concert[k].album[0]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[1]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[2]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[3]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[4]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[5]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[6]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[7]}</h4></li>
// <li class="song"><h4 class="songs-heading">${concert[k].album[8]}</h4></li>`;
//   html += htmlSegment;

//   let containerHTML = document.querySelector(`.${container}`);
//   containerHTML.innerHTML = html;
// }

// renderConcerts('containerHTML0', 0);
// renderConcerts('containerHTML1', 1);
// renderConcerts('containerHTML2', 2);
// renderConcerts('containerHTML3', 3);
// renderConcerts('containerHTML4', 4);
// renderConcerts('containerHTML5', 5);
