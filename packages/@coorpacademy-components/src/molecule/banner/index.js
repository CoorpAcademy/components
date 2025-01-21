import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys, noop, isEmpty} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import InputSwitch from '../../atom/input-switch';
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
  warning: style.warning,
  info: style.info
};

const Banner = props => {
  const {type, message, firstCTA = {}, secondCTA = {}, temporary, bannerKey, onEnd} = props;
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchToggle = useCallback(
    action => () => {
      setSwitchValue(!switchValue);
      action();
    },
    [switchValue, setSwitchValue]
  );

  const buildCta = options => {
    if (isEmpty(options)) return null;

    const {type: buttonType, label, action = noop} = options;
    switch (buttonType) {
      case 'switch':
        return (
          <InputSwitch
            title={label}
            value={switchValue}
            onChange={handleSwitchToggle(action)}
            data-name={`banner-switch-cta`}
            aria-label={label}
          />
        );
      default:
        return (
          <ButtonLink
            data-name="banner-button-cta"
            aria-label={label}
            label={label}
            onClick={action}
            type="text"
          />
        );
    }
  };

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
      <div className={classnames(style.button, STYLES[type])}>{buildCta(firstCTA)}</div>
      {!isEmpty(secondCTA) ? <div className={classnames(style.buttonsBar, STYLES[type])} /> : null}
      <div className={classnames(style.button, STYLES[type])}>{buildCta(secondCTA)}</div>
    </div>
  );
};

const ctaPropTypes = PropTypes.shape({
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'switch']),
  action: PropTypes.func
});

Banner.propTypes = {
  bannerKey: PropTypes.string,
  type: PropTypes.oneOf(keys(TYPES)),
  message: PropTypes.string.isRequired,
  firstCTA: ctaPropTypes,
  secondCTA: ctaPropTypes,
  temporary: PropTypes.bool,
  onEnd: PropTypes.func
};

export default Banner;
