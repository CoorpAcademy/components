import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../atom/picture';
import DropDown from '../../molecule/questions/drop-down';
import FreeText from '../../molecule/questions/free-text';
import Picker from '../../molecule/questions/picker';
import Qcm from '../../molecule/questions/qcm';
import QcmImage from '../../molecule/questions/qcm-image';
import QuestionRange from '../../molecule/questions/question-range';
import style from './style.css';

const MediaView = ({media}) => {
  return (
    <div className={style.media}>
      <Picture src={media} />
    </div>
  );
};

const Answer = props => {
  const {model, media} = props;

  const buildAnswer = () => {
    const {type} = model;

    switch (type) {
      case 'picker':
        return <Picker {...model} />;
      case 'qcm':
        return <Qcm {...model} />;
      case 'qcmImage':
        return <QcmImage {...model} />;
      case 'freeText':
        return <FreeText {...model} />;
      case 'dropDown':
        return <DropDown {...model} />;
      case 'range':
        return <QuestionRange {...model} />;
    }
  };
  const answerView = buildAnswer(model);

  return (
    <div>
      {media ? <MediaView media={media} /> : null}
      <div className={style.wrapper}>
        {answerView}
      </div>
    </div>
  );
};

Answer.propTypes = {
  model: PropTypes.shape({
    type: PropTypes.oneOf(['picker', 'qcm', 'qcmImage', 'freeText', 'dropDown', 'range']).required
  }),
  media: PropTypes.string
};

export default Answer;
