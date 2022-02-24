import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const ReviewCorrectionPopin = (props, context) => {
  const {information, resultLabel, type, next} = props;
  const {skin} = context;
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);

  const nextQuestionButtonProps = {
    ...next,
    type: 'primary'
  };
  const klfButtonProps = {
    ...next,
    type: 'secondary'
  };
  
  const cta = type === 'wrong' ? (<div className={style.klfContainer}>
    <ButtonLink {...klfButtonProps} />
  </div>) : null;

  const ICONS = {
    right: RightIcon,
    wrong: WrongIcon
  };
  const Icon = ICONS[type];

  return (
    <div className={style.wrapper}>
      <div className={classnames(style.popin, type === 'right' ? style.right : style.wrong)}>
        <div className={style.iconCircle}>
          <Icon className={type === 'right' ? style.iconRight : style.iconWrong}/>
        </div>
        <div className={type === 'right' ? style.rightResult : style.wrongResult}>
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
        <div className={type === 'right' ? style.actions : style.actionsWrong}>
          {cta}
          <div className={style.nextQuestionContainer}>
            <ButtonLink {...nextQuestionButtonProps} className={style.nextQuestionButton}/>
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

ReviewCorrectionPopin.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default ReviewCorrectionPopin;
