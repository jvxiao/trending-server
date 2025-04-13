const axios = require('axios')

class ToutiaoModel {
  TOUTIAO_TRENDING_URL = 'https://i-lq.snssdk.com/api/feed/hotboard_online/v1/?category=hotboard_online&count=50';
  
  getTrending(param = { 
    count: 50,
    category: 'hotboard_online'
  }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(this.TOUTIAO_TRENDING_URL, param)
        if(res.status === 200) {
          resolve(this.formatData(res.data.data));
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

