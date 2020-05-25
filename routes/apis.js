const express = require('express');
const router = express.Router();
const findMock = require('../middlewares/findMockData');
const _ = require('lodash');
const chalk = require('chalk');


// console.log('============apiConfig============');
const apiConfig = require('./api.config');
if(apiConfig && apiConfig.length){
  _.forEach(apiConfig, (apiItem) => {
    // console.log(chalk.bold.cyan(`*           ${apiItem}`));
    router[apiItem.type](apiItem.path, findMock(apiItem.path));
  });
}
// console.log('============apiConfig============');

router.post('/*', (req, res, next) => {
  console.error(chalk.bold.redBright(`tips: 请在api.config.js配置路径${req.path}, 且在apiData文件夹下配置相应mock数据`));
  res.json({
    "code": "9999",
    "msg": `请在api.config.js配置路径${req.path}, 且在apiData文件夹下配置相应mock数据`,
  });
});

module.exports = router;