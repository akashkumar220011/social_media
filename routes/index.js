const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home_controller");


console.log("router is loading");

router.get('/', homeController.home);
router.use('/users', require('./user'))


module.exports = router;