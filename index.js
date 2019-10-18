#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const card = boxen(`
${chalk.green.bold('Rebecca Hong')} | Front End Developer
${chalk.green.bold('-'.repeat(40))}

${chalk.green.bold('Github:')} https://github.com/rebeccahongsf
${chalk.green.bold('LinkedIn:')} https://linkedin.com/in/rehong
${chalk.green.bold('NPM:')} https://www.npmjs.com/~rebeccahong
${chalk.green.bold('Portfolio:')} http://rebeccahong.me
${chalk.green.bold('Instagram:')} https://instagram.com/doodledeveloper
`,
    {
        borderColor: '#00a7a7',
        borderStyle: 'bold',
        padding: 1
    }
);

console.log(card);
