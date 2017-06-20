import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import HeartIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/vote-heart';
import HeartBrokenIcon from '@coorpacademy/nova-icons/composition/coorpacademy/broken-heart';
import Provider from '../provider';
import style from './style.css';

const Life = (props, context) => {
  const {skin} = context;
  const {count = 3, fail = false, className} = props;
  const negativeColor = getOr('#F73F52', 'common.negative', skin);
  const white = getOr('#fff', 'common.white', skin);

  return (
    <div className={classnames(style.default, className)}>
      <div className={style.livesCounterWrapper}>
        <div className={fail ? style.previousLivesCounterFail : style.previousLivesCounterDefault}>{count + 1}</div>
        <div className={fail ? style.livesCounterFail : style.livesCounterDefault}>{count}</div>
      </div>
      <div className={style.multiplier}>
        <div className={style.multiplierText}>x</div>
      </div>
      <div className={fail ? style.heartWrapperFail : style.heartWrapperDefault}>
        <HeartIcon outline={white} outlineWidth={5} className={style.heartOutline} color={white} />
        <HeartIcon className={fail ? style.heartNormalFail : style.heartNormalDefault} color={negativeColor} />
        <HeartBrokenIcon className={fail ? style.heartBrokenFail : style.heartBrokenDefault} color={negativeColor} />
      </div>
    </div>
  );
};

Life.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Life.propTypes = {
  count: PropTypes.number,
  fail: PropTypes.bool,
  className: PropTypes.string
};

export default Life;
