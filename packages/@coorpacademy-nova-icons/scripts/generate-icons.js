// @flow

/* eslint-disable no-console */

import path from 'path';
import fs from 'fs';

import chalk from 'chalk';
import globby from 'globby';
import svgr from '@svgr/core';
import mkdirp from 'mkdirp-promise';

import whiteList from '../icons';
import {parseMeta, getSVGFilePath} from '../src/modules/iconjar-reader';
import type {Meta, Item} from '../src/modules/iconjar-reader';
import {formatKebabCase} from '../src/modules/string-formatter';

const iconsPath = path.resolve(`${__dirname}/../third-party`);
const componentsPath = path.resolve(`${__dirname}/../src/components`);
mkdirp(componentsPath);

type IconJar = {|
  fileName: string,
  meta: Meta
|};

const colors = ['#757575', '#14171A', '#607d8b'];

const generateComponent = (fileContent: Buffer, fileName: string, native?: boolean = false) => {
  const options = {
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    noSemi: true,
    icon: true,
    dimensions: false,
    replaceAttrValues: colors.reduce((result, color) => ({...result, [color]: 'currentColor'}), {}),
    native
  };
  const extension = (native && 'native') || 'web';
  const extendedFileName = fileName.replace('.svg', `.${extension}.js`);
  // $FlowFixMe path.join() is defined
  const outputPath = path.join(componentsPath, extendedFileName);

  svgr(fileContent, options)
    .then(async (jsCode): Promise<string> => {
      await mkdirp(path.dirname(outputPath));
      fs.writeFileSync(outputPath, jsCode);

      console.log(`- ${chalk.green(extendedFileName)}`);
      return jsCode;
    })
    .catch(e => console.log(`- ${chalk.red(extendedFileName)}`));
};

const wrongFiles = whiteList.filter(filePath => !fs.existsSync(filePath));
if (wrongFiles.length > 0) {
  throw new Error(chalk.red('Invalid icons:', ...wrongFiles.map(filePath => `\n - ${filePath}`)));
}

globby
  .sync('**/*.iconjar', {
    cwd: iconsPath,
    absolute: true,
    onlyFiles: false
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

    // $FlowFixMe Object.values() returns mixed
    const itemArray: Array<Item> = Object.values(items);
    // $FlowFixMe Object.values() returns mixed
    const setArray: Array<Set> = Object.values(sets);

    setArray.forEach(({name: setName, identifier: setIdentifier}) => {
      const itemArrayFiltered = itemArray
        .filter(item => item.parent === setIdentifier)
        .map(item => ({
          item,
          filePath: getSVGFilePath(iconJarFileName, item.file)
        }))
        .filter(({filePath}) =>
          whiteList.find(whiteListFilePath => whiteListFilePath === filePath)
        );
      if (itemArrayFiltered.length > 0) {
        console.log('Set name:', setName, `(${itemArrayFiltered.length})`);

        itemArrayFiltered.forEach(({item, filePath}) => {
          const content = fs.readFileSync(filePath);
          // $FlowFixMe path.join() is defined
          const outputFileName = path.join(
            formatKebabCase(iconJarFileName.replace('.iconjar', '')),
            formatKebabCase(setName, true),
            formatKebabCase(item.file)
          );

          generateComponent(content, outputFileName);
          generateComponent(content, outputFileName, true);
        });
      }
    });
  });
