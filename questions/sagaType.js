const inquirer = require('inquirer');

const questions = [
  {
    name: 'sagaName',
    type: 'input',
    message: 'Nome da Saga (lowercase):',
    validate: (input) => {
      if (/^([A-Za-z\d])+$/.test(input)) return true;
      else return 'O nome da saga só pode ter letras e numeros';
    },
  },
];

module.exports = () =>
  new Promise((resolve, reject) => {
    inquirer.prompt(questions).then((answers) => {
      resolve(answers);
    });
  });
