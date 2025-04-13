const axios = require('axios')

class DouyinModel {
  DOUYIN_TRENDING_URL = 'https://aweme.snssdk.com/aweme/v1/hot/search/list/'
  getTrending(param = { limit: 50 }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(this.DOUYIN_TRENDING_URL, param)
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
