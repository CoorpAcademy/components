import React, {useCallback, useMemo} from 'react';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import Tooltip from '../../atom/tooltip';
import style from './style.css';
import propTypes from './prop-types';

const KlfButton = ({klf}, legacyContext) => {
  const translate = GetTranslateFromContext(legacyContext);
  const klfButtonProps = useMemo(
    () => ({
      ...klf,
      icon: {
        position: 'left',
        type: 'key'
      },
      type: 'primary'
    }),
    [klf]
  );

  const AnchorButton = useCallback(
    ({onKeyDown}) => (
      <div className={style.klfButtonContainer}>
        <ButtonLink
          {...klfButtonProps}
          className={style.klfButton}
          onKeyDown={onKeyDown}
          useTitle={false}
        />
      </div>
    ),
    [klfButtonProps]
  );

  const TooltipContent = useCallback(
    () => (
      <span
        className={style.tooltipText}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: klf.tooltip}}
      />
    ),
    [klf.tooltip]
  );

  const toolTipProps = useMemo(
    () => ({
      closeToolTipInformationTextAriaLabel: translate(
        'Press the escape key to close the information text'
      ),
      AnchorElement: AnchorButton,
      TooltipContent,
      'aria-label': translate('More details'),
      tooltipClassName: style.toolTipCustomization
    }),
    [AnchorButton, TooltipContent, translate]
  );

  return (
    <div className={style.klfContainer}>
      <Tooltip {...toolTipProps} />
    </div>
  );
};

KlfButton.propTypes = {
  klf: propTypes.klf
};

KlfButton.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const ReviewCorrectionPopin = props => {
  const {information, resultLabel, type, klf, next} = props;

  const nextQuestionButtonProps = {
    ...next,
    type: 'primary'
  };

  const cta = type === 'wrong' ? <KlfButton klf={klf} /> : null;

  const ICONS = {
    right: RightIcon,
    wrong: WrongIcon
  };
  const Icon = ICONS[type];

  return (
    <div className={style.wrapper} data-testid="review-correction-popin">
      <div className={classnames(style.popin, type === 'right' ? style.right : style.wrong)}>
        <div className={style.correctionSection}>
          <div className={style.iconCircle}>
            <Icon className={type === 'right' ? style.iconRight : style.iconWrong} />
          </div>
          <div className={style.resultLabel}>
            <span aria-label={resultLabel} role="status">
              {resultLabel}
            </span>
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
          <div className={style.nextQuestionContainer} data-testid="next-question-button-container">
            <ButtonLink {...nextQuestionButtonProps} className={style.nextQuestionButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCorrectionPopin.propTypes = propTypes;

export default ReviewCorrectionPopin;
