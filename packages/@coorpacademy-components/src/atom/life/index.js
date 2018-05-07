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
    bounce = null,
    heartOnRight = false,
    animated = false,
    count = 3,
    failed = false,
    mode = 'default',
    addLife = false,
    revival,
    className,
    style: customStyle
  } = props;
  const negativeColor = get('common.negative', skin);
  const white = get('common.white', skin);

  if (count === null) {
    return null;
  }

  const pickStyle = (successStyle, failedStyle, animatedFailedStyle, revivalStyle) => {
    if (revival) return revivalStyle;
    if (failed && animated) return animatedFailedStyle;
    if (failed) return failedStyle;
    return successStyle;
  };

  const heartWrapper = failed && animated ? style.heartWrapperFailed : style.heartWrapperDefault;
  const bounceClass = bounce ? style[bounce.type] : null;
  const heartCustomStyle = {
    animationDelay: bounce && bounce.delay,
    animationDuration: bounce && bounce.duration,
    left: heartOnRight && '70px'
  };

  return (
    <div data-name="life" className={classnames(MODES[mode], className)} style={customStyle}>
      <div className={style.livesCounterWrapper}>
        <div
          className={pickStyle(
            style.previousLivesCounterDefault,
            style.previousLivesCounterDefault,
            style.previousLivesCounterFailed,
            style.previousLivesRevival
          )}
        >
          {count + 1}
        </div>
        <div
          data-name="counter"
          className={failed ? style.livesCounterFailed : style.livesCounterDefault}
        >
          {count}
        </div>
      </div>
      <div className={style.multiplier}>
        {addLife ? (
          <div className={style.multiplierText}>+</div>
        ) : (
          <div className={style.multiplierText}>x</div>
        )}
      </div>
      <div className={classnames(heartWrapper, bounceClass)} style={heartCustomStyle}>
        <HeartIcon outline={white} outlineWidth={5} className={style.heartOutline} color={white} />
        <HeartIcon
          className={pickStyle(
            style.heartNormalDefault,
            style.heartNormalFailed,
            style.heartNormalAnimatedFailed,
            style.heartNormalRevival
          )}
          color={negativeColor}
        />
        <HeartBrokenIcon
          className={pickStyle(
            style.heartBrokenDefault,
            style.heartBrokenFailed,
            style.heartBrokenAnimatedFailed,
            style.heartBrokenRevival
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
  revival: PropTypes.bool,
  animated: PropTypes.bool,
  bounce: PropTypes.shape({
    type: PropTypes.oneOf(['bounce', 'bounceTwice', 'bounceAndPause']),
    delay: PropTypes.string
  }),
  heartOnRight: PropTypes.bool,
  mode: PropTypes.oneOf(keys(MODES)),
  count: PropTypes.number,
  failed: PropTypes.bool,
  className: PropTypes.string
};

export default Life;
