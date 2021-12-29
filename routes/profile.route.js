
const express = require('express');
const router = express.Router();



// profile routes

router.get('/profile1', (req, res) => {
    res.render('contestant01', {
        message: 'contestant number one'
    })
  })
  
  
  router.get('/profile2', (req, res) => {
    res.render('contestant02', {
        message: 'contestant number two'
    })
  })
  
  
  router.get('/profile3', (req, res) => {
    res.render('contestant03', {
        message: 'contestant number three'
    })
  })
  
  
  router.get('/profile4', (req, res) => {
    res.render('contestant04', {
        message: 'contestant number four'
    })
  })
  
  
  router.get('/profile5', (req, res) => {
    res.render('contestant05', {
        message: 'contestant number five'
    })
  })
  
  
  router.get('/profile6', (req, res) => {
    res.render('contestant06', {
        message: 'contestant number six'
    })
  })
  
  
  router.get('/profile7', (req, res) => {
    res.render('contestant07', {
        message: 'contestant number seven'
    })
  })
  
  
  router.get('/profile8', (req, res) => {
    res.render('contestant08', {
        message: 'contestant number eight'
    })
  })
  
  
  router.get('/profile9', (req, res) => {
    res.render('contestant09', {
        message: 'contestant number nine'
    })
  })
  
  
  router.get('/profile010', (req, res) => {
    res.render('contestant010', {
        message: 'contestant number ten'
    })
  })
  

module.exports = router