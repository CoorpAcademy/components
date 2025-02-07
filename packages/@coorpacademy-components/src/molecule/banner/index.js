import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys, noop, isEmpty, map, size} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const uncappedMap = map.convert({cap: false});

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
  const {type, message, cta = [], temporary, bannerKey, onEnd} = props;
  const [switchValue, setSwitchValue] = useState(false);

  const ButtonSeparator = <div className={classnames(style.buttonsBar, STYLES[type])} />;

  const handleSwitchToggle = useCallback(
    action => e => {
      const newSwitchValue = !switchValue;
      setSwitchValue(newSwitchValue);
      action(newSwitchValue);
    },
    [switchValue]
  );

  const buildButton = ({type: buttonType = 'button', label, action = noop}) => {
    const commonStyle = classnames(style.button, STYLES[type]);

    switch (buttonType) {
      case 'switch': {
        return (
          <div className={commonStyle}>
            <InputSwitch
              id="show-microlearning-switch"
              theme="coorpmanager"
              title={label}
              value={switchValue}
              onChange={handleSwitchToggle(action)}
              data-name={`banner-switch-cta`}
              aria-label={label}
            />
          </div>
        );
      }
      default: {
        return (
          <div className={commonStyle}>
            <ButtonLink
              data-name="banner-button-cta"
              aria-label={label}
              label={label}
              onClick={action}
              type="text"
              customStyle={{padding: 0}}
            />
          </div>
        );
      }
    }
  };

  const buildCta = ctaOptions => {
    return uncappedMap((options, i) => {
      if (isEmpty(options)) return null;

      return (
        <div className={style.ctaWrapper} key={i}>
          {i > 0 && i <= size(options) ? ButtonSeparator : null}
          {buildButton(options)}
        </div>
      );
    }, ctaOptions);
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
          customStyle={{padding: 0}}
        />
        {message}
      </div>
      {buildCta(cta)}
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
  cta: PropTypes.arrayOf(ctaPropTypes),
  temporary: PropTypes.bool,
  onEnd: PropTypes.func
};

export default Banner;
