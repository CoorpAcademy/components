import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../molecule/questions/drop-down';
import FreeText from '../../molecule/questions/free-text';
import Picker from '../../molecule/questions/picker';
import Qcm from '../../molecule/questions/qcm';
import QcmImage from '../../molecule/questions/qcm-image';
import QuestionRange from '../../molecule/questions/question-range';
import style from './style.css';

const Answer = props => {
  const {question} = props;

  const buildAnswer = () => {
    const {type} = question;

    switch (type) {
      case 'picker':
        return <Picker {...question} />;
      case 'qcm':
        return <Qcm {...question} />;
      case 'qcmImage':
        return <QcmImage {...question} />;
      case 'freeText':
        return <FreeText {...question} />;
      case 'dropDown':
        return <DropDown {...question} />;
      case 'range':
        return <QuestionRange {...question} />;
    }
  };

  const answerView = buildAnswer(question);

  return (
    <div className={style.wrapper}>
      {answerView}
    </div>
  );
};

Answer.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf(['picker', 'qcm', 'qcmImage', 'freeText', 'dropDown', 'range']).required
  })
};

export default Answer;
