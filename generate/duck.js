const { createFile, createFolder } = require('../utils');
const questions = require('../questions');
const path = require('path');
const templates = require('../templates');

module.exports = async () => {
  const { duckName } = await questions.duckType();
  const duckToLower = duckName.toLowerCase();
  const contents = templates.duck.content({ duckName: duckToLower });
  const filename = path.join('src', 'store', 'ducks', `${duckToLower}.js`);
  const baseDir = filename.split(path.basename(filename))[0];
  createFolder(baseDir).then(() => {
    createFile(filename, contents);
  });
};
