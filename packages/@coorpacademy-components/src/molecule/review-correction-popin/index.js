import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const ReviewCorrectionPopin = (props, context) => {
  const {information, resultLabel, type, next} = props;

  const cta = null;
  const buttonProps = {
    ...next,
    type: 'primary'
  };

  return (
    <div className={style.wrapper}>
      <div className={classnames(style.popin, type === 'right' ? style.right : style.wrong)}>
        <div className={style.iconCircle} />
        <div className={style.result}>
          <div className={style.resultLabel} aria-label="result">
            <span aria-label={resultLabel}>{resultLabel}</span>
          </div>
          <div className={style.information} aria-label="answer-information">
            <span className={style.label} aria-label={information.label}>
              {information.label}
            </span>
            <span className={style.message} aria-label={information.message}>
              {information.message}
            </span>
          </div>
        </div>
        <div className={style.actions}>
          {cta}
          <div className={style.nextQuestion}>
            <ButtonLink {...buttonProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCorrectionPopin.propTypes = {
  type: PropTypes.oneOf(['right', 'wrong']),
  resultLabel: PropTypes.string,
  information: PropTypes.shape({
    label: PropTypes.string,
    message: PropTypes.string
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default ReviewCorrectionPopin;
