const express = require('express');
const trendingController = require('../controllers/trendingController')
const router = express.Router();


router.get('/zhihu', trendingController.getZhihuTrending);
router.get('/toutiao', trendingController.getToutiaoTrending);
module.exports = router;