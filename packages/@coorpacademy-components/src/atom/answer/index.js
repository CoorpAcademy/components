import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../molecule/questions/drop-down';
import FreeText from '../../molecule/questions/free-text';
import Picker from '../../molecule/questions/picker';
import Provider from '../../atom/provider';
import Qcm from '../../molecule/questions/qcm';
import QcmImage from '../../molecule/questions/qcm-image';
import QuestionRange from '../../molecule/questions/question-range';
import style from './style.css';

const Answer = props => {
  const {answer} = props;

  const answers = {
  dropDown: DropDown,
  picker: Picker,
  qcm: Qcm,
  qcmImage: QcmImage,
  range: QuestionRange,
  freeText: FreeText
};

  const answerStyle = {
    dropDown: style.dropDown,
    picker: style.picker,
    qcm: style.qcm,
    qcmImage: style.qcmImage,
    range: style.range,
    freeText: style.freeText
  };

  const createAnswerView = answer => {
  const AnswerView = answer && answers[answer.type];
  return (
    Answer !== undefined &&
    <div className={answerStyle[answer.type]}>
      <AnswerView {...answer} />
    </div>
  );
};

  const answerType = createAnswerView(answer);

  return (
    <div>{answerType}</div>
  );
};

Answer.propTypes = {
  answer: PropTypes.shape({
    type: PropTypes.oneOf(['picker', 'qcm', 'qcmImage', 'freeText', 'dropDown', 'range']).required
  })
};

export default Answer;
