#!/usr/bin/env node
const program = require('commander');
const updateNotifier = require('update-notifier');
const { screen, duck, saga } = require('./generate');
const questions = require('./questions');
const isRoot = require('./utils/isRootDir');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

program
  .version('1.0.4')
  .description('Cli gerador de arquivos para react-native :)');

program
  .command('create')
  .alias('a')
  .description('Gere arquivos para seu querido app')
  .action(async () => {
    try {
      await isRoot();
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
    } catch (e) {
      console.log(e);
    }
  });

program
  .command('teste')
  .alias('t')
  .description('Testar funcoes')
  .action(async () => {
    try {
      await isRoot();
      console.log('tudo certo');
    } catch (e) {
      console.log('tudo errado');
      console.log(e);
    }
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
