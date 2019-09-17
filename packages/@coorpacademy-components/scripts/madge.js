const join = require('path').join;
const madge = require('madge');
const toPairs = require('lodash/fp/toPairs');
const map = require('lodash/fp/map');
const fromPairs = require('lodash/fp/fromPairs');
const pipe = require('lodash/fp/pipe');
const replace = require('lodash/fp/replace');

const config = {
  baseDir: join(__dirname, '../src'),
  excludeRegExp: [/style/, /test/, /util/, /redux/],
  backgroundColor: '#FFFFFF',
  nodeColor: '#3498DB',
  noDependencyColor: '#5ABA98',
  cyclicNodeColor: '#DA5947',
  edgeColor: '#000000',
  layout: 'sfdp'
};

const removeIndex = replace(/\/index$/, '');

const walkerTree = fun =>
  pipe(
    toPairs,
    map(([node, deps]) => [fun(node), map(fun, deps)]),
    fromPairs
  );

madge(join(__dirname, '../src/template'), config)
  .then(res => {
    res.tree = walkerTree(removeIndex)(res.tree);
    return res;
  })
  .then(res => res.image(join(__dirname, '../doc/components.svg')))
  .then(writtenImagePath => {
    console.log(`Image written to ${writtenImagePath}`);
    return;
  })
  .catch(err => {
    console.error(err);
  });
