const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const mysql = require('mysql');
const { response } = require('express');

const dataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Astro_database'
  });

  
// let secret = "sk_test_992c32af4d5b3451a71a759c36390acd1b0c35cd"
let secret = process.env.PAYSTACK_SECRET_KEY;

var paystack = require("paystack-api")(secret);

router.post('/verify', (req, res) => {

  console.log(req.body);
  paystack.customer
  .list()
  .then(function (body) {
    
    console.log("this is from verified");
    console.log(req.body);
  
      let customerEmail = body.data[0].email;
      let customerReference = req.body.reference;
      let customerStatus = req.body.status
      let customerMessage = req.body.message
  
   
     dataBase.query('INSERT INTO payments SET ?', { email: customerEmail , reference: customerReference, status: customerStatus, message: customerMessage }, async (error, results) => {
       if(error){
           console.log(error);
       }else{
          //  console.log(results);
           res.render('welcome')
       }
     });
  
})
.catch(function (error) {
  console.log(error);
});


});


module.exports = router;