const express = require('express');
const router = express.Router();
const path = require('path');
// TODO: This should be an actual DB or API
const mockDB = require('../build/assets/data/dogs.json');

router.get('/', function(req, res, next) {
  res.render('App.html', { pets: mockDB.dogs });
});

router.get('/adopt/:pet_id', function(req, res, next) {
  const selectedPet = mockDB.dogs.find(row => row.source.match(req.params.pet_id));
  const baseURL = `${req.protocol}://${req.get('host')}`;

  res.render('App.html', {
    baseURL,
    selectedPet,
    pets: mockDB.dogs
  });
});

router.get('/sitemap.xml', function(req, res, next) {
  const baseURL = `${req.protocol}://${req.get('host')}`;

  res.header('Content-Type', 'application/xml');
  res.render('sitemap.xml', {
    baseURL,
    pets: mockDB.dogs
  });
});

router.get('/robots.txt', function(req, res, next) {
  const baseURL = `${req.protocol}://${req.get('host')}`;

  res.header('Content-Type', 'text/plain');
  res.render('robots.txt', {
    baseURL
  });
});

module.exports = router;
