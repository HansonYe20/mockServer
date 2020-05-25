## 项目描述
当前项目主要目的是分离前后端开发流程, 搭建简易本地服务
1. 生成h5页面
2. 结合mockjs生成api开发数据
3. 结合canvas生成图片
4. 读取服务器文件
5. 提供静态服务

## 启动
- npm run staticMock 静态服务
- npm run mock 实时监控文件变化

## 可以使用浏览器或者postman来查看
1. 接受get请求, 比如:
  ```
  localhost:3000/api/user/list
  ```
  需要配置在./routers/api.config.js以及./routes/api文件下
2. 接受post请求, 比如:
  ```
  http://localhost:3000/api/login/auth
  ```
  配置同上
3. 返回图片, 可以指定图片大小, 字体颜色, 背景色, 图片文案
  ```
  http://localhost:3000/image?text=卧槽&width=237&height=222&color=00ff00&bgColor=0f0f0f
  ```
4. 返回页面
  ```
  http://localhost:3000/
  ```
5. 返回静态服务文件内容, 可以在/public文件夹下配置
  ```
  http://localhost:3000/static/images/testImges.jpg
  ```
6. 返回文件
  ```
  localhost:3000/file/
  ```