const Mock = require('mockjs');

module.exports = (req, res, next) => {
  res.json({
    "code": "100",
    "msg": "请求成功",
    "info": Mock.mock({
       "result": "success",
       "tip": "server success by local mock"
    }),
  });
}
