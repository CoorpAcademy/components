import test from 'ava';
import set from 'lodash/fp/set';
import {getConfig} from '../../config';
import viewedResources from '../viewed-resources';
import {askClueAction, resourceAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return create viewedResources when action type is resource', t => {
  const result = viewedResources(config)(undefined, resourceAction);
  t.deepEqual(result, [{ref: '1.A1', resources: ['les_1'], type: 'chapter'}]);
});

test('should add resourceRef to viewedResource when action type is resource that already present ', t => {
  const secondResourceAction = set('payload.resource.ref', 'les_2', resourceAction);
  const result = viewedResources(config)(
    [{ref: '1.A1', resources: ['les_1'], type: 'chapter'}],
    secondResourceAction
  );
  t.deepEqual(result, [{ref: '1.A1', resources: ['les_1', 'les_2'], type: 'chapter'}]);
});

test("shouldn't add resourceRef if it has been already viewed", t => {
  const result = viewedResources(config)(
    [{ref: '1.A1', resources: ['les_1'], type: 'chapter'}],
    resourceAction
  );
  t.deepEqual(result, [{ref: '1.A1', resources: ['les_1'], type: 'chapter'}]);
});

test('should return the same given array when action type is extraLifeAccepted and slide is already in array', t => {
  const result = viewedResources(config)([], askClueAction);
  t.deepEqual(result, []);
});
