import getOr from 'lodash/fp/getOr';
import isNull from 'lodash/fp/isNull';
import {
  getCurrentProgression,
  getPreviousSlide,
  getCurrentProgressionId,
  getAnswers
} from '../../utils/state-extract';
import {selectProgression} from '../../actions/ui/progressions';

const popinCorrectionStateToProps = ({translate}, dispatch) => state => {
  const resetProgression = () => {
    return dispatch((_dispatch, getState) => {
      const progressionId = getCurrentProgressionId(getState());
      return _dispatch(selectProgression(progressionId));
    });
  };

  const {isCorrect, correction} = getAnswers(state);
  const slide = getPreviousSlide(state);
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
      title: translate('Key point'),
      value: getOr([], 'lessons', slide),
      open: false,
      onClick: () => {}
    },
    klf: {
      title: translate('Access the lesson'),
      value: getOr('', 'klf', slide),
      onClick: () => {},
      open: false
    },
    tips: {
      title: translate('Did you know that?'),
      value: getOr('', 'tips', slide),
      onClick: () => {},
      open: false
    }
  };
};

export default popinCorrectionStateToProps;
