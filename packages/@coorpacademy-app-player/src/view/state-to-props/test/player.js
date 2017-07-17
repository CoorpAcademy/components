import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import createPlayer from '../player';
import basic from './fixtures/slides/basic';

const options = {translate: identity};
const store = {dispatch: identity};
const playerProps = createPlayer(options, store);

test('should create player props for basic question', t => {
  const state = {
    data: {
      slides: {
        entities: {
          '1.B2.4': basic
        }
      },
      progressions: {
        entities: {
          '0': {
            engine: {
              ref: 'microlearning',
              version: '1'
            },
            content: {
              ref: '1.B2',
              type: 'chapter'
            },
            state: {
              nextContent: {
                ref: '1.B2.4',
                type: 'slide'
              },
              lives: 1,
              step: {
                total: 4,
                current: 1
              }
            }
          }
        }
      }
    },
    ui: {
      current: {progressionId: '0'}
    }
  };

  const props = playerProps(state, basic);

  t.is(
    props.answerType.media,
    '//static.coorpacademy.com/content/ijoinchanel/en/slides/1B2_Q6/1B2-Q6-canap-v1.jpg'
  );
  t.is(props.question, "Écrivez le mot Text dans l'input.\n");
  t.is(props.answerType.model.type, 'freeText');
  t.true(isFunction(props.answerType.model.onChange));
});
