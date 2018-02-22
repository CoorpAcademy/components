import userStateExtract, {getCurrentUserId} from '../../utils/user-state-extract';
import {createGetAnswerProps} from './answer';
import get from 'lodash/fp/get';

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
      onClick: null,
      light: false,
      small: false,
      name: 'validateAnswerCTA',
      secondary: false,
      disabled: false
    }
  };
};

export default playerProps;
