const axios = require('axios');
const cheerio = require('cheerio');
axios.defaults.withCredentials = true;

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Referer': 'https://s.weibo.com/top/summary',
  'Cookie': 'SUB=_2AkMQpqgIf8NxqwFRmfEXyG3ra4R1yQ3EieKm-lnTJRMxHRl-yT9kqhwrtRB6OyaG5xkDT9448F41U5GfKnilcCXH3Gx1; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9W5Kr.hBeAD.JFWq5GYBnzh8; _s_tentry=passport.weibo.com; Apache=2463985749878.62.1744447317272; SINAGLOBAL=2463985749878.62.1744447317272; ULV=1744447317284:1:1:1:2463985749878.62.1744447317272:'
};
class WeiboModel {
  WEIBO_TRENDING_URL = 'https://s.weibo.com/top/summary?cate=realtimehot'
 
  getTrending(param = { limit: 50 }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(this.WEIBO_TRENDING_URL, {
          headers
        })
        
        if(res.status === 200) {
          resolve(this.formatData(res.data))
        }
      } catch(err) {
        reject(err)
        // throw err
      }
    })
  }

  formatData(data) {
    const $ = cheerio.load(data);
    const result = [];

    $('.td-02').each((index, element) => {
      const titleElement = $(element).find('a');
      
      result.push({
        title: titleElement.text().trim(),
        url: 'https://s.weibo.com' + titleElement.attr('href')
      });
    });
    return result;
  }
}

module.exports = new WeiboModel()

