const router = require('express').Router();
const passVisualizationController = require('../controllers/passVisualizationController');

router.get('/pass', passVisualizationController.get);

module.exports = router;