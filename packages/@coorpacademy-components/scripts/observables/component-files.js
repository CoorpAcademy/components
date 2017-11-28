const minimatch = require('minimatch');
const {walkDirectory$} = require('./walk-directory');

const readComponentFiles$ = cwd =>
  walkDirectory$(cwd)
    .filter(minimatch.filter('**/+(atom|molecule|organism|template|hoc)/**/index.js'))
    .filter(minimatch.filter('**/!(test|layout)/index.js'));

module.exports.readComponentFiles$ = readComponentFiles$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readComponentFiles$(cwd).subscribe(line => console.log(line), console.error);
}
