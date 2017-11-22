const {Observable} = require('rxjs/Rx');
const map = require('lodash/fp/map');
const {readDirectory$} = require('./read-directory');
const {statP} = require('./fs');

const isDirectoryP = file => statP(file).then(stat => stat.isDirectory());

const walkDirectory$ = cwd => {
  const entries$ = readDirectory$(cwd);
  const isDirectory$ = entries$.map(isDirectoryP).concatMap(p => Observable.fromPromise(p));

  const partitions = Observable.zip(entries$, isDirectory$, (file, isDirectory) => ({
    file,
    isDirectory
  })).partition(({isDirectory}) => isDirectory);

  const [folders$, files$] = map(p => p.pluck('file'), partitions);

  return Observable.concat(folders$.concatMap(walkDirectory$), files$);
};

module.exports.walkDirectory$ = walkDirectory$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  walkDirectory$(cwd).subscribe(line => console.log(line), console.error);
}
