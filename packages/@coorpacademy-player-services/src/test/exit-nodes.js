import test from 'ava';
import {head, pipe, values} from 'lodash/fp';
import createExitNodesService from '../exit-nodes';
import exitNodesData from './fixtures/data/exit-nodes';

import * as fixtures from './fixtures';

const ExitNodes = createExitNodesService(fixtures);
const {findById} = ExitNodes;

const first = pipe(values, head);

test('should findById', async t => {
  const exitNode = first(exitNodesData);
  t.deepEqual(await findById(exitNode.ref), exitNode);
});

test("should throw error if exitNode doesn't exist", t => {
  return t.throwsAsync(() => findById('unknown'));
});
