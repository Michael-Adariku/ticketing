const https = require('https');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// database
const mysql = require('mysql');
require('./controller/database');

require('dotenv').config();

const pageRouter = require('./routes/index');
// to handle blog and blog posts
const fullPageRouter = require('./routes/fullPages.router')
// payment processing
const paymentMethod = require('./routes/paymentHandler')
const ticketVendor = require('./routes/ticketVendor');
// login and registration handler
const registrationHandler = require('./routes/userAuth');

// custom middleware
const myLogger = require('./controller/profle.middlware');



// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');


// Express body parser

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// profile handler middleware
app.use(myLogger)

app.use(express.static(path.join(__dirname, './', 'public')));



app.use('/', pageRouter);
// blog handler
app.use('/full-post', fullPageRouter);

// payment handlers
// app.use('/payment', paymentMethod)

app.use('/tickets', ticketVendor);
// registration handler
app.use('/contest', registrationHandler);


const PORT = 2020;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
