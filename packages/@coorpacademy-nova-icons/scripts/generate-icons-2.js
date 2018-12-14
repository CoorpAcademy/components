/* eslint-disable no-console */

import path from 'path';
import fs from 'fs';

import chalk from 'chalk';
import globby from 'globby';
import shelljs from 'shelljs';
import svgr from '@svgr/core';

const searchPath = path.resolve(`${__dirname}/../third-party`);
const outputPath = path.resolve(`${__dirname}/../src/components`);
shelljs.mkdir('-p', outputPath);

const generateComponent = ({name, content}, native) => {
  const options = {
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    noSemi: true,
    icon: true,
    dimensions: false,
    replaceAttrValues: {
      '#757575': 'currentColor'
    },
    native
  };
  return svgr(content, options).then(jsCode => {
    const extension = (native && 'native') || 'web';
    const fileName = path.join(outputPath, name.replace('.svg', `.${extension}.js`));
    fs.writeFileSync(fileName, jsCode);

    return fileName;
  });
};

globby
  .sync('**/*.svg', {
    cwd: searchPath,
    nodir: true,
    absolute: true
  })
  .sort()
  .map(file => ({
    name: file.split(/[\\/]/).pop(),
    content: fs.readFileSync(file)
  }))
  .map(file => Promise.all([generateComponent(file), generateComponent(file, true)]))
  .map(result =>
    result
      .then(fileNames =>
        console.log(
          chalk.underline('Components generated:'),
          ...fileNames.map(fileName => `\n - ${chalk.green(fileName)}`)
        )
      )
      .catch(e => console.error(e))
  );
