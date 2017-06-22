import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isNull from 'lodash/fp/isNull';
import {
  getCurrentProgression,
  getPreviousSlide,
  getCurrentProgressionId,
  getAnswers
} from '../../utils/state-extract';
import {toggleAccordion} from '../../actions/ui/corrections';
import {selectProgression} from '../../actions/ui/progressions';

const popinCorrectionStateToProps = ({translate}, dispatch) => state => {
  const resetProgression = () => {
    return dispatch((_dispatch, getState) => {
      const progressionId = getCurrentProgressionId(getState());
      return _dispatch(selectProgression(progressionId));
    });
  };

  const toggleAccordionSection = _dispatch => sectionId => {
    return toggleAccordion(_dispatch, sectionId);
  };

  const {isCorrect, correction} = getAnswers(state);
  const slide = getPreviousSlide(state);
  const accordion = get('ui.corrections.accordion', state);
  const progression = getCurrentProgression(state);

  const header = isNull(isCorrect)
    ? {}
    : {
        title: translate(isCorrect ? 'Good job' : 'Ouch'),
        subtitle: translate(isCorrect ? 'Good answer' : 'Wrong answer'),
        fail: !isCorrect,
        lives: progression.state.lives
      };

  const question = {
    header: getOr('', 'question.header', slide),
    answer: translate('Correct answer {answer}', {
      answer: correction || ''
    })
  };

  return {
    header: {
      lives: 1,
      title: '',
      subtitle: '',
      cta: {
        title: translate('Next'),
        onClick: resetProgression
      },
      ...header
    },
    question,
    resources: {
      title: translate('Access the lesson'),
      value: getOr([], 'lessons', slide),
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
    onClick: toggleAccordionSection(dispatch)
  };
};

export default popinCorrectionStateToProps;
