const mysql = require('mysql');
const path = require('path');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const passport = require('passport');

const dataBase = require('../controller/dbConnector');

// Register
router.post('/register', (req, res) => {

    const {
        // password,
        // confirmPassword,
        // registerPhone,
        email,
        registerFirstName,
        registerLastName,
        // registerCategorySelect,
        registerSelectState,
        registerSelectLga,
        registerAgreementCheckBox
    } = req.body;

    console.log(`this is req body: ${req.body}`);

    dataBase.query('SELECT email FROM BreedA WHERE email = ?', [email], async (error, results) => {
        console.log('this is in the query select section')
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            console.log(results.length);
        //     return res.render('register', {
        //         message: "that email is already in use"
            // })
        }

        if (results.length < 0) {
            console.log("email has not been taken...")
        }
        

        if(registerAgreementCheckBox == null) {
          return  console.log('please agree with terms')
        }

        dataBase.query('INSERT INTO BreedA SET ?', {
            email:email,
            firstName: registerFirstName,
            lastName: registerLastName,
            // password: password,
            // category: registerCategorySelect,
            state: registerSelectState,
            lga: registerSelectLga,
            // phone: registerPhone,
        }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                const user_Id = results[0];
              console.log(`this is the user id &{user_Id}`)
                req.login(user_Id, function(err){
                    res.redirect('/');
                })

            }
        })
    });
});


//  Login
router.post('/login', (req, res, next) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).render('signIn', {
            message: 'Please provide an email and password'
        })
    }
    // To check user login information
    dataBase.query('SELECT * FROM u WHERE email = ?', [email], async(error, results) => {
        console.log(results);
        // if !results || !password
        if (results.length <= 0) {
          console.log('email no dey...')
            return res.status(401).render('signIn', {
                message: 'Email is incorrect'
            });
        } else if (!(await bcrypt.compare(password, results[0].password))) {
          console.log('password do not match..')
            return res.status(401).render('signIn', {
                message: 'Password is incorrect'
            });
        } else {
            // res.send('Welcome to your login page');
            res.status(200).render('welcome', {
                message: 'Welcome to your dashbord page'
            })
        }
    })
} catch (error) {
    console.log(error);
}
});

passport.serializeUser(function(user, done) {
    done(null, user_Id);
  });
  
  passport.deserializeUser(function(id, done) {
      done(err, user_Id);
  });


// Logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   req.flash('success_msg', 'You are logged out');
//   res.redirect('/users/login');
// });


module.exports = router;