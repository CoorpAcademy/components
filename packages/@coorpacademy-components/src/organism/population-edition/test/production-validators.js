import test from 'ava';
import BrandTable from '../../brand-table';

test.serial(
  'preview model validators tolerate child propTypes stripped by production builds',
  t => {
    const path = require.resolve('../types');
    const previousEntry = require.cache[path];
    const previousValidators = BrandTable.propTypes;
    try {
      Reflect.set(BrandTable, 'propTypes', {});
      Reflect.deleteProperty(require.cache, path);
      const {propTypes} = require('../types');
      t.is(typeof propTypes.model, 'function');
    } finally {
      Reflect.set(BrandTable, 'propTypes', previousValidators);
      if (previousEntry) Reflect.set(require.cache, path, previousEntry);
      else Reflect.deleteProperty(require.cache, path);
    }
  }
);
