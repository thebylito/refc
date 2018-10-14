const inquirer = require('inquirer');

const choices = [
  {
    name: 'Nova tela',
    value: 'newScreen',
  },
  {
    name: 'Novo duck - (Reducer, Types e Creators)',
    value: 'newDuck',
  },
];

const questions = [
  {
    name: 'generateType',
    type: 'list',
    message: 'O que voce quer gerar?',
    choices,
  },
];

module.exports = () =>
  new Promise((resolve, reject) => {
    inquirer.prompt(questions).then((answers) => {
      resolve(answers);
    });
  });
