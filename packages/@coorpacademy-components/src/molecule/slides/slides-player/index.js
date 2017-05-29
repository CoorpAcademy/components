import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import Provider from '../../../atom/provider';
import Cta from '../../../atom/cta';
import DragAndDrop from '../../questions/drag-and-drop';
import FreeText from '../../questions/free-text';
import Qcm from '../../questions/qcm';
import QcmImage from '../../questions/qcm-image';
import SlidesFooter from '../slides-footer';
import style from './style.css';

const answerStyle = {
  dragAndDrop: style.dragAndDrop,
  qcm: style.qcm,
  qcmImage: style.qcmImage,
  freeText: style.freeText
};

const answers = {
  dragAndDrop: DragAndDrop,
  qcm: Qcm,
  qcmImage: QcmImage,
  freeText: FreeText
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

const createStepView = (step, skin) => {
  if (!step) return null;

  const color = getOr('#00B0FF', 'common.primary', skin);
  const stepWidth = step.current / step.total * 100;
  return (
    <div>
      <div className={style.stepCount}>
        <span style={{color}}>{step.current}</span>
        /{step.total}
      </div>
      <div className={style.stepWrapper}>
        <div
          className={style.stepBar}
          style={{
            backgroundColor: color,
            width: `${stepWidth}%`
          }}
        />
      </div>
    </div>
  );
};

const SlidesPlayer = (props, context) => {
  const {step, question, cta, help, answer, buttons} = props;
  const {skin, translate = identity} = context;

  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const answerView = createAnswerView(answer);
  const stepView = createStepView(step, skin);

  return (
    <div className={style.wrapper}>
      {stepView}
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
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SlidesPlayer.propTypes = {
  step: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  question: PropTypes.string.isRequired,
  help: PropTypes.string,
  answer: PropTypes.shape({
    type: PropTypes.oneOf(['dragAndDrop', 'qcm', 'qcmImage', 'freeText']).isRequired
  }),
  cta: PropTypes.shape(Cta.propTypes).isRequired,
  buttons: SlidesFooter.propTypes.buttons
};

export default SlidesPlayer;
