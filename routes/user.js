const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');

router.get('/profile', usersConrtoller.profile);
router.get('/sign_up', usersConrtoller.signUp);
router.get('/sign_in', usersConrtoller.signIn);

router.post('/create', usersConrtoller.create);

module.exports = router;