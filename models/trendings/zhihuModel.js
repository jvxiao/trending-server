const axios = require('axios');
const { BaseModel } = require('./baseModel');

class ZhihuModel extends BaseModel{
  ZHIHU_TRENDING_URL = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total';
  constructor() {
    super()
  }

  getTrending(param = { limit: 50 }) {
    return new Promise(async (resolve, reject) => {
      console.log(this.isExpire(), this.lastUpdate)
      if(!this.isExpire() && this.cache.length) {
        resolve(this.cache);
        return;
      }
      try {
        const res = await axios.get(this.ZHIHU_TRENDING_URL, param)
        if(res.status === 200) {
          this.cache = this.formatData(res.data.data);
          resolve(this.cache)
        }
      } catch(err) {
        reject(err)
      }
    })
  }

  formatData(data) {
    if (!data || !data.length ) [];

    return data.map(item => {
      return {
        title: item?.target?.title || '',
        url: (item?.target?.url || '').replace('https://api.zhihu.com/questions', 'https://www.zhihu.com/question'),
        excerpt: item?.target?.excerpt
      }
    })
  }
}

module.exports = new ZhihuModel()

