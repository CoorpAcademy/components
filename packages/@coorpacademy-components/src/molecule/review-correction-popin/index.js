import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const buildKlfButton = klf => {
  const klfButtonProps = {
    ...klf,
    icon: {
      position: 'left',
      type: 'key'
    },
    type: 'primary',
    onClick: () => {} // TODO: on mobile it should show the tooltip
  };

  return (
    <div className={style.klfContainer}>
      <div className={style.klfButtonContainer}>
        <ButtonLink {...klfButtonProps} className={style.klfButton} />
      </div>
      <div className={style.toolTip}>
        <div className={style.tooltipText}>{klf.tooltip}</div>
      </div>
    </div>
  );
};

const ReviewCorrectionPopin = props => {
  const {information, resultLabel, type, klf, next} = props;

  const nextQuestionButtonProps = {
    ...next,
    type: 'primary'
  };

  const cta = type === 'wrong' ? buildKlfButton(klf) : null;

  const ICONS = {
    right: RightIcon,
    wrong: WrongIcon
  };
  const Icon = ICONS[type];

  return (
    <div className={style.wrapper}>
      <div className={classnames(style.popin, type === 'right' ? style.right : style.wrong)}>
        <div className={style.correctionSection}>
          <div className={style.iconCircle}>
            <Icon className={type === 'right' ? style.iconRight : style.iconWrong} />
          </div>
          <div className={style.resultLabel} aria-label="result">
            <span aria-label={resultLabel}>{resultLabel}</span>
          </div>
        </div>
        <div className={type === 'right' ? style.rightMiddleSection : style.wrongMiddleSection}>
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
  }),
  klf: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default ReviewCorrectionPopin;
