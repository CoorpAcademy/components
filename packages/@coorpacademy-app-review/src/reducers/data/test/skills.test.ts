import test from 'ava';
import reducer from '../skills';
import {ReceivedSkills, SKILLS_FETCH_SUCCESS} from '../../../actions/api/fetch-skills';

test('should have inital value', t => {
  const state = reducer(undefined, {} as ReceivedSkills);
  t.deepEqual(state, []);
});

test('should set the value of SKILLS_FETCH_SUCCESS action', t => {
  const skills = [{skillRef: 'skill', name: 'skill name', slidesToReview: 5, custom: false}];
  const state = reducer([], {type: SKILLS_FETCH_SUCCESS, payload: skills});
  t.deepEqual(state, skills);
});
