const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();




const sauceCtrl = require('../controllers/sauces');

router.get('/', auth, sauceCtrl.searchAllSauces);
router.post('/', auth, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.searchOneSauce);
router.put('/:id', auth, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;