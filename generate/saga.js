const { createFile, createFolder } = require('../utils');
const questions = require('../questions');
const path = require('path');
const templates = require('../templates');

module.exports = async () => {
  const { sagaName } = await questions.sagaType();
  const sagaToLower = sagaName.toLowerCase();
  const contents = templates.saga.content({ sagaName: sagaToLower });
  const filename = path.join('src', 'store', 'sagas', `${sagaToLower}.js`);
  const baseDir = filename.split(path.basename(filename))[0];
  createFolder(baseDir).then(() => {
    createFile(filename, contents);
  });
};
