import test from 'ava';
import addTimeout from '../add-timeout';

test("should delay promise's fulfillment", async t => {
  const fun = addTimeout(0, () => Promise.resolve());
  await fun();
  t.pass();
});
