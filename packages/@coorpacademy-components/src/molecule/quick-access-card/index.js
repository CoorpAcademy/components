import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const getBackgroudRadialColors = feature => {
  switch (feature) {
    case 'manage_users':
    case 'upload_users':
      return {
        iconColor: '#2EC1D6',
        r1: {r: 22, g: 172, b: 140},
        r2: {r: 24, g: 187, b: 152},
        r3: {r: 223, g: 251, b: 245},
        r4: '#DFFBF5'
      };
    case 'look_and_feel':
    case 'dashboard':
      return {
        iconColor: '#18BB98',
        r1: {r: 33, g: 153, b: 171},
        r2: {r: 46, g: 193, b: 214},
        r3: {r: 212, g: 247, b: 252},
        r4: '#D4F7FC'
      };
    case 'cockpit':
      return {
        iconColor: '#FF7043',
        r1: {r: 255, g: 65, b: 5},
        r2: {r: 255, g: 112, b: 67},
        r3: {r: 255, g: 224, b: 214},
        r4: '#FFE0D6'
      };
    default:
      return null;
  }
};

const QuickAccessCard = (props, context) => {
  const {title, description, feature, onClick} = props;
  const {iconColor} = getBackgroudRadialColors(feature);
  const handleClick = useMemo(() => e => onClick(e), [onClick]);

  return (
    <div data-name="card" data-type={feature} className={style.quickAccess} onClick={handleClick}>
      <div
        style={{
          backgroundColor: iconColor
          // background: radial-gradient(62.12% 56.45% at 0% 77.29%, rgba(255, 65, 5, 0.2) 0%, rgba(255, 65, 5, 0) 100%), radial-gradient(113.85% 103.46% at 93.27% 7.88%, rgba(255, 112, 67, 0.15) 0%, rgba(255, 112, 67, 0) 100%), radial-gradient(49.66% 49.63% at 78.65% 86.26%, #FFE0D6 0%, rgba(255, 224, 214, 0) 100%), #FAFAFA;
        }}
        className={style.content}
      >
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
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

export default QuickAccessCard;
