const express = require('express');
const trendingController = require('../controllers/trendingController')
const router = express.Router();


router.get('/zhihu', trendingController.getZhihuTrending);
router.get('/toutiao', trendingController.getToutiaoTrending);
router.get('/douyin', trendingController.getDouyinTrending);
router.get('/weibo', trendingController.getWeiboTrending);

module.exports = router;