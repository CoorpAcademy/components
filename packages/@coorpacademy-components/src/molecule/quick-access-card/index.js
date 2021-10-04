import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const QuickAccessCard = (props, context) => {
  const {title, description, feature, onClick} = props;
  const iconColor = '#2EC1D6';
  const handleClick = useMemo(() => e => onClick(e), [onClick]);

  return (
    <div data-name="card" data-type={feature} className={style.card} onClick={handleClick}>
      <div
        style={{
          backgroundColor: iconColor
        }}
      >
        {title}
        {description}
      </div>
    </div>
  );
};

QuickAccessCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  // _blank: PropTypes.bool,
  feature: PropTypes.oneOf([
    'analytics',
    'cms',
    'cockpit',
    'massive_battle',
    'email_settings',
    'dashboard',
    'look_and_feel',
    'manage_users',
    'upload_users'
  ])
};
