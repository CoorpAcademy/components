import test from 'ava';
import {ReceivedSkill} from '../../../actions/api/fetch-skill';
import reducer from '../skill';

test('should set initial values in currentSkill property', t => {
  const state = reducer(undefined, {} as ReceivedSkill);
  t.is(state, {name: '', ref: ''});
});
