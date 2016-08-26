'use strict';

var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('www'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('*', function(req, res){
  res.sendFile('./www/index.html');
});


app.listen(8008);
console.log('Server listening on localhost:8008');
