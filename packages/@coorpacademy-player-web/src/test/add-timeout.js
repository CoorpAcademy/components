import test from 'ava';
import {addTimeout} from '../../sandbox/services';

test("should delay promise's fulfillment", async t => {
  const fun = addTimeout(0, () => Promise.resolve());
  await fun();
  t.pass();
});
