// @flow strict

import path from 'path';
import fs from 'fs';

import chalk from 'chalk';
import globby from 'globby';
import svgr from '@svgr/core';
import mkdirp from 'mkdirp';

import {parseMeta, parseSVGFile} from '../src/modules/iconjar-reader';
import type {Meta, Item} from '../src/modules/iconjar-reader';
import {formatKebabCase} from '../src/modules/string-formatter';

const iconsPath = path.resolve(`${__dirname}/../third-party`);
const componentsPath = path.resolve(`${__dirname}/../src/components`);
mkdirp(componentsPath);

type IconJar = {|
  fileName: string,
  meta: Meta
|};

const generateComponent = (fileContent: Buffer, fileName: string, native: boolean) => {
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
  const extension = (native && 'native') || 'web';
  const extendedFileName = fileName.replace('.svg', `.${extension}.js`);
  const outputPath = path.join(componentsPath, extendedFileName);

  svgr(fileContent, options)
    .then(jsCode => {
      mkdirp(path.dirname(outputPath));
      fs.writeFileSync(outputPath, jsCode);

      console.log(`- ${chalk.green(extendedFileName)}`);
    })
    .catch(e => console.log(`- ${chalk.red(extendedFileName)}`));
};

globby
  .sync('**/*.iconjar', {
    cwd: iconsPath,
    absolute: true
  })
  .sort()
  .map((file): IconJar => {
    const fileName = file.split(/[\\/]/).pop();

    return {
      fileName,
      meta: parseMeta(fileName)
    };
  })
  .forEach(({fileName: iconJarFileName, meta: {sets, groups, items}}) => {
    console.log(chalk.underline('Iconjar:'), iconJarFileName);

    const itemArray: Array<Item> = Object.values(items);
    const setArray: Array<Set> = Object.values(sets);

    setArray.forEach(({name: setName, identifier: setIdentifier}) => {
      console.log(chalk.underline('Set name:'), setName);

      itemArray.filter(item => item.parent === setIdentifier).map(item => {
        const content = parseSVGFile(iconJarFileName, item.file);
        const outputFileName = path.join(
          formatKebabCase(iconJarFileName.replace('.iconjar', '')),
          formatKebabCase(setName),
          formatKebabCase(item.file)
        );

        generateComponent(content, outputFileName);
        generateComponent(content, outputFileName, true);
      });
    });
  });
