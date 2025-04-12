const express = require('express');
const router = express.Router();

// 导入子路由模块
const exampleRoutes = require('./exampleRoutes');
const trendingRoutes = require('./trendingRoutes')
// 基础路由
router.get('/', (req, res) => {
  res.send('Welcome to Express API');
});

// 使用子路由（挂载到 /api 路径）
router.use('/api', exampleRoutes);
router.use('/api/trending', trendingRoutes)


// 404 处理（放在所有路由之后）
router.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    suggestion: 'Check your URL or contact support'
  });
});

module.exports = router;