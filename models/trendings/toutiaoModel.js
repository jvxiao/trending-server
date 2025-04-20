const axios = require('axios');
const { BaseModel } = require('./baseModel');

const expireTime = process.env.EXPIRE_TIME || 20 * 1000 * 1;

const isExpire = (last, expireTime) => {
  return (Date.now() - last) > expireTime ;
}
class ToutiaoModel extends BaseModel{
  constructor() {
    super()
  }

  TOUTIAO_TRENDING_URL = 'https://i-lq.snssdk.com/api/feed/hotboard_online/v1/?category=hotboard_online&count=50';
  
  getTrending(param = { 
    count: 50,
    category: 'hotboard_online'
  }) {
    return new Promise(async (resolve, reject) => {
      if(!this.isExpire() && this.cache.length) {
        resolve(this.cache);
        return;
      }
      try {
        const res = await axios.get(this.TOUTIAO_TRENDING_URL, param)
        if(res.status === 200) {
          this.cache = this.formatData(res.data.data)
          this.lastUpdate = Date.now()
          resolve(this.cache);
        }
      } catch(err) {
        reject(err)
      }
    })
  }

  formatData(data) {
    if (!data || !data.length ) [];
    data = data.map(o => JSON.parse(o.content))
    return data.map(item => {
      return {
        title: item?.raw_data.title || '',
        url: 'https://so.toutiao.com/search?keyword='+ item?.raw_data.title,
        excerpt: ''
      }
    })
  }
}

module.exports = new ToutiaoModel()

