const {join} = require('path');
const {of, from} = require('rxjs');
const {map, concatMap} = require('rxjs/operators');
const {readdirP} = require('./fs');

const readDirectory$ = cwd =>
  of(cwd).pipe(
    map(readdirP),
    concatMap(p => from(p)),
    concatMap(from),
    map(f => join(cwd, f))
  );

module.exports.readDirectory$ = readDirectory$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readDirectory$(cwd).subscribe(line => console.log(line), console.error);
}
