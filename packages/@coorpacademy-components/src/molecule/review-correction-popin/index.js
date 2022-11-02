import React from 'react';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import propTypes from './prop-types';

const buildKlfButton = klf => {
  const klfButtonProps = {
    ...klf,
    icon: {
      position: 'left',
      type: 'key'
    },
    type: 'primary'
  };

  return (
    <div className={style.klfContainer}>
      <div className={style.klfButtonContainer}>
        <ButtonLink {...klfButtonProps} className={style.klfButton} />
      </div>
      <div className={style.toolTip}>
        <span
          className={style.tooltipText}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: klf.tooltip}}
        />
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
        <div className={style.feedbackSection}>
          <div className={style.information} aria-label="answer-information">
            <div className={style.labelContainer}>
              <span className={style.label} aria-label={information.label}>
                {information.label}
              </span>
            </div>
            <span
              className={style.message}
              aria-label={information.message}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: information.message}}
            />
          </div>
        </div>
        <div className={type === 'right' ? style.actions : style.actionsWrong}>
          {cta}
          <div className={style.nextQuestionContainer}>
            <ButtonLink {...nextQuestionButtonProps} className={style.nextQuestionButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCorrectionPopin.propTypes = propTypes;

export default ReviewCorrectionPopin;
