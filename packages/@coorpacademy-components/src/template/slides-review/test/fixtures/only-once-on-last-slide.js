import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import successFixture from './success';

const qcmGraphic = AnswerQCMGraphic.props;

let numberOfTries = 0;
const onValidateClick = () => {
  numberOfTries = numberOfTries + 1;
  console.log('onValidateClick');
  return Promise.resolve({
    validationResult: numberOfTries === 5 ? 'failure' : 'success',
    nextSlide: {question: 'other question?', answer: qcmGraphic},
    endReview: false
  });
};

export default {
  props: {
    ...successFixture.props,
    validate: {
      label: 'Validate',
      onClick: onValidateClick
    }
  }
};
