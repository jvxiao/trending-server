
const WEIBO_TRENDING_URL = 'https://raw.githubusercontent.com/SnailDev/weibo-hot-hub/refs/heads/main/raw/hot-search-2025-04-11.json';


const DOUYIN_TRENDING_URL = 'https://aweme.snssdk.com/aweme/v1/hot/search/list/'

const zhihuModel = require('../models/trendings/zhihuModel');
const toutiaoModel = require('../models/trendings/toutiaoModel');

class TrendingService {
  async getZhihu() {
    return await zhihuModel.getTrending();
  }

  async getToutiao() {
    return await toutiaoModel.getTrending()
  }

  async getDouyin() {

  }

  async getWeibo() {

  }
}

module.exports = new TrendingService()