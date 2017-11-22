const {relative, dirname} = require('path');
const {readComponents$} = require('./observables/components');

const readComponentIndex$ = (cwd, target) =>
  readComponents$(cwd).map(({title, path}) => {
    const relativePath = relative(dirname(target), path);
    return `export ${title} from './${relativePath}';`;
  });

module.exports.readComponentIndex$ = readComponentIndex$;

if (!module.parent) {
  const {resolve} = require('path');
  const target = resolve(process.cwd(), process.argv.pop());
  const cwd = resolve(process.cwd(), process.argv.pop());
  readComponentIndex$(cwd, target).subscribe(
    line => process.stdout.write(`${line}\n`),
    console.error
  );
}
