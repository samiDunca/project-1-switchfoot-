const fs = require('fs');
const express = require('express');
const replaceTemplate = require('./modules/replaceTemplace');
const app = express();

app.use(express.json());
app.use('/api/v1/assets', express.static('style.css'));
app.use(express.static(`${__dirname}/style.css`));
app.use(express.static(`${__dirname}/css-grid.css`));

const concertCards = fs.readFileSync(
  `${__dirname}/templates/concert-cards.html`,
  'utf-8'
);
const concertRealHtml = fs.readFileSync(`${__dirname}/concerts.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/data/data-concert.json`, 'utf-8');
const dataObj = JSON.parse(data);

app.get('/api/v1/concert', (req, res) => {
  const cardsHtml = dataObj
    .map(el => replaceTemplate(concertCards, el))
    .join('');
  const output = concertRealHtml.replace('{%ACI_CONCERT_CARD%}', cardsHtml);
  console.log(output);
  res.send(output);
});

const port = 8080;
app.listen(port, '127.0.0.1', () => {
  console.log(`App listen on port ${port}..`);
});
