import test from 'ava';
import head from 'lodash/fp/head';
import isArray from 'lodash/fp/isArray';
import exitNodesData from '../exit-nodes.data';
import {findById, find} from '../exit-nodes';

test('should return all exitNodes', async t => {
  const exitNodes = await find();
  t.true(isArray(exitNodes));
});

test('should findById', async t => {
  const exitNode = head(exitNodesData);
  t.deepEqual(await findById(exitNode.ref), exitNode);
});

test("should throw error if exitNode doesn't exist", t => {
  return t.throws(findById('unknown'));
});
