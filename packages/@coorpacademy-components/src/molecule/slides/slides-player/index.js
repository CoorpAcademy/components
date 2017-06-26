import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import Cta from '../../../atom/cta';
import Provider from '../../../atom/provider';
import Clue from '../../../atom/clue';
import Loader from '../../../atom/loader';
import Answer from '../../../molecule/answer';
import SlidesFooter from '../slides-footer';
import style from './style.css';

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

  const catchError = error ? <div className={style.error}>Oups, something went wrong...</div> : null;

  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const stepView = createStepView(step, skin);

  const wrapperColor = typeClue === 'clue' ? '#ECEFF1' : 'white';

  const contentView = typeClue === 'clue' ? <Clue text={text} /> : <Answer {...answerType} />;

  const slideView = (
    <div className={style.wrapper}>
      {stepView}
      <div className={style.guideWrapper}>
        <span>{translate('New media')}</span>
      </div>
      <div
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
      <div className={style.footer}>
        <SlidesFooter buttons={buttons} />
      </div>
    </div>
  );

  const globalView = stepView ? slideView : <Loader />;

  return (
    <div>
      {catchError}
      {globalView}
    </div>
  );
};

SlidesPlayer.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SlidesPlayer.propTypes = {
  error: PropTypes.bool,
  typeClue: PropTypes.string,
  step: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  question: PropTypes.string.isRequired,
  help: PropTypes.string,
  verticalMargin: PropTypes.number,
  text: Clue.propTypes.text,
  answerType: PropTypes.shape(Answer.PropTypes),
  cta: PropTypes.shape(Cta.propTypes).isRequired,
  buttons: SlidesFooter.propTypes.buttons
};

export default SlidesPlayer;
