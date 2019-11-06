import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'lodash/fp';
import VideoPlayer from '../video-player';
import DropDown from '../questions/drop-down';
import FreeText from '../questions/free-text';
import QcmDrag from '../questions/qcm-drag';
import Qcm from '../questions/qcm';
import QcmGraphic from '../questions/qcm-graphic';
import QuestionRange from '../questions/question-range';
import Template from '../questions/template';
import style from './style.css';

export const TYPE_IMAGE = 'img';
export const TYPE_VIDEO = 'video';

const MediaView = ({media}) => {
  const {videoId, type, ...childProps} = media;
  switch (type) {
    case TYPE_IMAGE:
      return (
        <div
          className={style.media}
          style={{
            backgroundImage: `url(${media.url})`
          }}
        />
      );
    case TYPE_VIDEO:
      return (
        <div className={style.video}>
          <VideoPlayer {...omit('id', childProps)} id={videoId} height="100%" width="100%" />
        </div>
      );
    default:
      return null;
  }
};

const Answer = props => {
  const {model, media, help} = props;
  const buildAnswer = () => {
    const {type} = model;

    switch (type) {
      case 'qcmDrag':
        return <QcmDrag {...model} help={help} />;
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

const isType = name => PropTypes.oneOf([name]);

const videoPropType = PropTypes.shape({
  ...VideoPlayer.propTypes,
  type: isType(TYPE_VIDEO).isRequired
});

const imgPropType = PropTypes.shape({
  type: isType(TYPE_IMAGE).isRequired,
  url: PropTypes.string.isRequired
});

Answer.propTypes = {
  model: PropTypes.shape({
    type: PropTypes.oneOf([
      'qcmDrag',
      'qcm',
      'qcmGraphic',
      'freeText',
      'dropDown',
      'slider',
      'template'
    ]).isRequired
  }),
  help: PropTypes.string,
  media: PropTypes.oneOfType([videoPropType, imgPropType])
};

export default Answer;
