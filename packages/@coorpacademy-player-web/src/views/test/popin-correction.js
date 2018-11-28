import test from 'ava';
import forEach from 'lodash/fp/forEach';
import identity from 'lodash/fp/identity';
import isArray from 'lodash/fp/isArray';
import isFunction from 'lodash/fp/isFunction';
import set from 'lodash/fp/set';
import omit from 'lodash/fp/omit';
import {mockTranslate} from '@coorpacademy/translate';
import {
  UI_TOGGLE_ACCORDION,
  selectResource
} from '@coorpacademy/player-store/es/actions/ui/corrections';
import {
  UI_VIDEO_RESUME,
  UI_VIDEO_PAUSE,
  UI_VIDEO_ENDED
} from '@coorpacademy/player-store/es/actions/ui/video';
import statePopinFailure from '../../map-state-to-props/test/fixtures/popin-correction/popin-failure';
import statePopinSuccess from '../../map-state-to-props/test/fixtures/popin-correction/popin-success';
import statePopinFailureMultipleAnswers from '../../map-state-to-props/test/fixtures/popin-correction/state-fail-multiple-answers';
import statePopinExtraLife from '../../map-state-to-props/test/fixtures/popin-correction/popin-extra-life';
import statePopinRevival from '../../map-state-to-props/test/fixtures/popin-correction/popin-revival';
import stateToVNode from './helpers/state-to-vnode';
import testRendering from './helpers/render';

const Vimeo = {Player: () => true};
const options = {
  translate: mockTranslate,
  Vimeo
};

const mapStateToVNode = stateToVNode(options, {dispatch: identity});

test('should set properties for success popin', t => {
  const vNode = mapStateToVNode(statePopinSuccess);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives, 1);
  t.false(props.header.failed);
  t.is(props.header.title, '__Good job');
  t.is(props.header.subtitle, '__Good answer');
  t.is(props.question.answerPrefix, '__Correct answer');
  t.is(props.question.answer, '2');
  t.false(props.resources.open);
  t.false(props.klf.open);
  t.true(props.tips.open);

  const resetHandler = props.header.cta.onClick;
  t.true(isFunction(resetHandler));
  const actionReset = resetHandler();
  t.true(isFunction(actionReset));

  const toggleAccordionHandler = props.onClick;
  t.true(isFunction(toggleAccordionHandler));
  const actionToggleAccordion = toggleAccordionHandler(0);
  t.deepEqual(actionToggleAccordion, {
    type: UI_TOGGLE_ACCORDION,
    payload: {id: 0}
  });
});

test('should set properties to open resource tab if wrong answer and no resource viewed', t => {
  const vNode = mapStateToVNode(statePopinFailure);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives, 0);
  t.true(props.header.failed);
  t.is(props.header.title, '__Ouch');
  t.is(props.header.subtitle, '__Wrong answer');
  t.deepEqual(props.question.answer, 'Text');
  t.true(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);

  const resources = props.resources.value;

  t.true(isArray(resources));
  t.is(resources.length, 2);
  t.true(resources[0].selected);
  t.false(resources[1].selected);
});

test('should trigger actions for resources', t => {
  const vNode = mapStateToVNode(statePopinFailure);
  testRendering(vNode);
  const {props} = vNode;
  const resources = props.resources.value;

  forEach(resource => {
    const {onClick, onPlay, onPause, onEnded, onResume} = resource;
    const actionSelectResource = onClick();
    const actionPlayVideo = onPlay();
    const actionPauseVideo = onPause();
    const actionResumeVideo = onResume();
    const actionEndedVideo = onEnded();
    const baseResource = omit(
      ['onClick', 'onPause', 'onPlay', 'onEnded', 'onResume', 'selected'],
      resource
    );

    t.deepEqual(selectResource(resource._id), actionSelectResource);
    t.true(isFunction(actionPlayVideo));

    t.deepEqual(baseResource, actionPauseVideo.resource);
    t.is(actionPauseVideo.type, UI_VIDEO_PAUSE);

    t.deepEqual(baseResource, actionEndedVideo.resource);
    t.is(actionEndedVideo.type, UI_VIDEO_ENDED);

    t.is(actionResumeVideo.type, UI_VIDEO_RESUME);
  }, resources);
});

test('should set properties when selecting second resource', t => {
  const vNode = mapStateToVNode(
    set('ui.corrections.playResource', '590b862e2e967f64333ad4fc', statePopinFailure)
  );
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives, 0);
  t.true(props.header.failed);
  t.is(props.header.title, '__Ouch');
  t.is(props.header.subtitle, '__Wrong answer');
  t.deepEqual(props.header.corrections, [{answer: 'Toto', isCorrect: false}]);
  t.is(props.question.answer, 'Text');
  t.true(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);

  const resources = props.resources.value;

  t.true(isArray(resources));
  t.is(resources.length, 2);
  t.false(resources[0].selected);
  t.true(resources[1].selected);
});

test('should display loading when correction is not still fetched', t => {
  const statePopinLoading = set('data.answers.entities.0.sli_Vy88~R-bX', null, statePopinSuccess);

  const vNode = mapStateToVNode(statePopinLoading);
  testRendering(vNode);
  const {props} = vNode;

  t.deepEqual(props.header, {type: 'popinCorrection'});
  t.is(props.question.answer, '');
  t.false(props.resources.open);
  t.false(props.klf.open);
  t.true(props.tips.open);
});

test("should display loading state when answer's result is not still received", t => {
  const statePopinLoading = set(
    'data.progressions.entities.0.state.isCorrect',
    null,
    statePopinSuccess
  );

  const vNode = mapStateToVNode(statePopinLoading);
  testRendering(vNode);
  const {props} = vNode;

  t.deepEqual(props.header, {type: 'popinCorrection'});
  t.is(props.question.answer, '2');
  t.false(props.resources.open);
  t.false(props.klf.open);
  t.true(props.tips.open);
});

test('should display correction view when slide has not ressources', t => {
  const statePopinWithoutRessources = set(
    ['data', 'contents', 'slide', 'entities', '1.B2.4', 'lessons'],
    [],
    statePopinFailure
  );
  const vNode = mapStateToVNode(statePopinWithoutRessources);
  testRendering(vNode);
  const {props} = vNode;

  t.true(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);

  const resources = props.resources.value;

  t.true(isArray(resources));
  t.is(resources.length, 0);
});

test('should show correction on multiple answers for a slide', t => {
  const vNode = mapStateToVNode(statePopinFailureMultipleAnswers);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives, 0);
  t.true(props.header.failed);
  t.is(props.header.title, '__Ouch');
  t.is(props.header.subtitle, '__Wrong answer');
  t.deepEqual(props.question.answer, 'France, Suisse');
  t.deepEqual(props.header.corrections, [
    {answer: 'Suisse', isCorrect: true},
    {answer: 'Fiji', isCorrect: false}
  ]);
  t.true(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);
});

test('should show correction for extra life state', t => {
  const vNode = mapStateToVNode(statePopinExtraLife);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives, 0);
  t.true(props.header.failed);
  t.is(props.gameOver, false);
  t.is(props.quit.cta.title, '__Quit');
});

test('should show correction for revival state', t => {
  const vNode = mapStateToVNode(statePopinRevival);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives, 0);
  t.true(props.header.failed);
  t.is(props.header.cta.title, '__Next');
});
