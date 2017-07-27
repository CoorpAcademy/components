import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../atom/picture';
import DropDown from '../questions/drop-down';
import FreeText from '../questions/free-text';
import Picker from '../questions/picker';
import Qcm from '../questions/qcm';
import QcmImage from '../questions/qcm-image';
import QuestionRange from '../questions/question-range';
import Template from '../questions/template';
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
      case 'qcmDrag':
        return <Picker {...model} />;
      case 'qcm':
        return <Qcm {...model} />;
      case 'qcmGraphic':
        return <QcmImage {...model} />;
      case 'freeText':
        return <FreeText {...model} />;
      case 'dropDown':
        return <DropDown {...model} />;
      case 'range':
        return <QuestionRange {...model} />;
      case 'template':
        return <Template {...model} />;
    }
  };
  const answerView = buildAnswer(model);

  return (
    <div data-name="answer" className={style.wrapper}>
      {media ? <MediaView media={media} /> : null}
      {answerView}
    </div>
  );
};

Answer.propTypes = {
  model: PropTypes.shape({
    type: PropTypes.oneOf([
      'qcmDrag',
      'qcm',
      'qcmGraphic',
      'freeText',
      'dropDown',
      'range',
      'template'
    ]).required
  }),
  media: PropTypes.string
};

export default Answer;
