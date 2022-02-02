'use strict';

// const { json } = require('body-parser');

const user1 = {
  owner: 'Dunca Samuel',
  initials: 'SD',
  pin: 1111,
};
// const urlFans = 'https://hookb.in/xYjree1V2pU0nNxxna8K';
const urlFans = 'http://127.0.0.1:3000/api/v1/fans/';
const formEl = document.querySelector('.form-1');
formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const formDataSerialized = Object.fromEntries(formData);
  const jsonObject = {
    ...formDataSerialized,
    news: formDataSerialized.news ? true : false,
  };
  if (formDataSerialized.news) {
    const message = 'hei, m8! welcome to the fun club, have fun..';
    sendEmail(formDataSerialized.name, formDataSerialized.email, message);
  }
  try {
    const response = await fetch(urlFans, {
      method: 'POST',
      body: JSON.stringify(jsonObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('whats the message?', json);
  } catch (err) {
    console.error('error dude', err);
  }
});

// send Email if "news" = true
function sendEmail(name, email, message) {
  Email.send({
    Host: 'smtp.mailtrap.io',
    Username: '32bdba5438a3dc',
    Password: '2d859f47427ea4',
    To: `${email}`,
    From: 'sendr@example.com',
    Subject: `Mail for ${name}`,
    Body: `${message}`,
  }).then(message => alert(`mail sent successfully to ${name}`));
}

////////////////////
// Fetch Fans
//
async function getFan() {
  try {
    const url = 'http://127.0.0.1:3000/api/v1/fans/';
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (err) {
    console.log('error', err);
  }
}

async function renderFan() {
  let fetchedData = await getFan();
  let allFans = fetchedData.data.fans;
  let displayAll = new Array();

  let i = 0;
  for (let fan of allFans) {
    if (i < 100) {
      var htmlSegment = ` <div class="submiters__row">
            <div class="submiters__type submiters__type--withdrawal">
              ${fan.name}
            </div>
            <div class="submiters__date">${fan.gender}</div>
            <div class="submiters__value"><button onclick="myFunction()" class="btn-details btn-details-${i}">
            <a class="href-details" href="#">More Details</a>
          </button></div>
              </div>`;
      displayAll.push(htmlSegment);
      i++;
    }
  }
  let containersubmiters = document.querySelector('.submiters');
  containersubmiters.innerHTML = displayAll.join('');
}

renderFan();

const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const containerTable = document.querySelector('.app');

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputLoginUsername.value === user1?.initials &&
    user1?.pin === Number(inputLoginPin.value)
  ) {
    containerTable.style.opacity = 100;

    // Clear input fields
  }
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
});

// apelata din button (onclick="")

// async function renderFan1() {
//   let fetchedData = await getFan();
//   let allFans = fetchedData.data.fans;
//   const propertyNames = Object.keys(allFans);
// }
// console.log(propertyNames);
function myFunction() {
  //   const propertyNames = Object.keys(allFans);
  //   propertyNames.forEach((fan, i) => {
  document
    .querySelector(`.btn-details-${i}`)
    .addEventListener('click', function () {
      console.log('nu t rusine');
    });
}

// renderFan1();
