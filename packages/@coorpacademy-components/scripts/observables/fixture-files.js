const minimatch = require('minimatch');
const {filter} = require('rxjs/operators');
const {walkDirectory$} = require('./walk-directory');

const readFixtureFiles$ = cwd =>
  walkDirectory$(cwd).pipe(
    filter(
      minimatch.filter('**/+(atom|molecule|organism|template|hoc)/**/test/fixtures/*.+(js|ts)')
    )
  );

module.exports.readFixtureFiles$ = readFixtureFiles$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readFixtureFiles$(cwd).subscribe(line => console.log(line), console.error);
}
