import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Cta from '../../../atom/cta';
import DragAndDrop from '../../questions/drag-and-drop';
import Qcm from '../../questions/qcm';
import QcmImage from '../../questions/qcm-image';
import SlidesFooter from '../slides-footer';
import style from './style.css';

const answerStyle = {
  dragAndDrop: style.dragAndDrop,
  qcm: style.qcm,
  qcmImage: style.qcmImage
};

const answers = {
  dragAndDrop: DragAndDrop,
  qcm: Qcm,
  qcmImage: QcmImage
};

const createAnswerView = answer => {
  const Answer = answer && answers[answer.type];
  return (
    Answer !== undefined &&
    <div className={answerStyle[answer.type]}>
      <Answer {...answer} />
    </div>
  );
};

const createProgressionView = (progression, skin) => {
  if (!progression) return null;

  const color = getOr('#00B0FF', 'common.primary', skin);
  const progressionWidth = progression.current / progression.total * 100;
  return (
    <div>
      <div className={style.progressionCount}>
        <span style={{color}}>{progression.current}</span>
        /{progression.total}
      </div>
      <div className={style.progressionWrapper}>
        <div
          className={style.progressionBar}
          style={{
            backgroundColor: color,
            width: `${progressionWidth}%`
          }}
        />
      </div>
    </div>
  );
};

const SlidesPlayer = (props, context) => {
  const {progression, question, cta, help, answer, buttons} = props;
  const {skin, translate} = context;

  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const answerView = createAnswerView(answer);
  const progressionView = createProgressionView(progression, skin);

  return (
    <div className={style.wrapper}>
      {progressionView}
      <div className={style.guideWrapper}>
        <span>{translate('New media')}</span>
      </div>
      <div className={style.contentWrapper}>
        <div className={style.question}>
          {question}
        </div>
        {helpView}
        <div className={style.answerWrapper}>
          {answerView}
        </div>
        <div className={style.ctaWrapper}>
          <Cta {...cta} />
        </div>
      </div>
      <div className={style.footer}>
        <SlidesFooter buttons={buttons} />
      </div>
    </div>
  );
};

SlidesPlayer.contextTypes = {
  translate: PropTypes.func,
  skin: PropTypes.object
};

SlidesPlayer.propTypes = {
  progression: PropTypes.shape({
    current: PropTypes.number.required,
    total: PropTypes.number.required
  }),
  question: PropTypes.string.required,
  help: PropTypes.string,
  answer: PropTypes.shape({
    type: PropTypes.oneOf(['draganddrop', 'qcm', 'qcmimage']).required
  }),
  cta: PropTypes.object.required,
  buttons: PropTypes.array
};

export default SlidesPlayer;
