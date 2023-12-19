const router = require('express').Router();
const passAssociationController = require('../controllers/passAssociationController');

router.get('/pass/association', passAssociationController.get);
router.post('/pass/association', passAssociationController.post);

module.exports = router;