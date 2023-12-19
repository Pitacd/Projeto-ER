const router = require('express').Router();
const feedbackController = require('../controllers/feedbackController'); 

router.get('/feedback', feedbackController.get);
router.post('/feedback', feedbackController.post);

module.exports = router;