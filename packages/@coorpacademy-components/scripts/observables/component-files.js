const minimatch = require('minimatch');
const {filter} = require('rxjs/operators');
const {walkDirectory$} = require('./walk-directory');

const readComponentFiles$ = cwd =>
  walkDirectory$(cwd).pipe(
    filter(minimatch.filter('**/+(atom|molecule|organism|template|hoc)/**/index.+(js|ts|tsx)')),
    filter(minimatch.filter('**/!(test|layout)/index.+(js|ts|tsx)'))
  );

module.exports.readComponentFiles$ = readComponentFiles$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readComponentFiles$(cwd).subscribe(line => console.log(line), console.error);
}
