import get from 'lodash/fp/get';
import {
  getAnswerValues,
  getCurrentProgressionId,
  getCurrentSlide,
  getQuestionMedia
} from '../../utils/state-extract';
import {selectProgression} from '../../actions/ui/progressions';
import {validateAnswer} from '../../actions/ui/answers';
import {createGetAnswerProps} from './answer';

const createCTAHandler = (dispatch, state) => async () => {
  const slide = getCurrentSlide(state);
  const progressionId = getCurrentProgressionId(state);

  await dispatch(
    validateAnswer(progressionId, {
      answer: getAnswerValues(slide, state),
      slideId: slide._id
    })
  );

  return dispatch(selectProgression(progressionId));
};

const playerProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const slide = getCurrentSlide(state);
  const answer = createGetAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(state);

  return {
    typeClue: 'answer',
    question: get('question.header')(slide),
    help: 'Select something below',
    answerType: {
      model: answer,
      media: mediaQuestion
    },
    cta: {
      submitValue: translate('Validate'),
      onClick: createCTAHandler(dispatch, state),
      light: false,
      small: false,
      name: 'validateAnswerCTA',
      secondary: false,
      disabled: false
    }
  };
};

export default playerProps;
