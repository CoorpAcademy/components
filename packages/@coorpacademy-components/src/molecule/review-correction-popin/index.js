import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './style.css';

const ReviewCorrectionPopin = (props, context) => {
  const {information, type} = props;
  return (
    <div className={style.wrapper}>
      <div className={classnames(style.popin, type === 'right' ? style.right : style.wrong)}>
        <span>{information.label}</span>
        <span>{information.message}</span>
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
