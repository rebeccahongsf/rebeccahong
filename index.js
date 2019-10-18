#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const card = boxen(`
${chalk.bold('Rebecca Hong')} | Front End Developer
${chalk.bold('-'.repeat(40))}

${chalk.bold('Github:')} https://github.com/rebeccahongsf
${chalk.bold('LinkedIn:')} https://linkedin.com/in/rehong
${chalk.bold('NPM:')} https://www.npmjs.com/~rebeccahong
${chalk.bold('Portfolio:')} http://rebeccahong.me
${chalk.bold('Instagram:')} https://instagram.com/doodledeveloper
`,
    {
        borderColor: 'cyan',
        borderStyle: 'double',
        padding: 1,
    }
);

console.log(card);
