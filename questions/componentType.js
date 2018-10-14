const inquirer = require('inquirer');

const choices = [
  {
    name: 'Nova Screen',
    value: 'newScreen',
  },
  {
    name: 'Novo Duck - (Reducer, Types e Creators)',
    value: 'newDuck',
  },
  {
    name: 'Nova Saga - (Actions)',
    value: 'newSaga',
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
