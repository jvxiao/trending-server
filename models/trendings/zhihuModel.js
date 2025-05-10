const axios = require('axios');
const { BaseModel } = require('./baseModel');
axios.defaults.withCredentials = true;

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Cookie': '_zap=cedf9daf-959d-416e-9a64-08741003041a; d_c0=AICYHXz9ghiPTsy0KwNtFdalhOTcykLIJRE=|1713887462; q_c1=f01161e0d64b4b6f983635029e4c943f|1716113431000|1716113431000; _xsrf=1zFzsvdlZtqZfNDf4U6XySPUSLKscDFo; __snaker__id=8WtRnqy0RYZUEClw; tst=h; z_c0=2|1:0|10:1745141577|4:z_c0|80:MS4xZk4xOUJBQUFBQUFtQUFBQVlBSlZUVWtOOG1pSmEydVI4MkY4TU1xNHVNV0JGMnF6X20tWTF3PT0=|cadf19ee339fcfb9e583e21bae8a244d1ffb890ae291169fa452fcb459198ff5; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1744207457,1744452770,1745040556,1745503157; __zse_ck=004_fmAyOCEKQhNGicXnNMOCYBRRj83fkNkYcdvBmTXRrRhWUBtbBoJj6WfOljZUBeTEFjHTKYtzK3ibgpWEzhMZCrkLEfSeHhnwwxyBAQPGaMBC0EmESabIBRoJgRutpO2M-Bt3j1I+ei0RwwYnDy0mLM/5vENPLFDX1z7srGJ+5kIXm3u6FLBhLR2EK4dCEDXjpsXEUubp97qJaO39fQ8bXvYCXVkPh00qO5ogDC4dfve2iANJ1KIGVTjHWeA3BWc77; BEC=d892da65acb7e34c89a3073e8fa2254f'
};
class ZhihuModel extends BaseModel{
  ZHIHU_TRENDING_URL = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50';
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
        const res = await axios.get(this.ZHIHU_TRENDING_URL, { 
          headers: headers
        })
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

