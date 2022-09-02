const express = require('express');
const router = express.Router();

const checkPassword = require("../middleware/check-password")
const userCtrl = require('../controllers/user');

router.post('/signup', checkPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;