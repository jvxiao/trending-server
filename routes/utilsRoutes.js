const express = require('express');
const utilsController = require('../controllers/utilsController')
const router = express.Router();

router.get('/randomImage', utilsController.getRandomImage)


module.exports = router;