const cors = require('cors');
const express = require('express');
const path = require('path');

const entryRouter = require('./routes/page/entry');
const moduleRouter = require('./routes/page/module');

const apiRoute = require('./routes/apis');
const imageRoute = require('./routes/images');
const fileRoute = require('./routes/files');

module.exports = (app) => {
  app.use('/static', express.static(path.join(__dirname, 'public')));
  app.use('/api', cors(), apiRoute);
  app.use('/image', imageRoute);
  app.use('/file', fileRoute);
  app.use('/module', moduleRouter); // 具体的模块页面
  app.use('/*', entryRouter); // 所有模块的列表页面
};
