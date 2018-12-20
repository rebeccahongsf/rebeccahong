#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const details = {
  github: 'https://github.com/jwu910',
  portfolio: 'http://joshuawu.me',
  twitter: 'https://twitter.com/jwu910',
};

const card = boxen(`
${chalk.bold('Joshua Wu')} | Software Engineer
${chalk.bold('-'.repeat(40))}

${chalk.bold('Twitter:')} ${details.twitter}
${chalk.bold('Github:')} ${details.github}
${chalk.bold('Portfolio:')} ${details.portfolio}
`,
    {
        borderColor: 'cyan',
        borderStyle: 'double',
        padding: 1,
    }
);

console.log(card);
