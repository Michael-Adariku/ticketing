const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).render('index', {
    title: 'Homepage'
  })
});

router.get('/blog', (req, res) => {
  res.status(200).render('blog', {
    title: 'Blog'
  })
});
router.get('/about', (req, res) => {
  res.status(200).render('about-us', {
    title: 'About Mega'
  })
});
router.get('/contestant', (req, res) => {
  res.status(200).render('contestant', {
    title: 'About Mega'
  })
});
router.get('/Vote', (req, res) => {
  res.status(200).render('Vote', {
    title: 'Vote'
  })
});
router.get('/faq', (req, res) => {
  res.status(200).render('faq', {
    title: 'FAQ'
  })
});



router.get('/contact', (req, res) => {
  res.status(200).render('contact-us', {
    title: 'contact'
  })
});

router.get('/full1', (req, res) => {
  res.status(200).render('full-blog1', {
    title: 'full-blog1'
  })
});
router.get('/register', (req, res) => {
  res.status(200).render('register', {
    title: 'Register'
  })
});

// payment service
router.get('/getRegNumber', (req, res) => {
  res.status(200).render('getRegNumberForm', {
    title: 'purchase Reg Number'
  })
});
router.get('/makePaymentTickets', (req, res) => {
  res.status(200).render('make-payment', {
    title: 'Make payment'
  })
});

router.get('/ForGetTickets', (req, res) => {
  
  res.status(200).render('purchaseTicketsForm', {
    title: 'paystack' 
  })
})
// payment service ends here

router.get('/not-found', (req, res) => {

  res.status(200).render('not-available', {
  title: '404 not found'
})
});


// contestants

router.get('/profile1', (req, res) => {
  res.render('contestant01', {
      message: 'contestant number one'
  })
})

router.get('/profile2', (req, res) => {
  res.render('contestant02', {
      message: 'contestant number one'
  })
})

router.get('/profile3', (req, res) => {
  res.render('contestant03', {
      message: 'contestant number one'
  })
})

router.get('/profile4', (req, res) => {
  res.render('contestant04', {
      message: 'contestant number one'
  })
})

router.get('/profile5', (req, res) => {
  res.render('contestant05', {
      message: 'contestant number one'
  })
})

router.get('/profile6', (req, res) => {
  res.render('contestant06', {
      message: 'contestant number one'
  })
})

router.get('/profile7', (req, res) => {
  res.render('contestant07', {
      message: 'contestant number one'
  })
})

router.get('/profile8', (req, res) => {
  res.render('contestant08', {
      message: 'contestant number one'
  })
})

module.exports = router;