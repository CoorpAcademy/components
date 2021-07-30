import test from 'ava';
import {set, noop, pipe, map, constant} from 'lodash/fp';
import {ANSWER_EDIT, EDIT_ANSWER_ERROR, editAnswer} from '../answers';

const createState = (userAnswers, type) =>
  pipe(
    set('ui.answers.foo.value', userAnswers),
    set('ui.current.progressionId', 'foo'),
    set('data.configs.entities.microlearning@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.engine', {version: '1', ref: 'microlearning'}),
    set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'}),
    set('data.progressions.entities.foo.content', {type: 'chapter', ref: 'chapId'}),
    set('data.contents.slide.entities.baz', {
      chapter_id: 'chapId',
      question: {
        type
      },
      lessons: map(ref => ({ref}), ['lesson_1', 'lesson_2', 'lesson_3'])
    })
  )({});

const badQuestionType = createState(null, 'bar');

const macro = (t, userAnswers, type, newValue, expected) => {
  const dispatch = action => {
    t.not(action.type, undefined);
    t.is(action.type, ANSWER_EDIT[type]);
    t.is(action.meta.progressionId, 'foo');
    t.deepEqual(action.payload, expected);
  };

  const getState = constant(createState(userAnswers, type));
  editAnswer(newValue)(dispatch, getState);
};

test('should throw an error if questionType is unknown', t => {
  const dispatch = noop;
  const getState = constant(badQuestionType);

  return t.throws(() => editAnswer(['some new answer'])(dispatch, getState), {
    message:
      'Cannot find edit action for "bar". It must be within [qcm,qcmGraphic,qcmDrag,template,basic,slider]'
  });
});

test('should dispatch an error if slide is not found', t => {
  const getState = constant(
    pipe(
      set('ui.current.progressionId', 'foo'),
      set('data.configs.entities.microlearning@1', {
        version: '1'
      }),
      set('data.progressions.entities.foo.engine', {version: '1', ref: 'microlearning'}),
      set('data.progressions.entities.foo.content', {type: 'chapter', ref: 'chapId'})
    )({})
  );
  const dispatch = action => {
    t.is(action.type, EDIT_ANSWER_ERROR);
  };

  editAnswer(['plop'])(dispatch, getState);
});

test('should return initial state if state is undefined', macro, undefined, 'qcm', {label: 'bar'}, [
  'bar'
]);

test('should add a qcm choice', macro, ['foo'], 'qcm', {label: 'bar'}, ['foo', 'bar']);
test('should remove a qcm choice', macro, ['foo'], 'qcm', {label: 'foo'}, []);
test('should check qcm has answer.label or return same state', macro, ['foo'], 'qcm', {}, ['foo']);
test('should remove a qcmGraphic choice', macro, ['foo'], 'qcmGraphic', {label: 'foo'}, []);
test('should add a qcmGraphic choice', macro, ['foo'], 'qcmGraphic', {label: 'bar'}, [
  'foo',
  'bar'
]);
test(
  'should check qcmGraphic has answer.label or return same state',
  macro,
  ['foo'],
  'qcmGraphic',
  {},
  ['foo']
);
test('should add a qcmDrag choice', macro, ['foo'], 'qcmDrag', {label: 'bar'}, ['foo', 'bar']);
test('should check qcmDrag has answer.label or return same state', macro, ['foo'], 'qcmDrag', {}, [
  'foo'
]);
test('should edit a template answer', macro, ['foo'], 'template', ['bar', 'foo'], ['bar', 'foo']);
test('should edit a basic answer', macro, ['foo'], 'basic', 'bar', ['bar']);
