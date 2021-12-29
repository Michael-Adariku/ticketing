const https = require('https');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
// database
const mysql = require('mysql');
require('./controller/database');

const pageRouter = require('./routes/index');
const fullPageRouter = require('./routes/fullPages.router')

const ticketVendor = require('./routes/ticketVendor');
const registrationHandler = require('./routes/userAuth');
const profileHandler = require('./routes/profile.route');
const myLogger = require('./controller/profle.middlware');


// with express session
const session = require('express-session'); 
const passport = require('passport');

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');



// Authentication

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  }));
// passport initialising
app.use(passport.initialize());
app.use(passport.session());

// Express body parser
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// profile handler middleware
app.use(myLogger)

app.use(express.static(path.join(__dirname, './', 'public')));



app.use('/', pageRouter);

// blog handler
app.use('/full-post', fullPageRouter);

app.use('/profile', myLogger, profileHandler);

// registration handler
app.use('/contest', registrationHandler);

// payment handlers
app.use('/tickets', ticketVendor);

const PORT = process.env.PORT ;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
