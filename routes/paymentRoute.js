const router = require('express').Router();
const paymentController = require('../controllers/paymentController'); 

router.get('/payment', paymentController);

module.exports = router;