import test from 'ava';
import set from 'lodash/fp/set';
import {getConfig} from '../../config';
import validate from '../validate';
import {answerAction} from './fixtures/actions';
import {learner} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(learner);

test("should throw if the state's nextContent is not the same as the action's content", t => {
  const stateWithWrongRef = set('nextContent.ref', '123.x', stateForSecondSlide);
  t.throws(
    () => validate(config)(stateWithWrongRef, answerAction),
    'The content of the progression state does not match the answer action: state.nextContent: {"ref":"123.x","type":"slide"} | action.payload.content: {"ref":"1.A1.2","type":"slide"}'
  );
  const stateWithWrongType = set('nextContent.type', 'node', stateForSecondSlide);
  t.throws(
    () => validate(config)(stateWithWrongType, answerAction),
    'The content of the progression state does not match the answer action: state.nextContent: {"ref":"1.A1.2","type":"node"} | action.payload.content: {"ref":"1.A1.2","type":"slide"}'
  );

  t.notThrows(() => validate(config)(stateForSecondSlide, answerAction));
});
