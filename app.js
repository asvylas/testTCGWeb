// Required modules
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

//App
const app = express();

// Routes
const index = require('./routes/index');

// Host/Port
const hostname = '127.0.0.1';
const port = 8000;

//View Engine
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Server
app.use(express.static('public'));
app.use('/', index);

// Listen for requests
app.listen(port, function(){
  console.log('Server running on port: ' +port)
});
