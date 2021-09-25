'use strict'


// 1) STICKY NAVBAR
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
})
const nav_item_2 = document.querySelector('.nav-item-2');
const dropdown = document.querySelector('.dropdown');
nav_item_2.addEventListener('click', function () {
    dropdown.classList.toggle('active');
})

let navbar = document.querySelector('navbar');


// 3. A) DISPLAY CURRENT DATE AND TIME + REMAINING DAYS
const concert = {
    concertsDates: [
        '2021-09-28T13:15:33.035Z',
        '2021-09-29T09:48:16.867Z',
        '2021-09-30T06:04:23.907Z',
        '2021-10-01T14:18:46.235Z',
        '2021-10-02T16:33:06.386Z',
        '2021-10-03T14:43:26.374Z',
        '2021-10-07T18:49:59.371Z',
        '2021-10-08T12:01:20.894Z',
        '2021-10-09T18:49:59.371Z',
        '2021-10-10T12:01:20.894Z',
    ],
    capacity: [203, 168, 500, 700, 345, 589, 890, 1000, 110000, 250],
    places: ['arizona federal theatre', 'cal coast credit union amphitheater','greek theatre','es schwab amphitheater','marymoor park','kettlehouse amphitheater','bluestem center for the arts','the armory','the sylvee','white river state park'],
    locale: 'en-US',
    index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

};

/////////////////////////////////////
///// Functions
const  formatedDates = function (date, locale) {
    const calcdaysRemain = (date1, date2) => 
    Math.round(Math.abs(date1 - date2) / (1000 * 3600 * 24));
    
    const daysRemain = calcdaysRemain(date, new Date());
    if(daysRemain > 0) return `${daysRemain} days left`;
    if(daysRemain === 0) return `Today`;
    if(daysRemain < 0) {return `next time`}
    else {
        return Intl.DateTimeFormat(locale).format(date);
      }
    
}
const labelDate = document.querySelector('.current-date');
const date = document.querySelector('.date');

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
//day/month/year

const formatDates = function (concertsDates, locale) {
    concertsDates.forEach(function(mov, i) {
        const date = new Date(concertsDates[i]);
        const displayDate = formatedDates(date, locale);
        // console.log(displayDate);

        const dateDOM = document.querySelector(`.date-${i + 1}`);
        const html = `<h4 class="date days-remain">${displayDate}</h4>`
        dateDOM.insertAdjacentHTML('beforeend', html)
    })
    }
 formatDates(concert.concertsDates, concert.locale);



// 3 B)

const btnTicket = document.querySelectorAll('.buy-ticket');
const randomPlace = concert.capacity.map((num) => 
    Math.floor(Math.random() * num)
);

//Display CAP on card
randomPlace.forEach(function (num, i) {
    const capacityDOM = document.querySelector(`.loc-${i + 1}`);
    const html = `<h4>CAP - ${concert.capacity[i]}</4>`;
    capacityDOM.insertAdjacentHTML('beforeend', html);
})
console.log(randomPlace);



// display alert on click
btnTicket.forEach((btnTicket, i) => {
    btnTicket.addEventListener('click', (e) =>{
        alert(`See you in "${concert.places[i]}".Your place will be ${randomPlace[i]}`)
    })
})

// 3 C)


btnTicket.forEach((btnTicket, i) => {
    btnTicket.addEventListener('click', (e) => {
        let text = e.currentTarget.textContent;
        console.log(e.currentTarget.textContent);
        e.currentTarget.textContent = 'Meet you there!';
  });
});


