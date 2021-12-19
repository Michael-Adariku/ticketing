const express = require('express');
const router = express.Router();

// TODO : protected page, to be accessed only by logged in users
router.get('/profile1', (req, res) => {
    
    res.render('index')
})

router.get('/profile2', (req, res) => {
    res.send("this is the profile of page 2")
})

module.exports = router