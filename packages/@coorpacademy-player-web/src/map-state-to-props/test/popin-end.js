import test from 'ava';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import isFunction from 'lodash/fp/isFunction';
import {mockTranslate} from '@coorpacademy/translate';
import {getCurrentProgressionId} from '@coorpacademy/player-store/es/utils/state-extract';
import {
  LOCATION_NEXT_CONTENT_REQUEST,
  LOCATION_NEXT_CONTENT_SUCCESS,
  LOCATION_SEE_COMMENT_REQUEST,
  LOCATION_SEE_COMMENT_SUCCESS,
  LOCATION_OPEN_RECOMMENDATION_REQUEST,
  LOCATION_OPEN_RECOMMENDATION_SUCCESS
} from '@coorpacademy/player-store/es/actions/ui/location';
import {UI_EDIT_COMMENT} from '@coorpacademy/player-store/es/actions/ui/comments';
import {
  SEND_POST_COMMENT_REQUEST,
  SEND_POST_COMMENT_SUCCESS
} from '@coorpacademy/player-store/es/actions/api/comments';
import popinEnd from '../popin-end';

import popinLearnerSuccess from './fixtures/popin-end/learner-success';
import popinLearnerFailure from './fixtures/popin-end/learner-failure';
import popinLearnerAdaptiveFailure from './fixtures/popin-end/learner-adaptive-failure';
import popinMicrolearningFailure from './fixtures/popin-end/fail';

const services = {
  Comments: {
    post: identity
  },
  Location: {
    openRecommendation: identity,
    nextLevel: identity,
    seeComment: identity
  }
};

const createDispatch = state => async action => {
  const dispatched = [];
  const getState = () => state;
  const dispatch = maybeAction =>
    isFunction(maybeAction)
      ? maybeAction(dispatch, getState, {services})
      : dispatched.push(maybeAction);

  await dispatch(action);

  return dispatched;
};

const actionTypes = actions => map(({type}) => type, actions);
const options = {translate: mockTranslate};

test('should create a "Next Level" CTA after success on learner progression', async t => {
  const dispatch = createDispatch(popinLearnerSuccess);
  const props = popinEnd(options, {dispatch})(popinLearnerSuccess);

  const header = props.summary.header;
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');
  t.is(header.type, 'popinEnd');

  const cta = header.cta;
  t.is(cta.title, '__Next level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
  const dispatchedHeaderCta = await cta.onClick();
  t.deepEqual(actionTypes(dispatchedHeaderCta), [
    LOCATION_NEXT_CONTENT_REQUEST,
    LOCATION_NEXT_CONTENT_SUCCESS
  ]);

  const action = props.summary.action;
  t.is(action.prefix, '__Next level_');
  t.is(action.title, 'La recherche en ligne - Avancé');

  const buttonCta = action.button;
  t.is(buttonCta.title, '__Next level');
  const dispatchedActionCta = await buttonCta.onClick();
  t.deepEqual(actionTypes(dispatchedActionCta), [
    LOCATION_NEXT_CONTENT_REQUEST,
    LOCATION_NEXT_CONTENT_SUCCESS
  ]);

  const comment = props.summary.comment;
  t.is(comment.edition.postDisabled, true);
});

test('should write, send, and go see a comment after success on learner progression', async t => {
  const state = pipe(
    set('data.comments.entities.idProgression1234.isSent', true),
    set('ui.comments.text', 'textToSend')
  )(popinLearnerSuccess);

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const comment = props.summary.comment;
  t.is(comment.isSent, true);
  t.is(comment.edition.value, 'textToSend');
  t.is(comment.edition.postDisabled, false);

  const onChange = comment.edition.onChange;
  t.true(isFunction(onChange));
  const dispatchedOnChange = await onChange({target: {value: 'foo'}});

  t.deepEqual(actionTypes(dispatchedOnChange), [UI_EDIT_COMMENT]);

  const onPost = comment.edition.onPost;
  t.true(isFunction(onPost));
  const dispatchedOnPost = await onPost();

  t.deepEqual(actionTypes(dispatchedOnPost), [
    SEND_POST_COMMENT_REQUEST,
    SEND_POST_COMMENT_SUCCESS
  ]);

  const onClick = comment.confirmation.onClick;
  t.true(isFunction(onClick));
  const dispatchedOnClick = await onClick();

  t.deepEqual(actionTypes(dispatchedOnClick), [
    LOCATION_SEE_COMMENT_REQUEST,
    LOCATION_SEE_COMMENT_SUCCESS
  ]);
});

test('should not see comment section when answer is not correct', t => {
  const dispatch = createDispatch(popinLearnerFailure);
  const props = popinEnd(options, {dispatch})(popinLearnerFailure);
  t.is(props.summary.comment, null);
  t.is(props.summary.header.subtitle, '__You are out of lives!');
  t.is(props.summary.header.lives, 0);
});

test("should not see lives and 'You are out of lives!' message", t => {
  const dispatch = createDispatch(popinLearnerAdaptiveFailure);
  const props = popinEnd(options, {dispatch})(popinLearnerAdaptiveFailure);
  t.is(props.summary.header.subtitle, '__Nice try!');
  t.is(props.summary.header.lives, null);
});

test('should create a "Back to Home" CTA after success on learner progression with coach content', t => {
  const state = pipe(
    set(['data', 'contents', 'level', 'entities', '1.B', 'level'], 'coach'),
    set('data.nextContent.entities.idProgression1234', null)
  )(popinLearnerSuccess);

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const header = props.summary.header;
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');
  t.is(header.type, 'popinEnd');

  const cta = header.cta;
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');

  t.falsy(props.summary.action);
});

test('should create a "Back to Home" CTA after success on learner progression with content with only base level', t => {
  const state = set(
    ['data', 'nextContent', 'entities', 'idProgression1234'],
    null,
    popinLearnerSuccess
  );

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  const header = props.summary.header;
  t.is(header.rank, '+1');
  t.is(header.stars, '+2');
  t.is(header.type, 'popinEnd');

  const cta = header.cta;
  t.is(cta.title, '__Back to home');
  t.falsy(cta.onClick);
  t.is(cta.href, '/');
});

test('should create a "Retry Level" CTA after failure on learner progression', t => {
  const dispatch = createDispatch(popinLearnerFailure);
  const props = popinEnd(options, {dispatch})(popinLearnerFailure);

  const header = props.summary.header;
  t.is(header.rank, '-1');
  t.is(header.type, 'popinEnd');

  const cta = props.summary.header.cta;
  t.is(cta.title, '__Retry level');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);

  const action = props.summary.action;
  t.is(action.prefix, '__Retry level_');
  t.is(action.title, 'La recherche en ligne - Base');

  const buttonCta = action.button;
  t.is(buttonCta.title, '__Retry level');
});

test('should open recommendation', async t => {
  const dispatch = createDispatch(popinLearnerSuccess);
  const props = popinEnd(options, {dispatch})(popinLearnerSuccess);

  const recommendations = props.summary.recommendation;

  const dispatchedOpenRecommmendation = await recommendations.cards[0].onClick();
  t.deepEqual(actionTypes(dispatchedOpenRecommmendation), [
    LOCATION_OPEN_RECOMMENDATION_REQUEST,
    LOCATION_OPEN_RECOMMENDATION_SUCCESS
  ]);
});

test('should create a "Retry Chapter" CTA after failure on microlearning progression', t => {
  const dispatch = createDispatch(popinMicrolearningFailure);
  const props = popinEnd(options, {dispatch})(popinMicrolearningFailure);

  const header = props.summary.header;
  t.falsy(header.rank);
  t.falsy(header.stars);
  t.is(header.type, 'popinEnd');

  const cta = props.summary.header.cta;
  t.is(cta.title, '__Retry chapter');
  t.true(isFunction(cta.onClick));
  t.falsy(cta.href);
});

test('should extract feedback content from exit node', t => {
  const ref = 'biba-exit-node-A';
  const progressionId = getCurrentProgressionId(popinMicrolearningFailure);
  const state = pipe(
    set(`data.exitNodes.entities.${ref}`, {
      ref,
      _id: '5a4e2adbd56b8b7ddab06532',
      type: 'success',
      title: 'biba_exit_node_A.title',
      description: 'biba_exit_node_A.description',
      mediaDescription: 'biba_exit_node_A.media.description',
      media: {
        ref: 'biba_exit_node_A-media',
        type: 'pdf',
        mediaUrl: 'biba_exit_node_A.media.pdf.mediaUrl',
        mimeType: 'application/pdf',
        description: 'biba_exit_node_A.media.pdf.description',
        subtitles: 'biba_exit_node_A.media.pdf.subtitles',
        posters: []
      },
      __v: 0
    }),
    set(`data.progressions.entities.${progressionId}.state.nextContent.ref`, ref)
  )(popinMicrolearningFailure);

  const dispatch = createDispatch(state);
  const props = popinEnd(options, {dispatch})(state);

  t.deepEqual(get('summary.feedback', props), {
    title: 'biba_exit_node_A.title',
    description: 'biba_exit_node_A.description',
    mediaDescription: 'biba_exit_node_A.media.description',
    media: {
      type: 'pdf',
      description: 'biba_exit_node_A.media.pdf.description',
      mimeType: 'application/pdf',
      mediaUrl: 'biba_exit_node_A.media.pdf.mediaUrl'
    }
  });
});
