const {camelCase, pascalCase} = require('change-case');
const sax = require('sax');
const mkdirp = require('mkdirp-promise');
const fs = require('fs');
const path = require('path');
const walk = require('walk-promise');
const minimist = require('minimist');
const SVGO = require('svgo');
const stream = require('stream');

const formatAttributes = attributes => {
  const expressions = Object.keys(attributes)
    .filter(name => name !== 'id')
    .map(name => `${camelCase(name)}="${attributes[name]}"`)
    .join(' ');

  return expressions.length > 0 ? ` ${expressions}` : '';
};

const componentize = (basename, output) => {
  const componentName = `Nova${pascalCase(basename).replace('_', '')}`;
  const stream = sax.createStream(true, {lowercase: true});
  const meta = {indent: 4, open: false, done: false};
  const writeLine = line => output.write(`${line || ''}\n`);
  const writeIndentedLine = line => writeLine(
    `${Array(meta.indent).fill().map((_, i) => ' ').join('')}${line}`
  );

  stream.on('opentag', ({name, attributes}) => {
    if (name === 'svg' && !meta.done) {
      writeLine(`import React from 'react';`);
      writeLine(`import IconBase from 'react-icon-base';`);
      writeLine();
      writeLine(`const ${componentName} = props => (`);
      writeLine(`  <IconBase viewBox="${attributes.viewBox}" {...props}>`);

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

  stream.on('closetag', name => {
    if (name === 'svg') {
      meta.open = false;
      meta.done = true;
      writeLine(`  </IconBase>`);
      writeLine(`);`);
      writeLine();
      writeLine(`export default ${componentName};`);
    } else if (meta.open) {
      if (name === 'g') {
        meta.indent -= 2;
        writeIndentedLine(`</g>`);
      }
    }
  });

  return stream;
};

const optimizeSVG = fileName => new Promise(
  resolve => (
    fs.readFile(fileName, 'utf8', (err, input) => {
      const svgo = new SVGO();

      svgo.optimize(input, ({data}) => resolve(data));
    })
  )
);

const generateComponent = async ({destDir, dest, src, basename}) => {
  const inputStream = new stream.Readable();
  const optimizedSVG = await optimizeSVG(src);

  await mkdirp(destDir);


  inputStream.pipe(componentize(basename, fs.createWriteStream(dest)))
  inputStream.push(optimizedSVG);
  inputStream.push(null);
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
  const [novaPath] = argv._;

  return Promise.all([
    generateComponents({novaPath, category: {
      src: 'Solid icons',
      dest: 'solid'
    }}),
    generateComponents({novaPath, category: {
      src: 'Line icons',
      dest: 'line'
    }})
  ]);
};

runScript();
