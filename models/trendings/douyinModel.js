const axios = require('axios')
const { BaseModel } = require('./baseModel')
const expireTime = process.env.EXPIRE_TIME || 60 * 1000 * 10;


class DouyinModel extends BaseModel{
  constructor() {
    super()
  }

  DOUYIN_TRENDING_URL = 'https://aweme.snssdk.com/aweme/v1/hot/search/list/'
  getTrending(param = { limit: 50 }) {
    return new Promise(async (resolve, reject) => {
      if(!this.isExpire() && this.cache.length) {
        resolve(this.cache);
        return;
      }
      try {
        const res = await axios.get(this.DOUYIN_TRENDING_URL, param)
        if(res.status === 200) {
          this.cache = this.formatData(res.data.data);
          resolve(this.cache)
        }
      } catch(err) {
        reject(err)
        // throw err
      }
    })
  }

  formatData(data) {
    if (!data || !data.length ) [];

    return data.word_list.map(item => {
      return {
        title: item.word|| '',
        url: 'https://www.douyin.com/search/' + item.word,
        excerpt: ''
      }
    })
  }
}

module.exports = new DouyinModel()
