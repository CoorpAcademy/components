import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyBolt as BoltIcon} from '@coorpacademy/nova-icons';
import style from './style.css';

const Avatar = ({url}) => {
  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.avatar}>
          <img className={style.avatarImg} src={url} />
        </div>
      </div>
      <div className={style.iconBubble}>
        <BoltIcon className={style.icon} />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired
};

export default Avatar;
