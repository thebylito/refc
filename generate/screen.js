const { createFile, createFolder } = require('../utils');
const questions = require('../questions');
const path = require('path');
const templates = require('../templates');

module.exports = async () => {
  const { className, componentType } = await questions.screenType();
  const contents = templates[componentType].content({ className });
  const styles = templates.styles.content();
  const filename = path.join(
    'src',
    'screens',
    `${className}Screen`,
    'index.js',
  );
  const baseDir = filename.split(path.basename(filename))[0];
  const stylesFile = path.join(
    'src',
    'screens',
    `${className}Screen`,
    'styles.js',
  );
  createFolder(baseDir).then(() => {
    createFile(stylesFile, styles);
    createFile(filename, contents);
  });
};
