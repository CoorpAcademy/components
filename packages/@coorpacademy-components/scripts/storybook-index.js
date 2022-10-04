const {createWriteStream} = require('fs');
const {Observable, bindNodeCallback} = require('rxjs');
const {map, mergeAll, concatMap} = require('rxjs/operators');
const {generateStories$} = require('./observables/generate-stories');

const writeToFile$ = map(([path, content$]) =>
  Observable.create(observer => {
    const writer = createWriteStream(path, {encoding: 'utf8'});
    const write = bindNodeCallback((line, cb) => writer.write(`${line}\n`, 'utf8', cb));

    content$.pipe(concatMap(line => write(line))).subscribe(
      () => {},
      err => observer.error(err),
      () => {
        writer.end(() => observer.complete());
      }
    );
  })
);

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());

  generateStories$(cwd)
    .pipe(writeToFile$, mergeAll())
    .subscribe(() => {}, console.error);
}
