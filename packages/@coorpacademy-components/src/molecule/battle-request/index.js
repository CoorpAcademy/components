import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import BoltIcon from '@coorpacademy/nova-icons/composition/coorpacademy/bolt';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import style from './style.css';

const BattleRequest = (props, context) => {
  const {translate, skin} = context;
  const {username, discipline, level, avatar, href} = props;

  const primaryColor = getOr('#00B0FF', 'common.primary', skin);
  const white = getOr('#fff', 'common.white', skin);

  const challengeLabel = translate('challenges you on');
  const startLabel = translate('Start battle');

  return (
    <Link
      className={style.card}
      style={{
        borderColor: primaryColor
      }}
      href={href}
    >
      <div className={style.avatar}>
        <img src={avatar} />
      </div>
      <div className={style.iconBubble}>
        <BoltIcon color={white} className={style.icon} />
      </div>
      <div className={style.info}>
        <div className={style.name}>
          {username}
          <span>
            {challengeLabel}
          </span>
        </div>
        <div className={style.discipline}>
          <div className={style.disciplineName}>
            {discipline}
          </div>
          <div className={style.level}>
            {level}
          </div>
        </div>
      </div>
      <div className={style.start}>
        {startLabel}
      </div>
      <div className={style.arrow} />
    </Link>
  );
};

BattleRequest.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

BattleRequest.propTypes = {
  username: PropTypes.string,
  discipline: PropTypes.string,
  level: PropTypes.string,
  avatar: PropTypes.string,
  href: PropTypes.string
};

export default BattleRequest;
