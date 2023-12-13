const router = require('express').Router();
const schedulesController = require('../controllers/schedulesController'); 

router.get('/schedules', schedulesController);

module.exports = router;