#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const card = boxen(`
${chalk.bold('Joshua Wu')} | Software Engineer
${chalk.bold('-'.repeat(40))}

${chalk.bold('Github:')} https://github.com/jwu910
${chalk.bold('LinkedIn:')} https://linkedin.com/in/wujoshua
${chalk.bold('NPM:')} https://www.npmjs.com/~jwu910
${chalk.bold('Portfolio:')} http://joshuawu.me
${chalk.bold('Twitter:')} https://twitter.com/jwu910
`,
    {
        borderColor: 'cyan',
        borderStyle: 'double',
        padding: 1,
    }
);

console.log(card);
