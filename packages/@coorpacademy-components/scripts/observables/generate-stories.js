const {join, dirname, relative} = require('path');
const {of, from, concat} = require('rxjs');
const {map, toArray, mergeMap} = require('rxjs/operators');
const {readComponentFixtures$} = require('./component-fixtures');
const {pascalCase} = require('./string');
const {readComponents$} = require('./components');
const {
  readAllStoryFiles$,
  deleteFolder$,
  removeEmptyFolders$
} = require('./cleanup');

/**
 * Generate story files for all current components.
 */
const generateStories$ = (cwd) => {
  // 1) Build [storiesPath, lines$] pairs for each component
  const generation$ = readComponents$(cwd).pipe(
    map(({title, path, type, titleRaw, levels}) => {
      const testPath = join(path, 'test');
      const storiesPath = join(testPath, 'index.stories.tsx');

      // Observable that emits lines for fixture imports
      const fixtureImports$ = readComponentFixtures$({title, path, type}).pipe(
        map(
          ({fixture, fixturePath}) =>
            `import fixture${fixture} from './${relative(testPath, fixturePath)}';`
        )
      );

      const fixtureExports$ = readComponentFixtures$({title, path, type}).pipe(
        map(
          ({fixture}) => `
export const ${pascalCase(fixture)} = (args: any) => <${title} {...args} />;
${pascalCase(fixture)}.args = fixture${fixture}.props;`
        )
      );

      // Combine all lines in a single stream with concat()
      const content$ = concat(
        // 1) Basic imports
        of(`import React from 'react';`, `import ${title} from '..';`),
        // 2) Fixture imports
        fixtureImports$,
        // 3) Default export
        of(`
export default {
  title: '${[...levels.map(pascalCase), titleRaw].join('/')}',
  component: ${title}
};`),
        // 4) Fixture exports
        fixtureExports$
      );

      return [storiesPath, content$];
    }),
    toArray() // gather all story definitions into an array
  );

  // 2) Remove stale story folders, then emit the new generation array
  return generation$.pipe(
    mergeMap((storyEntries) => {
      const desiredStoryPaths = new Set(storyEntries.map(([p]) => p));

      return readAllStoryFiles$(cwd).pipe(
        mergeMap((existingStoryPath) => {
          if (!desiredStoryPaths.has(existingStoryPath)) {
            // This story is stale
            const testFolder = dirname(existingStoryPath);
            const parentFolder = dirname(testFolder);
            return deleteFolder$(testFolder).pipe(
              mergeMap(() => removeEmptyFolders$(parentFolder, true))
            );
          }
          return of(null);
        }),
        toArray(),
        // 3) Finally, emit the storyEntries array for the rest of the pipeline (writing files, etc.)
        mergeMap(() => from(storyEntries))
      );
    })
  );
};

module.exports = {generateStories$};
