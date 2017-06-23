import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import DropDown from '../../molecule/questions/drop-down';
import FreeText from '../../molecule/questions/free-text';
import Picker from '../../molecule/questions/picker';
import Provider from '../../atom/provider';
import Qcm from '../../molecule/questions/qcm';
import QcmImage from '../../molecule/questions/qcm-image';
import QuestionRange from '../../molecule/questions/question-range';
import style from './style.css';

const Answer = props => {
  const {type} = props;

  const buildAnswer = (props) => {

    switch (type) {
    case 'dropDown':
      return <DropDown {...props} />;
    case 'picker':
      return <Picker {...props} />;
    case 'qcm':
      return <Qcm {...props} />;
    case 'qcmImage':
      return <QcmImage {...props} />;
    case 'questionRange':
      return <QuestionRange {...props} />;
    case 'freeText':
      return <FreeText {...props} /> ;  
    }
  };


  const answerView = buildAnswer(props);

  return (
    <div className={style.wrapper}>
      <div className={style.answerType}>
        {answerView}
      </div>
    </div>
  );
};

Answer.propTypes = {
  type: PropTypes.oneOf(['picker', 'qcm', 'qcmImage', 'freeText', 'dropDown', 'range']).required
};

export default Answer;
