// @flow
import test from 'ava';
import updateState from '../update-state';
import createProgression from '../../../common/create-progression';
import type {Engine, Content, InitialStateOptions} from '../../../common/types';

test('should return a valid state when there are no actions', t => {
  const engine: Engine = {
    ref: 'racing',
    version: '1'
  };

  const content: Content = Object.freeze({
    type: 'collection',
    ref: 'ALL'
  });

  const initialStateOptions: InitialStateOptions = Object.freeze({
    teams: [[{}, {}], [{}, {}]]
  });

  const config = {
    version: '1',
    raceGoal: 12
  };

  const progression = createProgression(engine, content, initialStateOptions);
  const state = updateState(config)(progression.state, []);
  t.is(state.content, undefined);
  t.deepEqual(state.teams, initialStateOptions.teams);
});
