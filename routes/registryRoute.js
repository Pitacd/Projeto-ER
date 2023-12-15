const router = require('express').Router();
const registryController = require('../controllers/registryController');

router.get('/register', registryController.get);
router.post('/register', registryController.post);

module.exports = router;