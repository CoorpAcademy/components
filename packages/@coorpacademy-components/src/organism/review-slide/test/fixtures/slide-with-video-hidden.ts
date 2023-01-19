import {set, cloneDeep, pipe} from 'lodash/fp';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-short-video';
import type {Fixture} from '../../prop-types';

const qcmGraphic = cloneDeep(AnswerQCMGraphic.props);

const fixture: Fixture = {
  props: {
    slideIndex: '',
    num: 0,
    slide: {
      position: 0,
      loading: false,
      parentContentTitle: 'From "Master Design Thinking to become more agile" course',
      questionText: 'Question 1',
      answerUI: pipe(
        set('media.loading', true),
        set('media.mimeType', 'application/jwplayer')
      )(qcmGraphic),
      animateCorrectionPopin: false,
      showCorrectionPopin: false
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: false
    }
  }
};

export default fixture;
