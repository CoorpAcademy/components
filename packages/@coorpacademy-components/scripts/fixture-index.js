const {createWriteStream} = require('fs');
const {Transform, Writable} = require('stream');
const {resolve, join, relative, basename, dirname} = require('path');
const pipe = require('lodash/fp/pipe');
const camelCase = require('lodash/fp/camelCase');
const upperFirst = require('lodash/fp/upperFirst');
const createComponentStream = require('./components');
const createComponentFileStream = require('./component-files');

const FIXTURE_NAME = /^test\/fixtures\/(.*)\.js$/;
const getFixtureName = path => FIXTURE_NAME.exec(path)[1];

const pascalCase = pipe(camelCase, upperFirst);

const createComponentIndexStream = (cwd, macroPath) => {
  return createComponentStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(component, encoding, callback) {
        const {path, title, type} = component;
        const testPath = join(path, 'test/fixtures.js');

        const fixtureWriter = createWriteStream(testPath);
        fixtureWriter.write(`import test from 'ava';\n`);
        fixtureWriter.write(
          `import renderComponentMacro from '${relative(dirname(testPath), macroPath)}';\n`
        );
        fixtureWriter.write(`import ${title} from '..';\n`);

        createComponentFileStream(path, 'test/fixtures/*.js').pipe(
          new Writable({
            objectMode: true,
            write(chunk, _e, cb) {
              const fixturePath = join(path, chunk);
              const fixture = getFixtureName(chunk);

              fixtureWriter.write(
                `import fixture${pascalCase(fixture)} from './fixtures/${basename(
                  fixturePath,
                  '.js'
                )}';\n`
              );

              cb(null);
            },
            final(cb) {
              fixtureWriter.write(`\n`);
              cb(null);
            }
          })
            .on('error', callback)
            .on('finish', () => {
              createComponentFileStream(path, 'test/fixtures/*.js').pipe(
                new Writable({
                  objectMode: true,
                  write(chunk, _e, cb) {
                    const fixture = getFixtureName(chunk);

                    fixtureWriter.write(
                      `test('${type} › ${title} › ${pascalCase(
                        fixture
                      )} › should be rendered', renderComponentMacro, ${title}, fixture${pascalCase(
                        fixture
                      )});\n`
                    );

                    cb(null);
                  }
                })
                  .on('error', callback)
                  .on('finish', () => callback(null))
              );
            })
        );
      }
    })
  );
};

module.exports = createComponentIndexStream;

if (!module.parent) {
  const cwd = resolve(process.cwd(), process.argv.pop());
  const macroPath = resolve(__dirname, '../src/test/helpers/render-component');
  createComponentIndexStream(cwd, macroPath);
}
