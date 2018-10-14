#!/usr/bin/env node
const program = require('commander');
const templates = require('./templates');
const { execSync } = require('child_process');
const { createFile, createFolder } = require('./utils');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const componentType = require('./componentType');

const CHOICES = [
  { name: 'Componente de Classe', value: 'rcc' },
  {
    name:
      'Componente de Classe - com Redux (mapStateToProps, mapDispatchToProps)',
    value: 'rcc',
  },
];

const perguntas = () =>
  new Promise((resolve, reject) => {
    const QUESTIONS = [
      {
        name: 'className',
        type: 'input',
        message:
          'Nome da Classe (Lembre-se de primeira letra Maiusculo para cada Palavra):',
        validate: (input) => {
          if (/^([A-Za-z\d])+$/.test(input)) return true;
          else return 'O nome da classe só pode ter letras e numeros';
        },
      },
      {
        name: 'componentType',
        type: 'list',
        message: 'Que tipo de componente quer gerar?',
        choices: CHOICES,
      },
    ];

    inquirer.prompt(QUESTIONS).then((answers) => {
      resolve(answers);
    });
  });

program
  .version('0.0.2')
  .description('Cli gerador de arquivos para react-native :)');

program
  .command('create')
  .alias('a')
  .description('Gere arquivos para seu querido app')
  .action(async () => {
    const { generateType } = await componentType();
    console.log(generateType);
    switch (generateType) {
      case 'newScreen':
        const { className, componentType } = await perguntas();
        const contents = templates[componentType].content({ className });
        const styles = templates.styles.content();
        const filename = path.join(
          'src',
          'screens',
          `${className}Screen`,
          'index.js',
        );
        const baseDir = filename.split(path.basename(filename))[0];
        createFolder(baseDir).then(() => {
          console.log(templates);
          createFile(filename, contents);
        });
        const stylesFile = path.join(
          'src',
          'screens',
          `${className}Screen`,
          'styles.js',
        );
        createFile(stylesFile, styles);
    }
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
