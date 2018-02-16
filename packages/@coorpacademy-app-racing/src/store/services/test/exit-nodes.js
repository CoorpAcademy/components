import test from 'ava';
import head from 'lodash/fp/head';
import exitNodesData from '../exit-nodes.data';
import {findById} from '../exit-nodes';

test('should findById', async t => {
  const exitNode = head(exitNodesData);
  t.deepEqual(await findById(exitNode.ref), exitNode);
});

test("should throw error if exitNode doesn't exist", t => {
  return t.throws(findById('unknown'));
});
