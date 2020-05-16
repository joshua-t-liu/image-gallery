const express = require('express');
const compression = require('compression');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(compression());
app.use(express.static('public'));

app.get('/homes/:id/0.bundle.js', (req, res) => {
  res.sendFile('0.bundle.js', { root: `${__dirname}/public` }, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/homes/:id/1.bundle.js', (req, res) => {
  res.sendFile('1.bundle.js', { root: `${__dirname}/public` }, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/0.bundle.js', (req, res) => {
  res.sendFile('0.bundle.js', { root: `${__dirname}/public` }, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/1.bundle.js', (req, res) => {
  res.sendFile('1.bundle.js', { root: `${__dirname}/public` }, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/homes/:id', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/public` }, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/homes/:id/images', (req, res) => {
  const { id } = req.params;
  db.homes.get(id, (err, home) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(home);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('listening on port', PORT);
});
