const path = require('path');
const fs = require('fs');

const notFound = (req, res, next) => {
  res.status(404).json(`${req.url}尚未配置`);
};

const generateMockDataPath = (mockPath) => {
  const baseApiPath = path.join(__dirname, '../routes/apiData');
  const mockDataPath = path.join(baseApiPath, mockPath);
  return mockDataPath;
}

module.exports = (mockPath) => {
  const mockDataPath = `${generateMockDataPath(mockPath)}.js`;
  if (fs.existsSync(mockDataPath)) {
    return require(mockDataPath);
  } else {
    return notFound;
  }
}