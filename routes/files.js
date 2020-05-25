const express = require('express');
const router = express.Router();
const findMock = require('../middlewares/findMockData');
const _ = require('lodash');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

// 有三种方法去处理文件/图片
// 1. 直接使用res.sendFile(文件路径)
// 2. 直接读取整个文件,使用res.end返回二进制数据
// 3. 使用canvas来生成二进制数据返回图片, 自由度比较高
router.get('/*', (req, res, next) => {

  const filePath = path.join(__dirname, '../public/files/test.xlsx');
  res.sendFile( filePath );

});

module.exports = router;