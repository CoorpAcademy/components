const {join, relative} = require('path');
const {map} = require('rxjs/operators');
const {concat, of} = require('rxjs');
const {readComponentFixtures$} = require('./component-fixtures');
const {pascalCase} = require('./string');
const {readComponents$} = require('./components');

const generateStories$ = cwd =>
  readComponents$(cwd).pipe(
    map(({title, path, type, titleRaw, levels}) => {
      const testPath = join(path, 'test');
      const storiesPath = join(testPath, 'index.stories.tsx');
      return [
        storiesPath,
        concat(
          of(`import React from 'react';`, `import ${title} from '..';`),
          readComponentFixtures$({title, path, type}).pipe(
            map(
              ({fixture, fixturePath}) =>
                `import fixture${fixture} from './${relative(testPath, fixturePath)}';`
            )
          ),
          of(
            `
export default {
  title: '${[...levels.map(pascalCase), titleRaw].join('/')}',
  component: ${title}
};`
          ),
          readComponentFixtures$({title, path, type}).pipe(
            map(
              ({fixture}) =>
                `
export const ${pascalCase(fixture)} = (args: any) => <${title} {...args} />;
${pascalCase(fixture)}.args = fixture${fixture}.props;`
            )
          )
        )
      ];
    })
  );

module.exports.generateStories$ = generateStories$;
