import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Link from '../../atom/link';
import style from './style.css';

const BattleRequest = (props, context) => {
  const {translate, skin} = context;
  const {username, discipline, level, avatar, href} = props;

  const primaryColor = getOr('#00B0FF', 'common.primary', skin);

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
      <div className={style.icon} />
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
  skin: PropTypes.object,
  translate: PropTypes.func
};

BattleRequest.propTypes = {
  username: PropTypes.string,
  discipline: PropTypes.string,
  level: PropTypes.string,
  avatar: PropTypes.string,
  href: PropTypes.string
};

export default BattleRequest;
