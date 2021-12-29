const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated);
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
    title: 'About us'
  })
});
router.get('/contestant', (req, res) => {
  res.status(200).render('contestant', {
    title: 'Contestants'
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
router.get('/login', (req, res) => {
  res.status(200).render('login', {
    title: 'Log in profile'
  })
});




// payment service
router.get('/getRegNumber', (req, res) => {
  res.status(200).render('purchaseRegNumberForm', {
    title: 'purchase Reg Number'
  })
});

router.get('/GetTickets', (req, res) => {
  
  res.status(200).render('purchaseTicketsForm', {
    title: 'paystack' 
  })
})
// payment service ends here




router.get('/makePaymentTickets', (req, res) => {
  res.status(200).render('make-payment', {
    title: 'Make payment'
  })
});

router.get('/not-found', (req, res) => {

  res.status(200).render('not-available', {
  title: '404 not found'
})
});

// profile routes

router.get('/profile1', (req, res) => {
  res.render('./contestants/contestant01', {
      title: 'contestant number one'
  })
})

router.get('/profile2', (req, res) => {
  res.render('./contestants/contestant02', {
      title: 'contestant number two'
  })
})


router.get('/profile3', (req, res) => {
  res.render('./contestants/contestant03', {
      title: 'contestant number three'
  })
})


router.get('/profile4', (req, res) => {
  res.render('./contestants/contestant04', {
      title: 'contestant number four'
  })
})


router.get('/profile5', (req, res) => {
  res.render('./contestants/contestant05', {
      title: 'contestant number five'
  })
})


router.get('/profile6', (req, res) => {
  res.render('./contestants/contestant06', {
      title: 'contestant number six'
  })
})


router.get('/profile7', (req, res) => {
  res.render('./contestants/contestant07', {
      title: 'contestant number seven'
  })
})


router.get('/profile8', (req, res) => {
  res.render('./contestants/contestant08', {
      title: 'contestant number eight'
  })
})


router.get('/profile9', (req, res) => {
  res.render('./contestants/contestant09', {
      title: 'contestant number nine'
  })
})


router.get('/profile010', (req, res) => {
  res.render('./contestants/contestant010', {
      title: 'contestant number ten'
  })
})


module.exports = router;