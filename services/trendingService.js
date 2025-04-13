
const zhihuModel = require('../models/trendings/zhihuModel');
const toutiaoModel = require('../models/trendings/toutiaoModel');
const douyinModel = require('../models/trendings/douyinModel');
const weiboModel = require('../models/trendings/weiboModel');

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
    return await weiboModel.getTrending();
  }
}

module.exports = new TrendingService()