// @flow
import test from 'ava';
import each from 'lodash/fp/each';
import map from 'lodash/fp/map';
import find from 'lodash/fp/find';
import findIndex from 'lodash/fp/findIndex';
import type {AvailableContent, Content, Engine, EngineOptions} from '../../types';
import createRacing from '../racing';
import allSlides from '../../compute-next-step/test/fixtures/slides';

const initialTeams = [
  [{id: 'user_1', name: 'foo', avatar: ''}, {id: 'user_2', name: 'foo', avatar: ''}],
  [{id: 'user_3', name: 'foo', avatar: ''}, {id: 'user_4', name: 'foo', avatar: ''}]
];

const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: allSlides.filter(slide => slide.chapter_id === '1.A1'),
    rules: []
  },
  {
    ref: '2.A1',
    slides: allSlides.filter(slide => slide.chapter_id === '2.A1'),
    rules: []
  }
];

const engine: Engine = {
  ref: 'racing',
  version: 'latest'
};

const content: Content = {
  ref: '1.A1',
  type: 'level'
};

const engineOptions: EngineOptions = {
  goal: 20
};

test('should create a new progression with the latest version of the engine and the given engine options', t => {
  const progression = createRacing(engine, content, engineOptions, availableContent, initialTeams);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }

  t.plan(28);

  t.deepEqual(
    Object.keys(progression).sort(),
    ['actions', 'content', 'engine', 'engineOptions'].sort()
  );
  t.deepEqual(progression.engine, {
    ref: 'racing',
    version: '1'
  });
  t.is(progression.content, content);
  t.is(progression.engineOptions, engineOptions);
  t.true(Array.isArray(progression.actions));

  const action = progression.actions[0];
  if (action.type !== 'racing-setup') throw new Error('not a racing-setup');

  const users = action.payload.users;

  t.is(action.type, 'racing-setup');
  t.deepEqual(action.authors, ['user_1', 'user_2', 'user_3', 'user_4']);

  each(
    map(_user => {
      const {nextContent = {}, team, id, questionNum} = users[_user.id];
      const teamIndex = findIndex(find({id: _user.id}), initialTeams);
      t.is(id, _user.id);
      t.is(team, teamIndex);
      t.is(questionNum, 1);
      t.is(nextContent.type, 'slide');
      t.regex(nextContent.ref, /1.A1.*/);
    }),
    initialTeams
  );

  const teams = action.payload.teams;

  t.deepEqual(teams, {
    '0': {players: ['user_1', 'user_2'], tower: []},
    '1': {players: ['user_3', 'user_4'], tower: []}
  });
});
