const path = require("path");
const fs = require("fs");

let pathName = "H:\\code\\src\\Test\\Example\\Test\\Home.jsx";

// createFile(pathName);

function createFile(pathName) {
  let curPath = pathName;

  findValid(curPath);

  function findValid(_path) {
    if (!validPath(_path)) {
      curPath = path.dirname(_path);
      findValid(curPath);
    }
  }
  console.log("有效", curPath);
}

function validPath(pathName) {
  return fs.existsSync(path.dirname(pathName));
}

// 递归创建文件
function writeFile(pathName) {
  // 判断当前是否为有效文件
  if (!validPath(pathName)) {
    writeFile(path.dirname(pathName));
  }
  console.log('有效文件', pathName);
  if(!pathName.split('\\').pop().includes('.')){
    fs.mkdirSync(pathName);
  }
}

writeFile(pathName);