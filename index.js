#! /usr/bin/env node
const program = require("commander");

const help = require('./lib/core/help');

const createCommanders = require('./lib/core/create');

// 帮助信息
help();

// 创建命令
createCommanders();

program.version(require('./package.json').version);

program.parse(process.argv);
