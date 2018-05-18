import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
import TimerIcon from '@coorpacademy/nova-icons/composition/coorpacademy/timer';
import BoltIcon from '@coorpacademy/nova-icons/composition/coorpacademy/bolt';
import GraduationIcon from '@coorpacademy/nova-icons/solid/school-and-science/graduation-hat';
import CertificationIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/rewards-certified-badge';
import BonusIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/rewards-badge-1';
import Provider from '../../atom/provider';
import style from './engine-stars.css';

const ICONS = {
  microlearning: TimerIcon,
  learner: GraduationIcon,
  battle: BoltIcon,
  certifications: CertificationIcon,
  bonus: BonusIcon
};

const EngineStars = (props, context) => {
  const {skin} = context;
  const {type, stars, title} = props;
  const dark = get('common.dark', skin);
  const light = get('common.light', skin);
  const IconType = ICONS[type];

  return (
    <div className={style.engineStars}>
      <span
        className={style.engineIcon}
        style={{
          backgroundColor: light
        }}
      >
        <IconType className={style.iconHeader} color={dark} width="30" />
      </span>
      <div className={style.score}>
        <p>{stars}</p>
        <span>
          <StarIcon className={style.iconStar} color={dark} />
        </span>
      </div>
      <div className={style.scoreTitle}>{title}</div>
    </div>
  );
};

EngineStars.propTypes = {
  type: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

EngineStars.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default EngineStars;
