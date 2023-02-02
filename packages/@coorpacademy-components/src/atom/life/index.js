import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, keys} from 'lodash/fp';
import {
  NovaSolidVoteRewardsVoteHeart as HeartIcon,
  NovaCompositionCoorpacademyBrokenHeart as HeartBrokenIcon,
  NovaCompositionCoorpacademyVoteHeartOutline as HeartIconOutline
} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import cssStyle from './style.css';

const MODES = {
  default: cssStyle.default,
  small: cssStyle.small
};

const BOUNCES = {
  bounce: cssStyle.bounce,
  bounceTwice: cssStyle.bounceTwice,
  bounceAndPause: cssStyle.bounceAndPause
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
    operator = 'x',
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

  const heartWrapper =
    failed && animated ? cssStyle.heartWrapperFailed : cssStyle.heartWrapperDefault;
  const bounceClass = bounce ? BOUNCES[bounce.type] : null;
  const heartCustomStyle = {
    animationDelay: bounce && bounce.delay,
    animationDuration: bounce && bounce.duration,
    left: heartOnRight && '70px'
  };

  const countStyle = failed ? cssStyle.livesCounterFailed : cssStyle.livesCounterDefault;

  return (
    <div data-name="life" className={classnames(MODES[mode], className)} style={customStyle}>
      <div className={cssStyle.livesCounterWrapper}>
        <div
          className={pickStyle(
            cssStyle.previousLivesCounterDefault,
            cssStyle.previousLivesCounterDefault,
            cssStyle.previousLivesCounterFailed,
            cssStyle.previousLivesRevival
          )}
        >
          {count + 1}
        </div>
        <div data-name="counter" className={countStyle}>
          {count}
        </div>
      </div>
      <div className={cssStyle.operatorWrapper}>
        <span className={cssStyle.operator}>{operator}</span>
      </div>
      <div className={classnames(heartWrapper, bounceClass)} style={heartCustomStyle}>
        <HeartIconOutline className={cssStyle.heartOutline} style={{color: white}} />
        <HeartIcon
          className={pickStyle(
            cssStyle.heartNormalDefault,
            cssStyle.heartNormalFailed,
            cssStyle.heartNormalAnimatedFailed,
            cssStyle.heartNormalRevival
          )}
          style={{color: negativeColor}}
        />
        <HeartBrokenIcon
          className={pickStyle(
            cssStyle.heartBrokenDefault,
            cssStyle.heartBrokenFailed,
            cssStyle.heartBrokenAnimatedFailed,
            cssStyle.heartBrokenRevival
          )}
          style={{color: negativeColor}}
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
  className: PropTypes.string,
  operator: PropTypes.string,
  style: PropTypes.shape({})
};

export default Life;
