const fs = require('fs');

module.exports = () =>
  new Promise((resolve, reject) => {
    const exists = fs.existsSync('package.json');
    if (exists) return resolve();
    const err = 'Voce precisa executar à partir do diretorio root';
    reject(err);
  });
