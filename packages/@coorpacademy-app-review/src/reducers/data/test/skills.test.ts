import test from 'ava';
import reducer from '../skills';
import {ReceivedSkills, SKILLS_FETCH_SUCCESS} from '../../../actions/api/fetch-skills';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';

test('should have initial value', t => {
  const state = reducer(undefined, {} as ReceivedSkills);
  t.deepEqual(state, []);
});

test('should set the value of SKILLS_FETCH_SUCCESS action', t => {
  const skills = [{skillRef: 'skill', name: 'skill name', slidesToReview: 5, custom: false}];
  const state = reducer([], {type: SKILLS_FETCH_SUCCESS, payload: skills});
  t.deepEqual(state, skills);
});

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer([], {type: POST_PROGRESSION_REQUEST});
  t.deepEqual(state, []);
});
