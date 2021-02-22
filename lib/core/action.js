const path = require("path");

const program = require("commander");
const { compiler, writeFile, changeData } = require("../utils/utils");

/**
 * 创建组件action
 * @param {String} name 创建的组件名称
 * @param {String} dest 创建组件位置
 */
const addComponentAction = async (name, dest) => {
  // result: ejs编译好之后的文件模板 -> 字符串
  const result = await compiler("component.jsx.ejs", changeData(name));
  // TODO 将对应的模板写入到jsx文件中
  const { needFolder } = program._optionValues;
  const targetPath = needFolder
    ? path.resolve(dest + `/${name}`, "index.jsx")
    : path.resolve(dest, `${name}.jsx`);
  writeFile(targetPath, result);
};

/**
 * 创建页面 包括 model、services
 * @param {String} name 页面的name
 */
const addPageAction = async (name, dest) => {
  // 添加页面的具体位置
  let pagePos = path.resolve(dest, `${name}/index.jsx`);
  let modelPos = path.resolve("src/models", `${name}.js`);
  let servicesPos = path.resolve("src/services", `${name}.js`);
  // jsx文件模板
  const resultPage = await compiler("component.jsx.ejs", changeData(name));
  const resultModel = await compiler("page.model.js.ejs", changeData(name));
  const resultServices = await compiler(
    "page.services.js.ejs",
    changeData(name)
  );

  // 写入jsx文件
  writeFile(pagePos, resultPage);
  writeFile(modelPos, resultModel);
  writeFile(servicesPos, resultServices);
};

module.exports = {
  addComponentAction,
  addPageAction,
};
