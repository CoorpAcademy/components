import test from 'ava';
import head from 'lodash/fp/head';
import pipe from 'lodash/fp/pipe';
import values from 'lodash/fp/values';
import exitNodesData from '../exit-nodes.data';
import {findById} from '../exit-nodes';

const first = pipe(values, head);

test('should findById', async t => {
  const exitNode = first(exitNodesData);
  t.deepEqual(await findById(exitNode.ref), exitNode);
});

test("should throw error if exitNode doesn't exist", t => {
  return t.throws(findById('unknown'));
});
