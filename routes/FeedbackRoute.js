const router = require('express').Router();
const schedulesController = require('../controllers/feedbackController'); 

router.get('/feedback', feedbackController.get);

module.exports = router;