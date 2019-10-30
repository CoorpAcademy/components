// @flow

import test from 'ava';
import filter from 'lodash/fp/filter';
import {getConfig} from '../../config';
import type {AvailableContent, Config} from '../../types';
import slide from './fixtures/slide';
import getFastSlideExitNode from '..';

test('should compute a successExitNode', t => {
  const config: Config = getConfig({ref: 'learner', version: '1'});
  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, [slide]),
      rules: null
    }
  ];
  const expected = {
    instructions: [
      {
        field: 'stars',
        type: 'set',
        value: 4
      }
    ],
    nextContent: {
      type: 'success',
      ref: 'successExitNode'
    }
  };
  // $FlowFixMe
  const nextContent = getFastSlideExitNode(config, true, availableContent);
  t.deepEqual(nextContent, expected);
});

test('should compute failExitNode', t => {
  const config: Config = getConfig({ref: 'learner', version: '1'});
  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, [slide]),
      rules: null
    }
  ];
  const expected = {
    instructions: [
      {
        field: 'lives',
        type: 'set',
        value: 0
      }
    ],
    nextContent: {
      type: 'failure',
      ref: 'failExitNode'
    }
  };
  // $FlowFixMe
  const nextContent = getFastSlideExitNode(config, false, availableContent);
  t.deepEqual(nextContent, expected);
});
