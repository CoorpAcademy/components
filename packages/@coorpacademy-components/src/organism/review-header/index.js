import React from 'react';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import ReviewHeaderSteps from '../../molecule/review-header-steps';
import style from './style.css';
import propTypes from './types';

const ReviewHeader = (props, context) => {
  const {
    steps,
    mode,
    skillName,
    'aria-label': ariaLabel,
    closeButtonAriaLabel,
    onQuitClick,
    hiddenSteps
  } = props;
  const {skin} = context;
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

      <div className={style.iconButtonWrapper} data-name="review-header-close-button-wrapper">
        <ButtonLinkIconOnly {...buttonProps} />
      </div>
    </div>
  );
};

ReviewHeader.propTypes = propTypes;

export default ReviewHeader;
