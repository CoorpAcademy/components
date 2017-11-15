const {Transform} = require('stream');
const {relative, resolve, dirname} = require('path');
const createComponentStream = require('./components');

const createComponentIndexStream = (cwd, target) => {
  return createComponentStream(cwd).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const {title, path} = chunk;
        const relativePath = relative(dirname(target), path);
        const line = `export ${title} from './${relativePath}';\n`;
        callback(null, line);
      }
    })
  );
};

module.exports = createComponentIndexStream;

if (!module.parent) {
  const target = resolve(process.cwd(), process.argv.pop());
  const cwd = resolve(process.cwd(), process.argv.pop());
  createComponentIndexStream(cwd, target).pipe(process.stdout);
}
