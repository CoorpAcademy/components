import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionNavigationArrowRight as ArrowRightIcon} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import Avatar from '../../atom/avatar';
import style from './style.css';

const BattleRequest = (props, context) => {
  const {translate, skin} = context;
  const {username, discipline, level, avatar, href} = props;

  const primaryColor = get('common.primary', skin);
  const light = get('common.light', skin);

  const challengeLabel = translate('challenges you on');
  const startLabel = translate('Start battle');

  return (
    <Link
      data-name="battle-request-dashboard"
      className={style.card}
      style={{
        borderColor: primaryColor
      }}
      href={href}
    >
      <div>
        <Avatar url={avatar} />
      </div>
      <div className={style.info}>
        <div className={style.name}>
          {username}
          <span>{challengeLabel}</span>
        </div>
        <div className={style.discipline}>
          <div
            className={classnames(style.disciplineName, style.innerHTML)}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: discipline}}
          />
          <div className={style.level}>{level}</div>
        </div>
      </div>
      <div className={style.start}>{startLabel}</div>
      <ArrowRightIcon className={style.arrow} color={light} />
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
