const inquirer = require('inquirer');

const choices = [
  { name: 'Componente de Classe', value: 'rcc' },
  {
    name:
      'Componente de Classe - com Redux (mapStateToProps, mapDispatchToProps)',
    value: 'rcr',
  },
];

const questions = [
  {
    name: 'className',
    type: 'input',
    message: 'Nome da Classe (CamelCase):',
    validate: (input) => {
      if (/^([A-Za-z\d])+$/.test(input)) return true;
      else return 'O nome da classe só pode ter letras e numeros';
    },
  },
  {
    name: 'componentType',
    type: 'list',
    message: 'Que tipo de componente quer gerar?',
    choices: choices,
  },
];

module.exports = () =>
  new Promise((resolve, reject) => {
    inquirer.prompt(questions).then((answers) => {
      resolve(answers);
    });
  });
