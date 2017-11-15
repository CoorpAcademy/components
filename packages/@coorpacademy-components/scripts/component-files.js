const {readdir, stat} = require('fs');
const {join, relative, resolve: _resolve} = require('path');
const {Readable, Transform, Writable} = require('stream');
const minimatch = require('minimatch');

const fromCallback = fn => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  );

const readdirP = fromCallback(readdir);
const statP = fromCallback(stat);

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
      .then(files => {
        files.forEach(file => this.push(join(this.directory, file)));
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
