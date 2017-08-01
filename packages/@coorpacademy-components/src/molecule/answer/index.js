import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../atom/picture';
import DropDown from '../questions/drop-down';
import FreeText from '../questions/free-text';
import QcmDrag from '../questions/qcm-drag';
import Qcm from '../questions/qcm';
import QcmGraphic from '../questions/qcm-graphic';
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
        return <QcmDrag {...model} />;
      case 'qcm':
        return <Qcm {...model} />;
      case 'qcmGraphic':
        return <QcmGraphic {...model} />;
      case 'freeText':
        return <FreeText {...model} />;
      case 'dropDown':
        return <DropDown {...model} />;
      case 'slider':
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
