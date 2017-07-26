import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import keys from 'lodash/fp/keys';
import HeartIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/vote-heart';
import HeartBrokenIcon from '@coorpacademy/nova-icons/composition/coorpacademy/broken-heart';
import Provider from '../provider';
import style from './style.css';

const MODES = {
  default: style.default,
  small: style.small
};

const Life = (props, context) => {
  const {skin} = context;
  const {
    animated = false,
    count = 3,
    fail = false,
    mode = 'default',
    className,
    style: customStyle
  } = props;
  const negativeColor = get('common.negative', skin);
  const white = get('common.white', skin);

  const pickStyle = (successStyle, failStyle, animatedStyle) => {
    if (fail) {
      if (animated) return animatedStyle;
      return failStyle;
    }
    return successStyle;
  };

  return (
    <div data-name="life" className={classnames(MODES[mode], className)} style={customStyle}>
      <div className={style.livesCounterWrapper}>
        <div
          className={
            fail && animated ? style.previousLivesCounterFail : style.previousLivesCounterDefault
          }
        >
          {count + 1}
        </div>
        <div
          data-name="counter"
          className={fail ? style.livesCounterFail : style.livesCounterDefault}
        >
          {count}
        </div>
      </div>
      <div className={style.multiplier}>
        <div className={style.multiplierText}>x</div>
      </div>
      <div className={fail && animated ? style.heartWrapperFail : style.heartWrapperDefault}>
        <HeartIcon outline={white} outlineWidth={5} className={style.heartOutline} color={white} />
        <HeartIcon
          className={pickStyle(
            style.heartNormalDefault,
            style.heartNormalFail,
            style.heartNormalAnimatedFail
          )}
          color={negativeColor}
        />
        <HeartBrokenIcon
          className={pickStyle(
            style.heartBrokenDefault,
            style.heartBrokenFail,
            style.heartBrokenAnimatedFail
          )}
          color={negativeColor}
        />
      </div>
    </div>
  );
};

Life.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Life.propTypes = {
  animated: PropTypes.bool,
  mode: PropTypes.oneOf(keys(MODES)),
  count: PropTypes.number,
  fail: PropTypes.bool,
  className: PropTypes.string
};

export default Life;
