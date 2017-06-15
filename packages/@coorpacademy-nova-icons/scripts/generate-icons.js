const {camelCase, pascalCase} = require('change-case');
const {queue} = require('async');
const sax = require('sax');
const mkdirp = require('mkdirp-promise');
const fs = require('fs');
const path = require('path');
const walk = require('walk-promise');
const minimist = require('minimist');
const SVGO = require('svgo');
const stream = require('stream');

const MAX_SIMULTANEOUS_HANDLES = 1000;

const readQueue = queue(
  ({fileName}, done) => fs.readFile(fileName, 'utf8', done)
, MAX_SIMULTANEOUS_HANDLES);

const writeQueue = queue(
  ({fileName, data}, done) => fs.writeFile(fileName, data, done)
, MAX_SIMULTANEOUS_HANDLES);


const writeFile = (fileName, data) => new Promise(
  (resolve, reject) => writeQueue.push({fileName, data}, (err) => {
    if (err) reject(err);

    resolve();
  })
);

const formatAttribute = (name, value) => (
  name === 'fill' && value === '#757575' ? '{color}' : `"${value}"`
);

const formatAttributes = attributes => {
  const expressions = Object.keys(attributes)
    .filter(name => name !== 'id')
    .map(name => `${camelCase(name)}=${formatAttribute(name, attributes[name])}`)
    .join(' ');

  return expressions.length > 0 ? ` ${expressions}` : '';
};

const componentize = async (basename, svgData) => {
  const inputStream = new stream.Readable();
  const componentName = `Nova${pascalCase(basename).replace('_', '')}`;
  const saxStream = sax.createStream(true, {lowercase: true});
  const meta = {indent: 6, open: false, done: false, data: ''};

  const writeLine = line => {
    meta.data += `${line || ''}\n`;
  };

  const writeIndentedLine = line => writeLine(
    `${Array(meta.indent).fill().map((_, i) => ' ').join('')}${line}`
  );

  saxStream.on('opentag', ({name, attributes}) => {
    if (name === 'svg' && !meta.done) {
      writeLine(`import React from 'react';`);
      writeLine(`import IconBase from 'react-icon-base';`);
      writeLine();
      writeLine(`const ${componentName} = props => {`);
      writeLine(`  const {color = '#757575', ...baseProps} = props;`);
      writeLine();
      writeLine(`  return (`);
      writeLine(`    <IconBase viewBox="${attributes.viewBox}" {...baseProps}>`);

      meta.open = true;
    } else if (meta.open) {
      if (name === 'g') {
        writeIndentedLine(`<g${formatAttributes(attributes)}>`);
        meta.indent += 2;
      } else {
        writeIndentedLine(`<${name}${formatAttributes(attributes)} />`);
      }
    }
  });

  saxStream.on('closetag', name => {
    if (name === 'svg') {
      meta.open = false;
      meta.done = true;
      writeLine(`    </IconBase>`);
      writeLine(`  );`);
      writeLine(`};`);
      writeLine();
      writeLine(`export default ${componentName};`);
    } else if (meta.open) {
      if (name === 'g') {
        meta.indent -= 2;
        writeIndentedLine(`</g>`);
      }
    }
  });

  inputStream.pipe(saxStream);
  inputStream.push(svgData);
  inputStream.push(null);

  return new Promise(resolve => inputStream.on('end', () => resolve(meta.data)));
};

const optimizeSVG = fileName => new Promise(
  resolve => (
    readQueue.push({fileName}, (err, input) => {
      const svgo = new SVGO();

      svgo.optimize(input, ({data}) => resolve(data));
    })
  )
);

const generateComponent = async ({destDir, dest, src, basename}) => {
  const optimizedSVG = await optimizeSVG(src);
  const componentFeed = await componentize(basename, optimizedSVG);

  await mkdirp(destDir);
  await writeFile(dest, componentFeed);
};

const generateComponents = async ({novaPath, category}) => {
  const srcPath = path.join(novaPath, 'SVG', category.src);
  const files = await walk(srcPath);
  const tasks = files
    .filter(({name}) => name.match(/\.svg$/))
    .map(async ({root, name}) => {
      const src = path.join(root, name);
      const subcat = path.basename(path.dirname(src))
        .match(/^[0-9]+\-(.*)$/)[1]
        .toLowerCase()
        .replace('&', '-and-');
      const destDir = path.join(__dirname, '..', 'src', category.dest, subcat);
      const basename = path.basename(src, '.svg');
      const dest = path.join(destDir, `${basename}.js`);

      return generateComponent({destDir, dest, src, basename});
    });


  return Promise.all(tasks);
};

const runScript = async () => {
  const argv = minimist(process.argv.slice(2));
  const [novaPath = path.join(__dirname, '..', 'third-party', 'Nova-Icons')] = argv._;

  return Promise.all(['Solid icons', 'Line icons', 'Composition icons'].map(
    src => generateComponents({
      novaPath,
      category: {
        src,
        dest: src.split(' ')[0].toLowerCase()
      }
    })
  ));
};

runScript();
