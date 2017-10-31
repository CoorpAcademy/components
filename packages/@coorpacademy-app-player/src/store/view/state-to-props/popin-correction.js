import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import join from 'lodash/fp/join';
import indexOf from 'lodash/fp/indexOf';
import {
  getCurrentCorrection,
  getCurrentProgression,
  getCurrentProgressionId,
  getLives,
  getPreviousSlide,
  getCurrentSlide
} from '../../utils/state-extract';
import {acceptExtraLifeAndReset, refuseExtraLifeAndReset} from '../../actions/ui/extra-life';
import {toggleAccordion} from '../../actions/ui/corrections';
import {selectProgression} from '../../actions/ui/progressions';
import getResourcesProps from './resources';

const isNewChapter = (state, progression) => {
  if (progression.content.type !== 'level') {
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
  const isRevival = get('ui.extraLife.acceptRevivalPending', state);
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
  const chapterTitle = translate(isNewChapter(state, progression) ? 'Next Chapter' : 'Next');

  return {
    title: translate(isDead ? 'Game over' : chapterTitle),
    onClick: () => dispatch(selectProgression(progressionId)),
    nextStepTitle: isDead ? null : getNextStepTitle(state)
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
  const progression = getCurrentProgression(state);
  const accordion = get('ui.corrections.accordion', state);
  const answerResult = getCurrentCorrection(state);
  const correctAnswer = get('correctAnswer', answerResult) || [];
  const corrections = get('corrections', answerResult) || [];
  const isCorrect = isNil(answerResult) ? null : get('state.isCorrect')(progression);
  const isLoading = isNil(isCorrect);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const isRevival = get('ui.extraLife.acceptRevivalPending', state);
  const isDead = progression.state.lives === 0;
  const exhausted = isDead && !isRevival && !isCorrect && !isExtraLifeActive;
  const header = isNil(answerResult)
    ? {}
    : {
        title: translate(isCorrect ? 'Good job' : 'Ouch'),
        subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
        fail: isLoading ? null : !isCorrect,
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
          revival: isRevival,
          subtitle: '',
          corrections,
          extraLife: {
            active: isExtraLifeActive,
            sentence: exhausted
              ? translate('Sorry, you have used your bonus!')
              : translate('Bonus! Get an extra life by watching the lesson below!'),
            exhausted
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
