const {join} = require('path');
const {Observable} = require('rxjs/Rx');
const {readdirP} = require('./fs');

const readDirectory$ = cwd =>
  Observable.of(cwd)
    .map(readdirP)
    .concatMap(p => Observable.fromPromise(p))
    .concatMap(Observable.from)
    .map(f => join(cwd, f));

module.exports.readDirectory$ = readDirectory$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readDirectory$(cwd).subscribe(line => console.log(line), console.error);
}
