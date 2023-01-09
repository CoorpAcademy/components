import React from 'react';
import {omit} from 'lodash/fp';
import VideoPlayer from '../video-player';
import DropDown from '../questions/drop-down';
import FreeText from '../questions/free-text';
import QcmDrag from '../questions/qcm-drag';
import Qcm from '../questions/qcm';
import QcmGraphic from '../questions/qcm-graphic';
import QuestionRange from '../questions/question-range';
import Template from '../questions/template';
import Audio from '../audio';
import style from './style.css';
import propTypes, {MediaViewPropTypes, TYPE_AUDIO, TYPE_IMAGE, TYPE_VIDEO} from './prop-types';

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
    case TYPE_AUDIO:
      return (
        <div className={style.audio}>
          <Audio {...omit('id', childProps)} height="100%" width="100%" />
        </div>
      );
    default:
      return null;
  }
};

MediaView.propTypes = MediaViewPropTypes;

const Switch = ({model, help}) => {
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

Switch.propTypes = {
  model: propTypes.model,
  help: propTypes.help
};

const Answer = props => {
  const {model, media, help} = props;

  return (
    <div data-name="answer" className={style.wrapper} role="group">
      {media ? <MediaView media={media} /> : null}
      <Switch model={model} help={help} />
    </div>
  );
};

Answer.propTypes = propTypes;

export default Answer;
