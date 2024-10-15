import React from 'react';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import Provider, {GetTranslateFromContext, GetSkinFromContext} from '../../atom/provider';
import ButtonLinkIcon from '../../atom/button-link-icon';
import ReviewHeaderSteps from '../../molecule/review-header-steps';
import style from './style.css';
import propTypes from './types';

const ReviewHeader = (props, legacyContext) => {
  const {steps, mode, skillName, 'aria-label': ariaLabel, onQuitClick, hiddenSteps} = props;
  const translate = GetTranslateFromContext(legacyContext);
  const skin = GetSkinFromContext(legacyContext);
  const closeButtonAriaLabel = translate('close_button_ariaLabel');
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const buttonProps = {
    icon: 'close',
    'data-name': 'review-header-close-button',
    'aria-label': closeButtonAriaLabel,
    onClick: onQuitClick,
    size: 'responsive',
    className: style.review
  };

  const stepsWrapper = classnames(
    style.stepsWrapper,
    hiddenSteps ? style.stepsWrapperAnimation : null
  );

  return (
    <div className={style.headerWrapper} data-name="review-header" aria-label={ariaLabel}>
      <div className={style.titlesWrapper}>
        <div className={style.title} title={mode} aria-label={mode} data-name="review-header-mode">
          {mode}
        </div>
        <div
          className={style.skillName}
          style={{
            color: primarySkinColor
          }}
          title={skillName}
          aria-label={skillName}
          data-name="review-header-skill-name"
        >
          {skillName}
        </div>
      </div>

      <div className={stepsWrapper}>
        <ReviewHeaderSteps steps={steps} key={'review-header-steps'} />
      </div>

      <div className={style.iconButtonWrapper} data-testid="review-header-close-button-wrapper">
        <ButtonLinkIcon {...buttonProps} />
      </div>
    </div>
  );
};

ReviewHeader.propTypes = propTypes;

ReviewHeader.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

export default ReviewHeader;
