const {readdir, rmdir, stat} = require('fs');
const {dirname} = require('path');
const {rm} = require('fs/promises');
const {Observable} = require('rxjs');
const {filter} = require('rxjs/operators');
const {walkDirectory$} = require('./walk-directory'); // your existing directory walker

const readAllStoryFiles$ = cwd =>
  walkDirectory$(cwd).pipe(filter(filePath => filePath.endsWith('.stories.tsx')));

const removeEmptyFolders$ = (folderPath, removeParents = false) => {
  return new Observable(observer => {
    stat(folderPath, (statErr, stats) => {
      if (statErr || !stats.isDirectory()) {
        observer.complete();
        return;
      }
      readdir(folderPath, (readErr, files) => {
        if (readErr) {
          observer.error(readErr);
          return;
        }
        // Filter out system files if needed
        const files_ = files.filter(file => file !== '.DS_Store');

        if (files_.length === 0) {
          rmdir(folderPath, rmdirErr => {
            if (rmdirErr) {
              observer.error(rmdirErr);
              return;
            }
            observer.next(folderPath);
            if (removeParents && dirname(folderPath) !== folderPath) {
              removeEmptyFolders$(dirname(folderPath), true).subscribe(
                val => observer.next(val),
                err => observer.error(err),
                () => observer.complete()
              );
            } else {
              observer.complete();
            }
          });
        } else {
          // Not empty
          observer.complete();
        }
      });
    });
  });
};

/**
 * Recursively deletes a folder (rm -rf).
 */
const deleteFolder$ = folderPath => {
  return new Observable(observer => {
    rm(folderPath, {recursive: true, force: true})
      .then(() => {
        observer.next(folderPath);
        observer.complete();
        return null;
      })
      .catch(err => observer.error(err));
  });
};

module.exports = {readAllStoryFiles$, deleteFolder$, removeEmptyFolders$};
