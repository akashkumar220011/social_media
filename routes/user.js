const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

// Profile Route
router.get('/profile', usersController.profile);

// Sign Up & Sign In Routes
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

// Create New User & Create Session Routes
router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);

module.exports = router;
