
class BaseModel {
  constructor() {
    this.cache = []
    this.lastUpdate = Date.now()
    this.expireTime = 10 * 1000;
  }

  isExpire() {
    return (Date.now - this.lastUpdateast) > this.expireTime ;
  }

}

module.exports.BaseModel = BaseModel