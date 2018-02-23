import userStateExtract, {getCurrentUserId} from '../../utils/user-state-extract';
import {validateAnswer} from '../../actions/ui/answers';
import {createGetAnswerProps} from './answer';
import get from 'lodash/fp/get';

const createCTAHandler = (dispatch, state) => () => {
  const {getCurrentSlide, getCurrentProgressionId, getAnswerValues} = userStateExtract;
  const currentUserId = getCurrentUserId(state);
  const slide = getCurrentSlide(currentUserId, state);

  return dispatch(
    validateAnswer(getCurrentProgressionId(currentUserId, state), {
      answer: getAnswerValues(currentUserId, slide, state),
      slideId: slide._id
    })
  );
}

const playerProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;
  const {getCurrentSlide, getQuestionMedia} = userStateExtract;
  const currentUserId = getCurrentUserId(state);
  const slide = getCurrentSlide(currentUserId, state);
  const answer = createGetAnswerProps(options, store)(state, slide);
  const mediaQuestion = getQuestionMedia(currentUserId, state);

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
