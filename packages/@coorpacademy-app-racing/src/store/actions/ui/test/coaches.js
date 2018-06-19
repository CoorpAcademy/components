import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  updateCoaches,
  UI_UPDATE_COACHES,
  START_CHAT_REQUEST,
  START_CHAT_SUCCESS,
  startChat
} from '../coaches';

test(
  'should call start chat function service',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.content.ref', 'bar'),
    set('data.contents.slide.entities.bar._id', 'bar')
  )({}),
  t => ({
    Coach: {
      startChat: () => {
        t.pass();
      }
    }
  }),
  startChat(),
  [
    {
      type: START_CHAT_REQUEST,
      meta: {contentRef: 'bar'}
    },
    {
      type: START_CHAT_SUCCESS,
      meta: {contentRef: 'bar'},
      payload: undefined
    }
  ],
  1
);

const chatState = {
  chatStarted: false,
  coachForDiscipline: [
    {
      avatar: null,
      disciplines: [],
      displayName: 'Benjamin Leiba0',
      isCoach: true,
      isSuperCoach: true,
      language: 'fr',
      population: 'coorpacademy',
      user_id: '00000000000000000000035f'
    }
  ]
};

test('should update coaches values on state', macro, {}, t => ({}), updateCoaches(chatState), [
  {
    type: UI_UPDATE_COACHES,
    payload: chatState
  }
]);
