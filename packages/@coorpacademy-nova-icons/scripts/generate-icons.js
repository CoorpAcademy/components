// @flow

/* eslint-disable no-console */

import path from 'path';
import fs from 'fs';

import chalk from 'chalk';
import glob from 'glob';
import svgr from '@svgr/core';
import mkdirp from 'mkdirp-promise';

import whiteList from '../icons';
import type {Icon} from '../icons';
import {parseMeta, getSVGFilePath} from './modules/iconjar-reader';
import type {Meta, IconSetGroupItem} from './modules/iconjar-reader';
import {formatKebabCase, formatPascalCase} from './modules/string-formatter';

const iconsPath = path.resolve(`${__dirname}/../third-party`);
const srcPath = path.resolve(`${__dirname}/../src`);
const componentsPath = path.resolve(`${srcPath}/components`);
mkdirp(componentsPath);

type IconJar = {|
  fileName: string,
  meta: Meta
|};

type JSXAttribute = {|
  name: {
    name: string
  },
  value?: {
    value: string
  }
|};

type JSXElement = {|
  openingElement?: JSXElement,
  children?: Array<JSXElement>,
  attributes?: Array<JSXAttribute>
|};

const isFillAttribute = ({name: {name}, value: {value} = {}}: JSXAttribute): boolean =>
  name === 'fill' && value === '#757575';

const isStrokeAttribute = ({name: {name}, value: {value} = {}}: JSXAttribute): boolean =>
  name === 'stroke' && value !== 'none';

const replaceWithPropValue = (types, identifier: string) =>
  types.jsxExpressionContainer(types.identifier(identifier));

const replaceWithCurrentColor = types => types.stringLiteral('currentColor');

const findElementAndReplaceAttributes = (
  {openingElement, children, attributes, ...properties}: JSXElement,
  native: boolean,
  types
): JSXElement => {
  let newAttributes;
  if (attributes) {
    newAttributes = attributes.map((attribute: JSXAttribute): JSXAttribute => {
      if (isFillAttribute(attribute) || isStrokeAttribute(attribute)) {
        return {
          ...attribute,
          value: native
            ? replaceWithPropValue(types, 'props.color')
            : replaceWithCurrentColor(types)
        };
      }
      return attribute;
    });
  }

  return {
    ...properties,
    openingElement:
      openingElement !== undefined
        ? findElementAndReplaceAttributes(openingElement, native, types)
        : undefined,
    children:
      children !== undefined
        ? children.map(child => findElementAndReplaceAttributes(child, native, types))
        : undefined,
    attributes: newAttributes
  };
};

const template = (replaceColors?: boolean = true) => (
  {template: templateAlias, types},
  opts,
  {imports: importsAlias, componentName, props, jsx, exports: exportsAlias}
): // eslint-disable-next-line flowtype/no-weak-types
Object => {
  const extendedJsx = replaceColors
    ? findElementAndReplaceAttributes(jsx, opts.native, types)
    : jsx;

  // @todo add flow type
  return templateAlias.ast`
    ${importsAlias}
    const ${componentName} = props => ${extendedJsx}
    ${exportsAlias}
  `;
};

const generateComponent = (
  fileContent: Buffer,
  fileName: string,
  replaceColors?: boolean,
  native?: boolean = false
): string => {
  const options = {
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    noSemi: true,
    icon: true,
    dimensions: false,
    native,
    template: template(replaceColors)
  };
  const extensionSuffix = (native && '.native') || '';
  const extendedFileName = fileName.replace('.svg', `${extensionSuffix}.js`);
  // $FlowFixMe path.join() is defined
  const outputPath = path.join(componentsPath, extendedFileName);

  svgr(fileContent, options)
    .then(async (jsCode): Promise<string> => {
      await mkdirp(path.dirname(outputPath));
      fs.writeFileSync(outputPath, jsCode);

      console.log(`- ${chalk.green(extendedFileName)}`);
      return outputPath;
    })
    .catch(e => console.log(`- ${chalk.red(extendedFileName)}\n`, e));

  return extendedFileName;
};

const wrongFiles = whiteList.filter(({filePath}) => !fs.existsSync(filePath));
if (wrongFiles.length > 0) {
  throw new Error(
    chalk.red('Invalid or not found icons:', ...wrongFiles.map(({filePath}) => `\n - ${filePath}`))
  );
}

const findIcon = (filePath: string): Icon | void =>
  whiteList.find(({filePath: whiteListFilePath}) => whiteListFilePath === filePath);

type OutputFile = {|
  name: string,
  path: string
|};

const files: Array<OutputFile> = glob
  .sync('**/*.iconjar', {
    cwd: iconsPath,
    absolute: true
  })
  .sort()
  .map((file): IconJar => {
    console.log(file);
    const fileName = file.split(/[\\/]/).pop();

    return {
      fileName,
      meta: parseMeta(fileName)
    };
  })
  .map(({fileName: iconJarFileName, meta: {sets, groups, items}}): Array<string> => {
    console.log(chalk.underline('Iconjar:'), iconJarFileName);

    // $FlowFixMe Object.values() returns mixed
    const itemArray: Array<IconSetGroupItem> = Object.values(items);
    // $FlowFixMe Object.values() returns mixed
    const setArray: Array<Set> = Object.values(sets);

    return setArray
      .map(({name: setName, identifier: setIdentifier}): Array<string> => {
        const itemArrayFiltered = itemArray
          .filter(item => item.parent === setIdentifier)
          .map(item => ({
            item,
            filePath: getSVGFilePath(iconJarFileName, item.file)
          }))
          .filter(({filePath}) => findIcon(filePath))
          .map(({item, filePath}): {
            item: IconSetGroupItem,
            filePath: string,
            replaceColors?: boolean
          } => {
            const {replaceColors} = findIcon(filePath) || {};
            return {
              item,
              filePath,
              replaceColors
            };
          });

        return itemArrayFiltered
          .map(({item, filePath, replaceColors}): Array<string> => {
            const content = fs.readFileSync(filePath);
            // $FlowFixMe path.join() is defined
            const outputFileName = path.join(
              formatKebabCase(iconJarFileName.replace('.iconjar', '')),
              formatKebabCase(setName, true),
              formatKebabCase(item.file)
            );

            return [
              generateComponent(content, outputFileName, replaceColors),
              generateComponent(content, outputFileName, replaceColors, true)
            ];
          })
          .reduce((result, outputFileNames) => result.concat(outputFileNames), []);
      })
      .reduce((result, outputFileNames) => result.concat(outputFileNames), []);
  })
  .reduce((result, outputFileNames) => result.concat(outputFileNames), [])
  .filter(outputFileName => !outputFileName.includes('.native'))
  .map(outputFileName => ({
    name: formatPascalCase(outputFileName),
    path: outputFileName.replace('.js', '')
  }));

const sortedFiles = files.sort((a, b): number => {
  if (a.name > b.name) return 1;
  else if (a.name < b.name) return -1;
  return 0;
});
const componentsImports = sortedFiles
  .map(({name, path: filePath}) => `import _${name} from './components/${filePath}';`)
  .join('\n');
const componentsExports = sortedFiles
  .map(({name, path: filePath}) => `export const ${name}: Icon = _${name};`)
  .join('\n');

fs.writeFileSync(
  // $FlowFixMe path.join() is defined
  path.join(srcPath, 'index.js'),
  `// @flow

// THIS FILE IS AUTOGENERATED

/* eslint-disable import/max-dependencies */

import type {Icon} from './types';

export type {Icon};

${componentsImports}

${componentsExports}
`
);
