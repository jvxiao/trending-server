require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT;

const app = express();

// 基础中间件
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// 路由
app.use('/', require('./routes'));

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

console.log('Server is starting...');
app.listen(port, () => {
  console.log(`✅ Server ready at http://localhost:${port}`);
});

module.exports = app;