const router = require('express').Router();
const passAssociationController = require('../controllers/passAssociationController');

router.get('/pass-association', passAssociationController);

module.exports = router;