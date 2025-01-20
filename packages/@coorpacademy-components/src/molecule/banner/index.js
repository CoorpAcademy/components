import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import style from './style.css';

const TYPES = {
  success: ['circle-check', COLORS.cm_positive_200],
  error: ['triangle-exclamation', COLORS.cm_negative_200],
  warning: ['circle-exclamation', COLORS.cm_yellow_400],
  info: ['circle-info', COLORS.cm_grey_500]
};

const STYLES = {
  success: style.success,
  error: style.error,
  warning: style.warning
};

const Banner = props => {
  const {
    type,
    message,
    firstCTA,
    firstCTALabel,
    secondCTALabel,
    secondCTA,
    temporary,
    bannerKey,
    onEnd
  } = props;
  const [iconName, iconColor] = TYPES[type];

  return (
    <div
      key={bannerKey}
      className={classnames(style.banner, STYLES[type], temporary && style.temporaryBanner)}
      onAnimationEnd={onEnd}
      title={message}
    >
      <div data-name={`${type}-banner-message`} className={style.message}>
        <Icon
          iconName={iconName}
          iconColor={iconColor}
          className={classnames(style.icon, temporary && style.temporaryIcon)}
        />
        {message}
      </div>
      {firstCTALabel ? (
        <div className={classnames(style.button, STYLES[type])}>
          <ButtonLink
            data-name="first-banner-cta"
            aria-label={firstCTALabel}
            label={firstCTALabel}
            onClick={firstCTA}
            type="text"
          />
        </div>
      ) : null}
      {firstCTALabel && secondCTALabel ? (
        <div className={classnames(style.buttonsBar, STYLES[type])} />
      ) : null}
      {secondCTALabel ? (
        <div className={classnames(style.button, STYLES[type])}>
          <ButtonLink
            data-name="second-banner-cta"
            onClick={secondCTA}
            aria-label={secondCTALabel}
            label={secondCTALabel}
            type="text"
          />
        </div>
      ) : null}
    </div>
  );
};

Banner.propTypes = {
  bannerKey: PropTypes.string,
  type: PropTypes.oneOf(keys(TYPES)),
  message: PropTypes.string.isRequired,
  firstCTA: PropTypes.func,
  firstCTALabel: PropTypes.string,
  secondCTALabel: PropTypes.string,
  secondCTA: PropTypes.func,
  temporary: PropTypes.bool,
  onEnd: PropTypes.func
};

export default Banner;
