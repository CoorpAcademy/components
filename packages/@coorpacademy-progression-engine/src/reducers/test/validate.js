// @flow
import test from 'ava';
import set from 'lodash/fp/set';
import {getConfig} from '../../config';
import validate from '../validate';
import {answerAction} from './fixtures/actions';
import {learner} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(learner);

test("should throw if the state's nextContent is not the same as the action's content", t => {
  const state = set('nextContent.ref', '123.x', stateForSecondSlide);
  t.throws(
    () => validate(config)(state, answerAction),
    'The content of the progression state (123.x - slide) does not match the content (1.A1.2 - slide) of the given action (answer)'
  );
});
