import random from 'lodash/fp/random';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';
import successFixture from './success';

// const LIMIT = 100;
const getRandomResult = () => (random(0, 100) >= 70 ? 'success' : 'failure');

const qcmDrag = AnswerQCMDrag.props;
const qcmGraphic = AnswerQCMGraphic.props;

const onValidateClick = () => {
  console.log('onValidateClick');
  const result = getRandomResult();
  return Promise.resolve({
    validationResult: result,
    nextSlide: {question: 'Other question?', answer: result === 'success' ? qcmDrag : qcmGraphic},
    end: false
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
