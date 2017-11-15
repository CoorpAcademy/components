const {Transform} = require('stream');
const {relative, resolve, dirname} = require('path');
const {set, mapValues, join, pipe, map, keys, values} = require('lodash/fp');
const createComponentStream = require('./components');
const createComponentFixtureStream = require('./component-fixtures');

const mapValuesWithKey = mapValues.convert({cap: false});

const createComponentIndexStream = (cwd, target) => {
  return createComponentStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const {title, path} = chunk;
        const relativePath = relative(dirname(target), path);
        const line = `export ${title} from './${relativePath}';\n`;
        callback(null, line);
      }
    })
  );
};
const createComponentFixtureIndexStream = (cwd, target) => {
  return createComponentFixtureStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const {fixture, title, path} = chunk;
        const relativePath = relative(dirname(target), path);
        const line = `export ${title}Fixture${fixture} from './${relativePath}';\n`;
        callback(null, line);
      }
    })
  );
};
const createComponentExportIndexStream = (cwd, target) => {
  return createComponentStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const {title, type} = chunk;
        this.map = set([type, title], true, this.map);
        callback(null);
      },
      flush(callback) {
        const types = pipe(
          mapValuesWithKey((titles, type) => {
            return `${type}: {\n    ${pipe(keys, join(',\n    '))(titles)}\n  }`;
          }),
          values,
          join(',\n  ')
        )(this.map);
        this.push(`
export const components = {
  ${types}
};
`);

        callback(null);
      }
    })
  );
};
const createComponentFixtureExportIndexStream = (cwd, target) => {
  return createComponentFixtureStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const {title, type, fixture} = chunk;
        this.map = set([type, title, fixture], true, this.map);
        callback(null);
      },
      flush(callback) {
        this.push(
          pipe(
            mapValuesWithKey((titles, type) => {
              return pipe(
                mapValuesWithKey((fixtures, title) => {
                  return pipe(
                    keys,
                    map(fixture => `${title}Fixture${fixture}`),
                    join(',\n      '),
                    s => `${title}: {\n      ${s}\n    }`
                  )(fixtures);
                }),
                values,
                join(',\n    '),
                s => `${type}: {\n    ${s}\n  }`
              )(titles);
            }),
            values,
            join(',\n  '),
            s => `
export const fixtures = {
  ${s}
};
`
          )(this.map)
        );

        callback(null);
      }
    })
  );
};

module.exports = createComponentIndexStream;

if (!module.parent) {
  const target = resolve(process.cwd(), process.argv.pop());
  const cwd = resolve(process.cwd(), process.argv.pop());
  const componentIndexStream = createComponentIndexStream(cwd, target);
  const componentFixtureIndexStream = createComponentFixtureIndexStream(cwd, target);
  const componentExportIndexStream = createComponentExportIndexStream(cwd, target);
  const componentFixtureExportIndexStream = createComponentFixtureExportIndexStream(cwd, target);

  process.stdout.write(`/* eslint-disable max-len */\n\n`);

  componentIndexStream.pipe(process.stdout);
  componentIndexStream.on('end', () => componentFixtureIndexStream.pipe(process.stdout));
  componentFixtureIndexStream.on('end', () => componentExportIndexStream.pipe(process.stdout));
  componentFixtureIndexStream.on('end', () =>
    componentFixtureExportIndexStream.pipe(process.stdout)
  );
}
