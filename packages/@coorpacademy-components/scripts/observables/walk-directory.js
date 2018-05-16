const {concat, zip, from} = require('rxjs');
const {map, concatMap, partition, pluck} = require('rxjs/operators');
const _map = require('lodash/fp/map');
const {readDirectory$} = require('./read-directory');
const {statP} = require('./fs');

const isDirectoryP = file => statP(file).then(stat => stat.isDirectory());

const walkDirectory$ = cwd => {
  const entries$ = readDirectory$(cwd);
  const isDirectory$ = entries$.pipe(map(isDirectoryP), concatMap(p => from(p)));

  const partitions = zip(entries$, isDirectory$).pipe(
    map(([file, isDirectory]) => ({
      file,
      isDirectory
    })),
    partition(({isDirectory}) => isDirectory)
  );

  const [folders$, files$] = _map(p => p.pipe(pluck('file')), partitions);

  return concat(folders$.pipe(concatMap(walkDirectory$)), files$);
};

module.exports.walkDirectory$ = walkDirectory$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  walkDirectory$(cwd).subscribe(line => console.log(line), console.error);
}
