const Mock = require('mockjs');
module.exports = (req, res, next) => {
  res.json({
    "code": "100",
    "msg": "请求成功",
    "info": Mock.mock({
      "list|0-10": [
        {
          "id": 10003,
          "email": "",
          "username": "admin",
          "password": "",
          "nickname": "admin",
          "roleId": 1,
          "createTime": "2017-10-30 11:52:38",
          "updateTime": "2020-03-07 07:31:44",
        }
      ],
    })
  });
}
