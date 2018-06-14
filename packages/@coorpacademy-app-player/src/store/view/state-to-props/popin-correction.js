import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import join from 'lodash/fp/join';
import indexOf from 'lodash/fp/indexOf';
import omitBy from 'lodash/fp/omitBy';
import isUndefined from 'lodash/fp/isUndefined';
import includes from 'lodash/fp/includes';
import {
  getCurrentCorrection,
  getCurrentProgression,
  getCurrentProgressionId,
  getEngineConfig,
  getLives,
  getPreviousSlide,
  getCurrentSlide,
  hasViewedAResourceAtThisStep
} from '../../utils/state-extract';
import {acceptExtraLifeAndReset, refuseExtraLifeAndReset} from '../../actions/ui/extra-life';
import {toggleAccordion} from '../../actions/ui/corrections';
import {selectProgression} from '../../actions/ui/progressions';
import {openAssistance} from '../../services/progressions';
import getResourcesProps from './resources';

const isNewChapter = (state, progression) => {
  if (
    progression.content.type !== 'level' ||
    includes(progression.state.nextContent.type, ['success', 'failure'])
  ) {
    return false;
  }
  const currentSlide = getCurrentSlide(state);
  const currentChapterId = get('chapter_id', currentSlide);
  const previousSlide = getPreviousSlide(state);
  const previousChapterId = get('chapter_id', previousSlide);
  return previousChapterId !== currentChapterId;
};

const getNextChapterTitle = (state, progression) => {
  const levelId = get('content.ref', progression);
  const chapterIds = get(['data', 'contents', 'level', 'entities', levelId, 'chapterIds'], state);
  if (!chapterIds) {
    return undefined;
  }
  const currentSlide = getCurrentSlide(state);
  const currentChapterId = get('chapter_id', currentSlide);
  const currentChapterName = get(
    ['data', 'contents', 'chapter', 'entities', currentChapterId, 'name'],
    state
  );
  if (!currentChapterName) {
    return undefined;
  }
  const indexChapter = indexOf(currentChapterId, chapterIds) + 1;
  return `${indexChapter}/${chapterIds.length} ${currentChapterName}`;
};

const getNextStepTitle = state => {
  const progression = getCurrentProgression(state);
  return isNewChapter(state, progression) ? getNextChapterTitle(state, progression) : undefined;
};

const extraLifeCTAProps = ({translate}, {dispatch}) => state => {
  const progressionId = getCurrentProgressionId(state);
  const isRevival = hasViewedAResourceAtThisStep(state);
  const updateProgression = isRevival ? acceptExtraLifeAndReset : refuseExtraLifeAndReset;

  return {
    title: translate(isRevival ? 'Next' : 'Quit'),
    onClick: () => dispatch(updateProgression(progressionId))
  };
};

const noExtraLifeCTAProps = ({translate}, {dispatch}) => state => {
  const progression = getCurrentProgression(state);
  const progressionId = getCurrentProgressionId(state);
  const isDead = progression.state.lives === 0;
  const chapterTitle = isNewChapter(state, progression)
    ? translate('Next chapter')
    : translate('Next');

  const ctaProps = {
    title: isDead ? translate('Game over') : chapterTitle,
    onClick: () => dispatch(selectProgression(progressionId)),
    nextStepTitle: isDead ? translate('Click to continue') : getNextStepTitle(state)
  };

  return omitBy(isUndefined, ctaProps);
};

export const createHeaderCTA = (options, store) => state => {
  const progression = getCurrentProgression(state);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const ctaProps = isExtraLifeActive ? extraLifeCTAProps : noExtraLifeCTAProps;
  const {title, onClick, nextStepTitle} = ctaProps(options, store)(state);

  return omitBy(isUndefined, {
    title,
    onClick,
    nextStepTitle
  });
};

export const popinCorrectionStateToProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const toggleAccordionSection = sectionId => dispatch(toggleAccordion(sectionId));
  const slide = getPreviousSlide(state);
  const engineConfig = getEngineConfig(state);
  const progression = getCurrentProgression(state);
  const isExtraLifeAvailable = get('remainingLifeRequests', engineConfig) > 0;
  const remainingLifeRequests = get('state.remainingLifeRequests', progression);
  const accordion = get('ui.corrections.accordion', state);
  const answerResult = getCurrentCorrection(state);
  const correctAnswer = get('correctAnswer', answerResult) || [];
  const corrections = get('corrections', answerResult) || [];
  const isCorrect = isNil(answerResult) ? null : get('state.isCorrect')(progression);
  const isLoading = isNil(isCorrect);

  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const extraLifeGranted = isExtraLifeActive && hasViewedAResourceAtThisStep(state);
  const mayAcceptExtraLife = isExtraLifeActive && !extraLifeGranted;
  const noMoreExtraLife = isExtraLifeAvailable && !isCorrect && remainingLifeRequests === 0;

  const header = isNil(answerResult)
    ? {}
    : {
        title: translate(isCorrect ? 'Good job' : 'Ouch'),
        subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
        failed: isLoading ? null : !isCorrect,
        lives: getLives(state)
      };

  const question = {
    header: getOr('', 'question.header', slide),
    answerPrefix: translate('Correct answer'),
    answer: join(', ', correctAnswer)
  };

  const resources = getResourcesProps(options, store)(state, slide);

  const props = {
    header: isLoading
      ? {type: 'popinCorrection'}
      : {
          type: 'popinCorrection',
          lives: 1,
          title: '',
          subtitle: '',
          corrections,
          cta: !mayAcceptExtraLife ? createHeaderCTA(options, store)(state) : undefined,
          ...header
        },
    gameOver: noMoreExtraLife,
    overlay: mayAcceptExtraLife
      ? {
          title: translate('Bonus!'),
          text: translate('Get an extra life by viewing the lesson'),
          lifeAmount: 1
        }
      : undefined,
    extraLifeGranted,
    quit: mayAcceptExtraLife
      ? {
          cta: createHeaderCTA(options, store)(state)
        }
      : undefined,
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
    onClick: toggleAccordionSection,
    assistanceLink: {
      title: translate('Need help? Found a bug? Report it here'),
      onClick: openAssistance(progression)
    }
  };

  return props;
};
