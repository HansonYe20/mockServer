const express = require('express');
const router = express.Router();
const findMock = require('../middlewares/findMockData');
const _ = require('lodash');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const { createCanvas } = require('canvas')

// 有三种方法去处理文件/图片
// 1. 直接使用res.sendFile(文件路径)
// 2. 直接读取整个文件,使用res.end返回二进制数据
// 3. 使用canvas来生成二进制数据返回图片, 自由度比较高
router.get('/*', (req, res, next) => {

  // 1.
  // const filePath = path.join(__dirname, '../public/images/bg-banner.png');
  // const filePath = path.join(__dirname, '../public/images/btn.png');
  // res.sendFile( filePath );

  // 2.
  // fs.readFile(filePath, (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  //   res.contentType('image/png');
  //   res.end(data, 'binary');
  // });

  // 3. 参数 imageInfo
  // text: 'alkjlkk',
  // width: '237',
  // height: '222',
  // bgcolor: 'ff3300',
  // color: '990000'

  const defaultInfo = {
    width: 200,
    height: 100,
    text: '默认说明',
    bgColor: '9acd42',
    color: '0000ff',
  };

  const imageInfo = Object.assign(defaultInfo, req.query);

  console.log(imageInfo);

  const canvas = createCanvas(Number(imageInfo.width), Number(imageInfo.height))
  const ctx = canvas.getContext('2d')

  ctx.fillStyle =`#${imageInfo.bgColor}`; // 背景颜色
  ctx.fillRect(0, 0, Number(imageInfo.width), Number(imageInfo.height));
  
  ctx.fillStyle = `#${imageInfo.color}`; // 字体颜色
  ctx.font = '20px Impact'
  ctx.fillText(imageInfo.text, 5, 22);
  
  ctx.beginPath()
  ctx.stroke()

  res.end(canvas.toBuffer(), 'binary');

});

module.exports = router;