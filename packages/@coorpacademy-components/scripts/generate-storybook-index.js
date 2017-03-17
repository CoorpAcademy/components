import {relative, join, dirname, basename} from 'path';
import _join from 'lodash/fp/join';
import flatten from 'lodash/fp/flatten';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import split from 'lodash/fp/split';
import toPairs from 'lodash/fp/toPairs';
import components from '../src/util/list-components';
import fixtures from '../src/util/list-fixtures';

const targetDir = join(__dirname, '../storybook');
const removeExt = path => join(dirname(path), basename(path, '.js'));

const mapObject = fn => pipe(toPairs, map(([key, value]) => fn(value, key)));
const indent = pipe(split('\n'), map(ln => `  ${ln}`), _join('\n'));

const _componentImports = pipe(
  mapObject((_components, type) =>
    mapObject((path, title) => {
      const relativePath = relative(targetDir, path);
      return `import ${title} from '${relativePath}';`;
    })(_components)
  ),
  flatten
)(components);

const _componentTypes = pipe(
  mapObject((_components, type) => [
    `${type}: {
${pipe(
  mapObject((path, title) => `${title}`),
  _join(',\n'),
  indent
)(_components)}
}`
  ]),
  _join(',\n')
)(components);

const _componentExport = [
  'export const components = {',
  indent(_componentTypes),
  '};'
];

const _fixtureImports = pipe(
  mapObject((titles, type) =>
    pipe(
      mapObject((_fixtures, title) =>
        pipe(
          mapObject((path, fixture) => {
            const relativePath = relative(targetDir, path);
            return `import ${title}Fixture${fixture} from '${removeExt(relativePath)}';`;
          }),
          flatten
        )(_fixtures),
      ),
      flatten
    )(titles)
  ),
  flatten
)(fixtures);

const _fixtureExports = [
  'export const fixtures = {',
  ...pipe(
    mapObject((titles, type) =>
      _join('\n', [
        `${type}: {`,
        pipe(
          mapObject((_fixtures, title) =>
            _join('\n', [
              `${title}: {`,
              pipe(
                mapObject((path, fixture) => `${fixture}: ${title}Fixture${fixture}`),
                _join(',\n'),
                indent
              )(_fixtures),
              '}'
            ])
          ),
          _join(',\n'),
          indent
        )(titles),
        '}'
      ])
    ),
    _join(',\n'),
    indent
  )(fixtures),
  '};'
];

const file = _join('\n', [
  ..._componentImports,
  ..._fixtureImports,
  '',
  ..._componentExport,
  ..._fixtureExports,
  ''
]);

if (!module.parent)
  process.stdout.write(file);

export default file;

