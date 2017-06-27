import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import Cta from '../../../atom/cta';
import Provider from '../../../atom/provider';
import Clue from '../../../atom/clue';
import Answer from '../../../molecule/answer';
import Loader from '../../../atom/loader';
import SlidesFooter from '../slides-footer';
import style from './style.css';

const TYPE = {
  CLUE: 'clue',
  ANSWER: 'answer'
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
  const {
    error,
    errorMsg,
    typeClue,
    step,
    question,
    cta,
    help,
    buttons,
    text,
    answerType,
    verticalMargin = 100
  } = props;

  const {skin, translate = identity} = context;

  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const stepView = createStepView(step, skin);

  const wrapperColor = typeClue === TYPE.CLUE ? '#ECEFF1' : 'white';

  const contentView = typeClue === TYPE.CLUE ? <Clue text={text} /> : <Answer {...answerType} />;

  const globalView = stepView
    ? <div
        className={style.contentWrapper}
        style={{
          minHeight: `calc(100vh - ${verticalMargin}px)`,
          backgroundColor: wrapperColor
        }}
      >
        <div className={style.question}>
          {question}
        </div>
        {helpView}
        {contentView}
        <div className={style.ctaWrapper}>
          <Cta className={style.cta} {...cta} />
        </div>
      </div>
    : <div
        className={style.loading}
        style={{
          minHeight: `calc(100vh - ${verticalMargin}px)`
        }}
      >
        <Loader />
      </div>;

  const catchError = error
    ? <div
        className={style.contentWrapper}
        style={{
          minHeight: `calc(100vh - ${verticalMargin}px)`
        }}
      >
        <div className={style.error}>{errorMsg}</div>
      </div>
    : globalView;

  return (
    <div>
      <div className={style.wrapper}>
        {stepView}
        <div className={style.guideWrapper}>
          <span>{translate('New media')}</span>
        </div>
        {catchError}
        <div className={style.footer}>
          <SlidesFooter buttons={buttons} />
        </div>
      </div>
    </div>
  );
};

SlidesPlayer.TYPE = TYPE;

SlidesPlayer.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SlidesPlayer.propTypes = {
  error: PropTypes.bool,
  typeClue: PropTypes.string,
  errorMsg: PropTypes.string,
  step: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  question: PropTypes.string,
  help: PropTypes.string,
  verticalMargin: PropTypes.number,
  text: Clue.propTypes.text,
  answerType: PropTypes.shape(Answer.PropTypes),
  cta: PropTypes.shape(Cta.propTypes),
  buttons: SlidesFooter.propTypes.buttons
};

export default SlidesPlayer;
