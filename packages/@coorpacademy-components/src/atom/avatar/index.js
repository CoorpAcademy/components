import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyBolt as BoltIcon} from '@coorpacademy/nova-icons';
import style from './style.css';

const Avatar = props => {
  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.avatar}>
          <img src={props.avatar} />
        </div>
      </div>
      <div className={style.iconBubble}>
        <BoltIcon color="#fff" className={style.icon} />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string
};

export default Avatar;
