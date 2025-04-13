
const WEIBO_TRENDING_URL = 'https://raw.githubusercontent.com/SnailDev/weibo-hot-hub/refs/heads/main/raw/hot-search-2025-04-11.json';




const zhihuModel = require('../models/trendings/zhihuModel');
const toutiaoModel = require('../models/trendings/toutiaoModel');
const douyinModel = require('../models/trendings/douyinModel');

class TrendingService {
  async getZhihu() {
    return await zhihuModel.getTrending();
  }

  async getToutiao() {
    return await toutiaoModel.getTrending();
  }

  async getDouyin() {
    return await douyinModel.getTrending();
  }

  async getWeibo() {

  }
}

module.exports = new TrendingService()