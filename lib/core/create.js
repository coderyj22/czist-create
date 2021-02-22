const program = require("commander");

const { addComponentAction, addPageAction } = require("./action");

const createCommands = () => {
  // 创建一个组件
  program
    .command("addComponent <name>")
    .description(
      `创建一个公共组件
      cit addComponent <CpnName>
    `
    )
    .action((name) => {
      // 默认创建在/src/components 文件目录下
      addComponentAction(name, program._optionValues.dest || "src/components");
    });

  // 添加页面
  program
    .command("addPage <name>")
    .description(
      `
    创建一个页面 包括model service
    cit addPage <PageName>
  `
    )
    .action((name) => {
      addPageAction(name, "src/pages");
    });
};

module.exports = createCommands;
