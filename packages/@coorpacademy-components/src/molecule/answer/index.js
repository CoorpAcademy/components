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
  const {answer} = props;

  const buildAnswer = () => {
    const {type} = answer;

    switch (type) {
      case 'picker':
        return <Picker {...answer} />;
      case 'qcm':
        return <Qcm {...answer} />;
      case 'qcmImage':
        return <QcmImage {...answer} />;
      case 'freeText':
        return <FreeText {...answer} />;
      case 'dropDown':
        return <DropDown {...answer} />;
      case 'range':
        return <QuestionRange {...answer} />;
    }
  };

  const answerView = buildAnswer(answer);

  return (
    <div className={style.wrapper}>
      {answerView}
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.shape({
    type: PropTypes.oneOf(['picker', 'qcm', 'qcmImage', 'freeText', 'dropDown', 'range']).required
  })
};

export default Answer;
