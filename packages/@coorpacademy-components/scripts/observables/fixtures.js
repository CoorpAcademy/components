const {map, concatAll} = require('rxjs/operators');
const {readComponents$} = require('./components');
const {readComponentFixtures$} = require('./component-fixtures');

const readFixtures$ = cwd => readComponents$(cwd).pipe(map(readComponentFixtures$), concatAll());

module.exports.readFixtures$ = readFixtures$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readFixtures$(cwd).subscribe(line => console.log(line), console.error);
}
