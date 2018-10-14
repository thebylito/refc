#!/usr/bin/env node
const program = require('commander');
const { execSync } = require('child_process');
const { createFile, createFolder } = require('./utils');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const { screen, duck, saga } = require('./generate');
const questions = require('./questions');

program
  .version('0.0.2')
  .description('Cli gerador de arquivos para react-native :)');

program
  .command('create')
  .alias('a')
  .description('Gere arquivos para seu querido app')
  .action(async () => {
    const { generateType } = await questions.componentType();
    switch (generateType) {
      case 'newScreen':
        screen();
        break;
      case 'newDuck':
        duck();
        break;
      case 'newSaga':
        saga();
        break;
    }
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
