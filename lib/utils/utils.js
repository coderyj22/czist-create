const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

/**
 * 编译文件
 * @param {String} template 使用哪个模板
 * @param {String} fileName 创建的文件名称
 */
const compiler = (template, data) => {
  return new Promise((resolve, reject) => {
    const templatePosition = path.resolve(__dirname, `../template/${template}`);
    ejs.renderFile(templatePosition, { data }, {}, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

/**
 * 写入文件
 * @param {String} targetPath 需要写入的位置
 * @param {String} data 写入的数据
 */
const writeFile = async (targetPath, data) => {
  if (fs.existsSync(path.dirname(targetPath))) {
    return fs.promises.writeFile(targetPath, data);
  } else {
    createDir(targetPath);
    // console.log("创建完成");
    // console.log(targetPath, fs.existsSync(path.dirname(targetPath)));
    return fs.promises.writeFile(targetPath, data);
  }
};

// 递归创建文件
async function createDir(pathName) {
  // 判断当前是否为有效文件
  if (!validPath(pathName)) {
    createDir(path.dirname(pathName));
  }
  if (!pathName.split("\\").pop().includes(".")) {
    fs.mkdirSync(pathName);
  }
}

// 判断是否为有效地址
const validPath = (pathName) => {
  return fs.existsSync(path.dirname(pathName));
};

/**
 * 将传入的数据 转换过后传递给ejs进行编译
 * @param {String} name
 */
const changeData = (name) => {
  return {
    name,
    lowerName: String(name).replace(name[0], name[0].toLowerCase()),
  };
};

module.exports = {
  compiler,
  writeFile,
  changeData,
};
