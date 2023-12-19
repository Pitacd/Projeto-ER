const router = require('express').Router();
const feedbackController = require('../controllers/feedbackController'); 

router.get('/feedback', feedbackController.get);

module.exports = router;