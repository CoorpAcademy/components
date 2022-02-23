import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './style.css';

const ReviewCorrectionPopin = (props, context) => {
  const {information, resultLabel, type} = props;

  const cta = null;

  return (
    <div className={style.wrapper}>
      <div className={classnames(style.popin, type === 'right' ? style.right : style.wrong)}>
        <div className={style.iconCircle} />
        <div className={style.result}>{resultLabel}</div>
        <div className={style.information}>
          <span className={style.label}>{information.label}</span>
          <span className={style.message}>{information.message}</span>
        </div>
        {cta}
      </div>
    </div>
  );
};

// TODO RESET ET RECOMMIT

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
