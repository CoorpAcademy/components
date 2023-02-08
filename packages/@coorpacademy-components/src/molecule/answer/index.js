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
import Provider, {GetTranslateFromContext} from '../../atom/provider';
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

const Switch = ({model, help}, legacyContext) => {
  const {type} = model;
  const translate = GetTranslateFromContext(legacyContext);
  switch (type) {
    case 'qcmDrag':
      return <QcmDrag {...model} help={help} groupAriaLabel={translate('answer_the_question')} />;
    case 'qcm':
      return <Qcm {...model} groupAriaLabel={translate('answer_the_question')} />;
    case 'qcmGraphic':
      return <QcmGraphic {...model} groupAriaLabel={translate('answer_the_question')} />;
    case 'freeText':
      return <FreeText {...model} />;
    case 'dropDown':
      return <DropDown {...model} groupAriaLabel={translate('answer_the_question')} />;
    case 'slider':
      return <QuestionRange {...model} groupAriaLabel={translate('answer_the_question')} />;
    case 'template':
      return <Template {...model} groupAriaLabel={translate('answer_the_question')} />;
  }
};

Switch.propTypes = {
  model: propTypes.model,
  help: propTypes.help
};

Switch.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const Answer = props => {
  const {model, media, help} = props;

  return (
    <div data-name="answer" className={style.wrapper}>
      {media ? <MediaView media={media} /> : null}
      <form>
        <Switch model={model} help={help} />
      </form>
    </div>
  );
};

Answer.propTypes = propTypes;

Answer.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default Answer;
