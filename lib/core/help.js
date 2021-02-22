const program = require("commander");

const helpOptions = () => {
  program.option("-d --dest <dest>", "具体位置 例如 -d /src/components");
  program.option("-nf --needFolder", "是否需要外层的文件夹 例如 cit addComponent Home -nf");
};

module.exports = helpOptions;
