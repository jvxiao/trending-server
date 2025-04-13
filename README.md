# trending-server
Backend service for trendingh-hub

### usage

```bash
# clone repo to local
git clone https://github.com/jvxiao/trending-server.git

# install dependencies
cd trending-server
npm install

# run the service
npm run start

```

### Api List

  - **知乎热搜榜数据**：  /api/trending/zhihu
  - **头条热搜榜数据**：  /api/trending/toutiao
  - **微博热搜榜数据**：  /api/trending/weibo
  - **抖音热搜榜数据**：   /api/trending/douyin

  ```
  数据格式：
  {
  "status": "success",
  "data": [
    {
      "title": "145%关税让1只熊猫玩偶卖80美元",
      "url": "https://s.weibo.com/weibo?q=%23145%25%E5%85%B3%E7%A8%8E%E8%AE%A91%E5%8F%AA%E7%86%8A%E7%8C%AB%E7%8E%A9%E5%81%B6%E5%8D%9680%E7%BE%8E%E5%85%83%23&t=31&band_rank=1&Refer=top"
    },
    {
      "title": "赵丽颖 转型",
      "url": "https://s.weibo.com/weibo?q=%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E8%BD%AC%E5%9E%8B&t=31&band_rank=2&Refer=top"
    },
    {
      "title": "美国多次发动关税战并受到惨痛教训",
      "url": "https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%9A%E6%AC%A1%E5%8F%91%E5%8A%A8%E5%85%B3%E7%A8%8E%E6%88%98%E5%B9%B6%E5%8F%97%E5%88%B0%E6%83%A8%E7%97%9B%E6%95%99%E8%AE%AD%23&t=31&band_rank=3&Refer=top"
    },
  ```