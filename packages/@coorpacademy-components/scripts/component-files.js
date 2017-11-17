const {promisify} = require('util');
const {readdir, stat} = require('fs');
const {join, relative, resolve: _resolve} = require('path');
const {Readable, Transform, Writable} = require('stream');
const minimatch = require('minimatch');
const sortBy = require('lodash/fp/sortBy');
const memoize = require('lodash/fp/memoize');

const readdirP = memoize(promisify(readdir));
const statP = memoize(promisify(stat));

const sortDirsFilesP = files =>
  Promise.all(files.map(file => Promise.all([file, statP(file).then(s => s.isDirectory())]))).then(
    pairsFileIsDirectory => sortBy('1', pairsFileIsDirectory).map(([file]) => file)
  );

class DirectoryReadable extends Readable {
  constructor(directory, options) {
    super({
      ...options,
      objectMode: true
    });

    this.directory = directory;
    this.readed = false;
  }

  _read(size) {
    if (this.readed) return;

    this.readed = true;
    readdirP(this.directory)
      .then(files => files.map(file => join(this.directory, file)))
      .then(sortDirsFilesP)
      .then(files => {
        files.forEach(file => this.push(file));
        return this.push(null);
      })
      .catch(err => this.emit('error', err));
  }
}

class HandlerWritable extends Writable {
  constructor(handler) {
    super({
      objectMode: true
    });
    this._handler = handler;
  }
  _write(chunk, encoding, callback) {
    return new Promise(resolve => resolve(this._handler(chunk, encoding))).then(
      () => callback(null),
      callback
    );
  }
}

class ExploreDirectoryTransform extends Transform {
  constructor(match = '!') {
    super({
      objectMode: true
    });
    this._match = match;
    this._matcher = minimatch.filter(this._match);
  }

  _transformFile(chunk, encoding, callback) {
    if (this._matcher(chunk)) this.push(chunk, encoding);
    callback(null);
  }

  _transformDirectory(chunk, encoding, callback) {
    new DirectoryReadable(chunk)
      .pipe(new ExploreDirectoryTransform(this._match))
      .pipe(new HandlerWritable(this.push.bind(this)))
      .on('finish', callback.bind(this, null))
      .on('error', callback);
  }

  _transform(chunk, encoding, callback) {
    const isDirectoryP = statP(chunk).then(s => s.isDirectory());
    isDirectoryP
      .then(isDirectory => {
        if (!isDirectory) return this._transformFile(chunk, encoding, callback);
        return this._transformDirectory(chunk, encoding, callback);
      })
      .catch(callback);
  }
}

const createComponentFileStream = (directory, match) => {
  const matcher = minimatch.filter(match);

  return new DirectoryReadable(directory).pipe(new ExploreDirectoryTransform()).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        const path = relative(directory, chunk);
        if (matcher(path)) this.push(path, encoding);
        callback(null);
      }
    })
  );
};

module.exports = createComponentFileStream;

if (!module.parent) {
  const cwd = _resolve(process.cwd(), process.argv.pop());
  createComponentFileStream(cwd, '**')
    .pipe(
      new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
          callback(null, `${chunk}\n`);
        }
      })
    )
    .pipe(process.stdout);
}
