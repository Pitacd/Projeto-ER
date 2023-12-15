const router = require('express').Router();
const passAssociationController = require('../controllers/passAssociationController');

router.get('/pass/pass-association', passAssociationController.get);

module.exports = router;