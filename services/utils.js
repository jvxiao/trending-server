const axios = require('axios')

const getRandomImage = async () => {
  const res = await axios('https://cdn.seovx.com/?mom=302')
  return res.request?.res?.responseUrl || ''
}


 module.exports = {
  getRandomImage
 }