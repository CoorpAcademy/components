import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import Cta from '../../../atom/cta';
import DropDown from '../../questions/drop-down';
import FreeText from '../../questions/free-text';
import Picker from '../../questions/picker';
import Provider from '../../../atom/provider';
import Qcm from '../../questions/qcm';
import QcmImage from '../../questions/qcm-image';
import QuestionRange from '../../questions/question-range';
import SlidesFooter from '../slides-footer';
import style from './style.css';

const answerStyle = {
  dropDown: style.dropDown,
  picker: style.picker,
  qcm: style.qcm,
  qcmImage: style.qcmImage,
  range: style.range,
  freeText: style.freeText
};

const answers = {
  dropDown: DropDown,
  picker: Picker,
  qcm: Qcm,
  qcmImage: QcmImage,
  range: QuestionRange,
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
  const {step, question, cta, help, answer, buttons, clue, verticalMargin = 100} = props;
  const {skin, translate = identity} = context;

  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const stepView = createStepView(step, skin);

  let content = '';
  let contentStyle = style.contentWrapper;
  if (answer) {
    const answerView = createAnswerView(answer);
    content = (
      <div className={style.answerWrapper}>
        {answerView}
      </div>
    );
  }

  if (clue) {
    contentStyle = style.contentWrapperHelpers;
    content = (
      <div className={style.clue}>
        <div className={style.icon}>
          <span className={style.iconClue} />
        </div>
        <div className={style.clueText}>{clue}</div>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      {stepView}
      <div className={style.guideWrapper}>
        <span>{translate('New media')}</span>
      </div>
      <div
        className={style.contentWrapper}
        style={{
          minHeight: `calc(100vh - ${verticalMargin}px)`
        }}
      >
        <div className={style.question}>
          {question}
        </div>
        {helpView}
        {content}
        <div className={style.ctaWrapper}>
          <Cta className={style.cta} {...cta} />
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
  verticalMargin: PropTypes.number,
  answer: PropTypes.shape({
    type: PropTypes.oneOf(['picker', 'qcm', 'qcmImage', 'freeText', 'dropDown', 'range']).required
  }),
  clue: PropTypes.string,
  cta: PropTypes.shape(Cta.propTypes).isRequired,
  buttons: SlidesFooter.propTypes.buttons
};

export default SlidesPlayer;
