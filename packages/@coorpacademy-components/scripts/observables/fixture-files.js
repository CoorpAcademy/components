const minimatch = require('minimatch');
const {walkDirectory$} = require('./walk-directory');

const readFixtureFiles$ = cwd =>
  walkDirectory$(cwd).filter(
    minimatch.filter('**/+(atom|molecule|organism|template)/**/test/fixtures/*.js')
  );

module.exports.readFixtureFiles$ = readFixtureFiles$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readFixtureFiles$(cwd).subscribe(line => console.log(line), console.error);
}
