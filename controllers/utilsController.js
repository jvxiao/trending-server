
const utils = require('../services/utils');

class UtilsController {
   async getRandomImage(req, res, next)  {
    try {
      const url = await utils.getRandomImage();
      res.json({
        status: 'success',
        data: url
      })
    } catch(err) {
      next(err)
    }
  }
}

module.exports = new UtilsController()