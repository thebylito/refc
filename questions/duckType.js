const inquirer = require('inquirer');

const questions = [
  {
    name: 'duckName',
    type: 'input',
    message: 'Nome da Duck (CamelCase):',
    validate: (input) => {
      if (/^([A-Za-z\d])+$/.test(input)) return true;
      else return 'O nome da duck só pode ter letras e numeros';
    },
  },
];

module.exports = () =>
  new Promise((resolve, reject) => {
    inquirer.prompt(questions).then((answers) => {
      resolve(answers);
    });
  });
