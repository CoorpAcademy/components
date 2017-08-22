import test from 'ava';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import fromPairs from 'lodash/fp/fromPairs';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import createPlayer from '../player';
import basicSlide from './fixtures/slides/basic';
import contextSlide from './fixtures/slides/with-context';

const options = {translate: identity};
const store = {dispatch: identity};
const playerProps = createPlayer(options, store);

const availableSlides = pipe(map(slide => [slide._id, slide]), fromPairs)([
  basicSlide,
  contextSlide
]);

const createProgression = slide => ({
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
      ref: slide._id,
      type: 'slide'
    },
    lives: 1,
    step: {
      total: 4,
      current: 1
    }
  }
});

const data = {
  slides: {
    entities: availableSlides
  },
  progressions: {
    entities: {
      basic: createProgression(basicSlide),
      context: createProgression(contextSlide)
    }
  }
};

test('should create player props for basic question', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'basic'}
    }
  };

  const props = playerProps(state);

  t.is(
    props.answerType.media,
    '//static.coorpacademy.com/content/ijoinchanel/en/slides/1B2_Q6/1B2-Q6-canap-v1.jpg'
  );
  t.is(props.question, "Écrivez le mot Text dans l'input.\n");
  t.is(props.answerType.model.type, 'freeText');
  t.true(isFunction(props.answerType.model.onChange));
  t.is(props.slideContext, undefined);
});

test('should display context tab button if slide context is available', t => {
  const state = {
    data,
    ui: {
      current: {progressionId: 'context'}
    }
  };

  const props = playerProps(state);

  t.is(typeof props.slideContext, 'object');
  t.is(props.slideContext.title, 'Some context title');
  t.is(typeof props.slideContext.description, 'string');
  t.is(props.slideContext.description, contextSlide.context.description);
  t.is(props.buttons.length, 3);
  t.is(props.buttons[0].title, 'Context');
  t.is(props.buttons[0].type, 'context');
  t.false(props.buttons[0].selected);
  t.is(typeof props.buttons[0].onClick, 'function');
});
