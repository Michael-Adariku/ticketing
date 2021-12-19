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

  
let secret = "sk_test_992c32af4d5b3451a71a759c36390acd1b0c35cd"

var paystack = require("paystack-api")(secret);

router.post('/purchaseTicket', (req, res) => {
  paystack.customer
  .list()
  .then(function (body) {
    
    console.log(body.data[0]);

      let customerEmail = body.data[0].email;
      let customerId = body.data[0].id;
      let customerFirstName = body.data[0].first_name;
      let customerLastName = body.data[0].last_name;
      let customerPhone = body.data[0].phone;
  
      console.log(`Customer Email: ${customerEmail} Id:  ${customerId} first name: ${customerFirstName} last name: ${customerLastName} Phone:  ${customerPhone}`)
  
   
    //  dataBase.query('INSERT INTO payments SET ?', { email: customerEmail , reference: customerReference, status: customerStatus, message: customerMessage }, async (error, results) => {
    //    if(error){
    //        console.log(error);
    //    }else{
    //       //  console.log(results);
    //        res.render('welcome')
    //    }
    //  });
  
})
.catch(function (error) {
  console.log(error);
});



});


module.exports = router;