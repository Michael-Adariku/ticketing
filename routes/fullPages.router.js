const express = require('express');
const router = express.Router();



router.get('/full2', (req, res) => {
  res.status(200).render('full-blog2', {
    title: 'Blog name'
  })
});


module.exports = router;