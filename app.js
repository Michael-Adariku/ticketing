const https = require('https');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const mysql = require('mysql');

const pageRouter = require('./routes/index');
const fullPageRouter = require('./routes/fullPages.router')
const paymentMethod = require('./routes/paymentHandler')
const ticketVendor = require('./routes/ticketVendor')


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static(path.join(__dirname, './', 'public')));


app.use('/', pageRouter);
// blog handler
app.use('/full-post', fullPageRouter);

// payment handlers
// app.use('/payment', paymentMethod)

app.use('/tickets', ticketVendor)

const PORT = 2020;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
