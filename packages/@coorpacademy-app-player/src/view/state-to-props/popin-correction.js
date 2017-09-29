import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import join from 'lodash/fp/join';
import {
  getCurrentCorrection,
  getCurrentProgression,
  getCurrentProgressionId,
  getPreviousSlide
} from '../../utils/state-extract';
import {acceptExtraLifeAndReset, refuseExtraLifeAndReset} from '../../actions/ui/extra-life';
import {toggleAccordion} from '../../actions/ui/corrections';
import {selectProgression} from '../../actions/ui/progressions';
import getResourcesProps from './resources';

const createExtraLifeCTA = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const progressionId = getCurrentProgressionId(state);
  const isRevival = get('ui.extraLife.acceptRevivalPending', state);
  const updateProgression = isRevival ? acceptExtraLifeAndReset : refuseExtraLifeAndReset;
  const title = translate(isRevival ? 'Next' : 'Game over');
  const onClick = () => dispatch(updateProgression(progressionId));

  return {title, onClick};
};

const createNoExtraLifeCTA = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const progression = getCurrentProgression(state);
  const progressionId = getCurrentProgressionId(state);
  const isDead = progression.state.lives === 0;
  const title = translate(isDead ? 'Game over' : 'Next');
  const onClick = () => dispatch(selectProgression(progressionId));

  return {title, onClick};
};

export const createHeaderCTA = (options, store) => state => {
  const progression = getCurrentProgression(state);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const createCTA = isExtraLifeActive ? createExtraLifeCTA : createNoExtraLifeCTA;

  return createCTA(options, store)(state);
};

export const popinCorrectionStateToProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const toggleAccordionSection = sectionId => dispatch(toggleAccordion(sectionId));
  const slide = getPreviousSlide(state);
  const progression = getCurrentProgression(state);
  const accordion = get('ui.corrections.accordion', state);
  const answerResult = getCurrentCorrection(state);
  const correctAnswer = get('correctAnswer', answerResult) || [];
  const corrections = get('corrections', answerResult) || [];
  const isCorrect = isNil(answerResult) ? null : get('state.isCorrect')(progression);
  const isLoading = isNil(isCorrect);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const isRevival = get('ui.extraLife.acceptRevivalPending', state);

  const header = isNil(answerResult)
    ? {}
    : {
        title: translate(isCorrect ? 'Good job' : 'Ouch'),
        subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
        fail: isLoading ? null : !isCorrect,
        lives: progression.state.lives
      };

  const question = {
    header: getOr('', 'question.header', slide),
    answerPrefix: translate('Correct answer'),
    answer: join(', ', correctAnswer)
  };

  const resources = getResourcesProps(options, store)(state, slide);

  return {
    header: isLoading
      ? {}
      : {
          lives: 1,
          title: '',
          revival: isRevival,
          subtitle: '',
          corrections,
          extraLife: {
            active: isExtraLifeActive,
            sentence: translate('extra_life_suggestion')
          },
          cta: createHeaderCTA(options, store)(state),
          ...header
        },
    question,
    resources: {
      title: translate('Access the lesson'),
      value: resources,
      open: getOr(false, '0', accordion)
    },
    klf: {
      title: translate('Key point'),
      value: getOr('', 'klf', slide),
      open: getOr(false, '1', accordion)
    },
    tips: {
      title: translate('Did you know that?'),
      value: getOr('', 'tips', slide),
      open: getOr(false, '2', accordion)
    },
    onClick: toggleAccordionSection
  };
};
