import test from 'ava';
import {mockTranslate} from '@coorpacademy/translate';
import {HIDE_TOURGUIDE, SET_TOURGUIDE_STEP} from '@coorpacademy/player-store';
import createSlideStateToProps from '../slide';
import basicSlide from './fixtures/slides/basic';

test('tourguide callbacks dispatch step change and hide', t => {
  const actions = [];
  const dispatch = action => {
    actions.push(action);
    return action;
  };
  const options = {translate: mockTranslate};
  const state = {
    data: {
      contents: {
        chapter: {
          entities: {
            '1.B2': {_id: '1.B2', isConditional: false}
          }
        },
        slide: {
          entities: {
            [basicSlide._id]: {...basicSlide, chapter_id: '1.B2'}
          }
        }
      },
      progressions: {
        entities: {
          basic: {
            engine: {ref: 'microlearning', version: '1'},
            content: {ref: '1.B2', type: 'chapter'},
            state: {
              nextContent: {ref: basicSlide._id, type: 'slide'},
              step: {current: 1},
              lives: 1,
              livesDisabled: false,
              viewedResources: []
            }
          }
        }
      }
    },
    ui: {
      current: {progressionId: 'basic'},
      route: {basic: 'answer'},
      tourguide: {visible: true, step: 1}
    }
  };

  const props = createSlideStateToProps(options, {dispatch})(state);

  t.truthy(props.tourguide);
  props.tourguide.onStepChange(2);
  props.tourguide.onExit();

  t.is(actions.length, 2);
  t.is(actions[0].type, SET_TOURGUIDE_STEP);
  t.deepEqual(actions[0].payload, {step: 2});
  t.is(actions[1].type, HIDE_TOURGUIDE);
});
