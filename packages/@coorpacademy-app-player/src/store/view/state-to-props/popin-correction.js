import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import join from 'lodash/fp/join';
import indexOf from 'lodash/fp/indexOf';
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
    return null;
  }
  const currentSlide = getCurrentSlide(state);
  const currentChapterId = get('chapter_id', currentSlide);
  const currentChapterName = get(
    ['data', 'contents', 'chapter', 'entities', currentChapterId, 'name'],
    state
  );
  if (!currentChapterName) {
    return null;
  }
  const indexChapter = indexOf(currentChapterId, chapterIds) + 1;
  return `${indexChapter}/${chapterIds.length} ${currentChapterName}`;
};

const getNextStepTitle = state => {
  const progression = getCurrentProgression(state);
  return isNewChapter(state, progression) ? getNextChapterTitle(state, progression) : null;
};

const extraLifeCTAProps = ({translate}, {dispatch}) => state => {
  const progressionId = getCurrentProgressionId(state);
  const isRevival = hasViewedAResourceAtThisStep(state);
  const updateProgression = isRevival ? acceptExtraLifeAndReset : refuseExtraLifeAndReset;

  return {
    title: translate(isRevival ? 'Next' : 'Game over'),
    onClick: () => dispatch(updateProgression(progressionId)),
    nextStepTitle: null
  };
};

const noExtraLifeCTAProps = ({translate}, {dispatch}) => state => {
  const progression = getCurrentProgression(state);
  const progressionId = getCurrentProgressionId(state);
  const isDead = progression.state.lives === 0;
  const chapterTitle = isNewChapter(state, progression)
    ? translate('Next chapter')
    : translate('Next');

  return {
    title: isDead ? translate('Game over') : chapterTitle,
    onClick: () => dispatch(selectProgression(progressionId)),
    nextStepTitle: isDead ? translate('Sorry, you have used your bonus!') : getNextStepTitle(state)
  };
};

export const createHeaderCTA = (options, store) => state => {
  const progression = getCurrentProgression(state);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const ctaProps = isExtraLifeActive ? extraLifeCTAProps : noExtraLifeCTAProps;
  const {title, onClick, nextStepTitle} = ctaProps(options, store)(state);

  return {
    title,
    onClick,
    type: 'correction',
    nextStepTitle
  };
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

  return {
    header: isLoading
      ? {}
      : {
          lives: 1,
          title: '',
          subtitle: '',
          corrections,
          cta: !mayAcceptExtraLife && createHeaderCTA(options, store)(state),
          ...header
        },
    gameOver: noMoreExtraLife,
    overlay: mayAcceptExtraLife && {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    },
    extraLifeGranted,
    quit: mayAcceptExtraLife && {
      cta: createHeaderCTA(options, store)(state)
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
