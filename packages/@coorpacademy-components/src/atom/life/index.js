import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getOr from 'lodash/fp/getOr';
import Provider from '../provider';
import HeartIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/vote-heart';
import HeartBrokenIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/vote-heart-broken';
import style from './style.css';



const Life = (props, context) => {
  const {skin} = context;
  const {count = 3, fail = false, className} = props;
  const negativeColor = getOr('#F73F52', 'common.negative', skin);
  const white = getOr('#fff', 'common.white', skin);
  const Icon = fail ? HeartBrokenIcon : HeartIcon;

  return (
    <div className={classnames(style.default, className)}>
      <div className={style.livesCounter}>
        x{count}
      </div>
      <div className={style.heartWrapper}>
        <HeartIcon className={style.heartOutline} color={white} />
        <Icon className={style.heart} color={negativeColor} />
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
