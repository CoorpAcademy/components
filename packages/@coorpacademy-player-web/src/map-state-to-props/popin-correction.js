import {assign, getOr, get, isNil, join, indexOf, omitBy, isUndefined, includes} from 'lodash/fp';

import {
  acceptExtraLife,
  getCurrentCorrection,
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentSlide,
  getEngineConfig,
  getLives,
  getPreviousSlide,
  hasViewedAResourceAtThisStep,
  openAssistance,
  refuseExtraLife,
  selectProgression,
  toggleAccordion
} from '@coorpacademy/player-store';

import getResourcesProps from './resources';
import mapStateToErrorPopinProps from './error-popin';

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

const extraLifeCTAProps =
  ({translate}, {dispatch}) =>
  state => {
    const progressionId = getCurrentProgressionId(state);
    const isRevival = hasViewedAResourceAtThisStep(state);
    const updateProgression = isRevival ? acceptExtraLife : refuseExtraLife;

    return {
      title: translate(isRevival ? 'Next' : 'Quit'),
      onClick: () => dispatch(updateProgression(progressionId))
    };
  };

const noExtraLifeCTAProps =
  ({translate}, {dispatch}) =>
  state => {
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

export const createHeaderCTA = (options, store) => {
  const extraLifeCTAProps_ = extraLifeCTAProps(options, store);
  const noExtraLifeCTAProps_ = noExtraLifeCTAProps(options, store);

  return state => {
    const progression = getCurrentProgression(state);
    const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
    const ctaProps = isExtraLifeActive ? extraLifeCTAProps_ : noExtraLifeCTAProps_;
    const {title, onClick, nextStepTitle} = ctaProps(state);

    return omitBy(isUndefined, {
      title,
      onClick,
      nextStepTitle
    });
  };
};

export const openPopinAssistance = (dispatch, progression) => () =>
  dispatch(openAssistance(progression));

export const popinCorrectionStateToProps = (options, store) => {
  const getResourcesProps_ = getResourcesProps(options, store);
  const createHeaderCTA_ = createHeaderCTA(options, store);

  return state => {
    const {translate} = options;
    const {dispatch} = store;
    const toggleAccordionSection = sectionId => dispatch(toggleAccordion(sectionId));
    const slide = getPreviousSlide(state);
    const engineConfig = getEngineConfig(state);
    const progression = getCurrentProgression(state);
    const isExtraLifeAvailable = get('remainingLifeRequests', engineConfig) > 0;
    const remainingLifeRequests = get('state.remainingLifeRequests', progression);
    const accordion = get('ui.corrections.accordion', state);
    const correction = getCurrentCorrection(state);
    const correctAnswer = correction.correctAnswer;
    const corrections = correction.corrections;
    const isCorrect = corrections.length === 0 ? null : get('state.isCorrect')(progression);
    const isLoading = isNil(isCorrect);

    const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
    const extraLifeGranted = isExtraLifeActive && hasViewedAResourceAtThisStep(state);
    const mayAcceptExtraLife = isExtraLifeActive && !extraLifeGranted;
    const noMoreExtraLife = isExtraLifeAvailable && !isCorrect && remainingLifeRequests === 0;
    const {hide, count: lives} = getLives(state);
    const header = isLoading
      ? {}
      : {
          title: translate(isCorrect ? 'Good job' : 'Ouch'),
          subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
          failed: !isCorrect,
          lives: hide ? null : lives
        };
    const question = {
      header: getOr('', 'question.header', slide),
      answerPrefix: translate('Correct answer'),
      answer: join(', ', correctAnswer)
    };

    const resources = getResourcesProps_(state, slide);

    return {
      header: isLoading
        ? {type: 'popinCorrection'}
        : assign(
            {
              type: 'popinCorrection',
              lives: 1,
              title: '',
              subtitle: '',
              corrections,
              cta: !mayAcceptExtraLife ? createHeaderCTA_(state) : undefined
            },
            header
          ),
      gameOver: noMoreExtraLife,
      popinError: mapStateToErrorPopinProps(dispatch)(state),
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
            cta: createHeaderCTA_(state)
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
        onClick: openPopinAssistance(dispatch, progression)
      }
    };
  };
};
