var express = require('express');
var path = require('path');
var logger = require('morgan');
var helmet = require('helmet');
var compression = require('compression');

var app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// jinja-style template views
var nunjucks = require('nunjucks');
nunjucks.configure(['build', 'views'], {
  autoescape: true,
  express: app
});

// Routes for root and others
app.use('/', require('./routes/main'));

// serve /build as static, except for *.html files
app.use('/', (req, res, next) => {
  var result = req.url.match(/^\/.+\.html$/)
  if (result) {
    return res.status(404).send()
  }
  next()
});
app.use(express.static(path.join(__dirname, 'build')));

module.exports = app;