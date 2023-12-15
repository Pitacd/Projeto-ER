const router = require('express').Router();
const loginController = require('../controllers/loginController');

router.get('/login', loginController.get);
router.post('/login', loginController.post);

module.exports = router;