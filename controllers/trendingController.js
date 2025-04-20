const trendingService = require('../services/trendingService');

class TrendingController {
  constructor() {
    this.cache = []
    this.lastUpdate = Date.now()
  }

  async getZhihuTrending(req, res, next) {
    try {
      const trendings = await trendingService.getZhihu();
      res.json({
        status: 'success',
        data: trendings
      })
    }catch(err) {
      next(err)
    }
  }

  async getToutiaoTrending(req, res, next) {
    try {
      const trendings = await trendingService.getToutiao();
      res.json({
        status: 'success',
        data: trendings
      })
    }catch(err) {
      next(err)
    }
  }

  async getDouyinTrending(req, res, next) {
    try {
      const trendings = await trendingService.getDouyin();
      res.json({
        status: 'success',
        data: trendings
      })
    }catch(err) {
      next(err)
    }
  }

  async getWeiboTrending(req, res, next) {
    try {
      const trendings = await trendingService.getWeibo();
      res.json({
        status: 'success',
        data: trendings
      })
    }catch(err) {
      next(err)
    }
  }

}

module.exports = new TrendingController()