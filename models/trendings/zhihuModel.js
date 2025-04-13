const axios = require('axios')

class ZhihuModel {
  ZHIHU_TRENDING_URL = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total';
  
  getTrending(param = { limit: 50 }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(this.ZHIHU_TRENDING_URL, param)
        if(res.status === 200) {
          resolve(this.formatData(res.data.data))
        }
      } catch(err) {
        reject(err)
        // throw err
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

