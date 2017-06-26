import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import Cta from '../../../atom/cta';
import Provider from '../../../atom/provider';
import Clue from '../../../atom/clue';
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
  const {step, question, cta, help, answer, buttons, text, answer, verticalMargin = 100} = props;
  const {skin, translate = identity} = context;

  const helpView = help ? <div className={style.helpView}>{help}</div> : null;

  const stepView = createStepView(step, skin);

  const contentStyle = typeClue ? style.contentWrapperHelpers : style.contentWrapper;

  const contentView = typeClue ? <Clue text={text} /> : <Answer {...answer} />;

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
};

SlidesPlayer.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SlidesPlayer.propTypes = {
  typeClue: PropTypes.bool,
  step: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  question: PropTypes.string.isRequired,
  help: PropTypes.string,
  verticalMargin: PropTypes.number,
  text: Clue.propTypes.text,
  answer: Answer.propTypes.answer,
  cta: PropTypes.shape(Cta.propTypes).isRequired,
  buttons: SlidesFooter.propTypes.buttons
};

export default SlidesPlayer;
