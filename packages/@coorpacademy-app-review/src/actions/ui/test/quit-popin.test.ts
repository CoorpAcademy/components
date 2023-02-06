import test from 'ava';
import {set} from 'lodash/fp';
import {createTestStore} from '../../test/create-test-store';
import {initialState as _initialState_} from '../../../test/fixtures';
import {closeQuitPopin, CLOSE_POPIN, openQuitPopin, OPEN_POPIN} from '../quit-popin';

const initialState = set(
  'data.currentSkill',
  {ref: '_skill-ref', name: '_skill-ref'},
  _initialState_
);

test('should dispatch OPEN_POPIN when openQuitPopin action is called', async t => {
  const expectedAction = [{type: OPEN_POPIN}];

  const {dispatch} = createTestStore(t, initialState, {}, expectedAction);
  await dispatch(openQuitPopin);
});

test('should dispatch CLOSE_POPIN when closeQuitPopin action is called', async t => {
  const expectedAction = [{type: CLOSE_POPIN}];

  const {dispatch} = createTestStore(t, initialState, {}, expectedAction);
  await dispatch(closeQuitPopin);
});
