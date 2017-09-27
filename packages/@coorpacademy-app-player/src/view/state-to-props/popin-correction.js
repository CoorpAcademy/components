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

export const popinCorrectionCTAStateToProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const progression = getCurrentProgression(state);
  const progressionId = getCurrentProgressionId(state);
  const isExtraLifeActive = get('state.nextContent.ref', progression) === 'extraLife';
  const isRevival = get('ui.extraLife.acceptRevivalPending', state);
  const isDead = progression.state.lives === 0;
  const handleRefuse = () => dispatch(refuseExtraLifeAndReset(progressionId));
  const handleAccept = () => dispatch(acceptExtraLifeAndReset(progressionId));
  const handleNext = () => dispatch(selectProgression(progressionId));

  return isExtraLifeActive
    ? {
        title: isRevival ? translate('Next') : translate('Game over'),
        onClick: isRevival ? handleAccept : handleRefuse
      }
    : {
        title: isDead ? translate('Game over') : translate('Next'),
        onClick: handleNext
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
            sentence: translate('Bonus ! Get an extra life by viewing the lesson')
          },
          cta: popinCorrectionCTAStateToProps(options, store)(state),
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
