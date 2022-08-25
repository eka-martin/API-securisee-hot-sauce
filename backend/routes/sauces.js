const express = require('express');

const router = express.Router();



const sauceCtrl = require('../controllers/sauces');

router.get('/', sauceCtrl.searchAllSauces);
router.post('/', sauceCtrl.createSauce);
router.get('/:id', sauceCtrl.searchOneSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);

module.exports = router;