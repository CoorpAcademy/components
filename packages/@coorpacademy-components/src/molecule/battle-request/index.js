import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import Link from '../../atom/link';
import style from './style.css';

const BattleRequest = (props, context) => {
  const {translate, skin} = context;
  const {
    username,
    discipline,
    level,
    avatar,
    href
  } = props;

  const primaryColor = getOr('#00B0FF', 'common.primary', skin);

  const challengeLabel = translate('challenges you on');
  const startLabel = translate('Start battle');

  return (
    <Link className={style.card}
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
          {discipline}
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
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

BattleRequest.propTypes = {
  username: React.PropTypes.string,
  discipline: React.PropTypes.string,
  level: React.PropTypes.string,
  avatar: React.PropTypes.string,
  href: React.PropTypes.string
};

export default BattleRequest;
