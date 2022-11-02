import test from 'ava';
import {SKILL_FETCH_SUCCESS, ReceivedSkill} from '../../../actions/api/fetch-skill';
import reducer from '../skill';

test('should set initial values in currentSkill property', t => {
  const state = reducer(undefined, {} as ReceivedSkill);
  t.deepEqual(state, {ref: '', name: ''});
});

test('should set the value of SKILL_FETCH_SUCCESS action', t => {
  const state = reducer(
    {ref: '', name: ''},
    {type: SKILL_FETCH_SUCCESS, payload: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}}
  );
  t.deepEqual(state, {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'});
});
