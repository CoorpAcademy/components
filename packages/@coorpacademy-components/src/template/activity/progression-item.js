import React from 'react';
import PropTypes from 'prop-types';
import {get, noop} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowRight as ArrowRightIcon,
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon,
  NovaCompositionCoorpacademyAdaptive as AdaptiveIcon,
  NovaSolidContentContentBook1 as LearnerIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import ProgressBar from '../../molecule/progress-bar';
import Link from '../../atom/link';
import style from './progression-item.css';

const ProgressionItem = (props, context) => {
  const {skin} = context;
  const {
    disabled = false,
    adaptive,
    completion,
    label,
    level,
    onClick = noop,
    stars,
    state,
    type
  } = props;
  const dark = get('common.dark', skin);
  const primary = get('common.primary', skin);
  const white = get('common.white', skin);

  const adaptiveIcon = adaptive ? (
    <div
      className={style.adaptiveIcon}
      style={{
        backgroundColor: primary
      }}
    >
      <AdaptiveIcon color={white} height={14} />
    </div>
  ) : null;

  const handleCTAClick = e => {
    e.stopPropagation();
    e.preventDefault();
    onClick(e);
  };

  const link = disabled ? null : (
    <Link style={{color: primary}} onClick={handleCTAClick} data-progression-state={state}>
      <span className={style.cta}>
        {state} <ArrowRightIcon color={primary} height={12} />
      </span>
    </Link>
  );
  return (
    <div className={disabled ? style.disabled : ''}>
      <div className={style.wrapperTitle}>
        {type === 'course' ? (
          <LearnerIcon className={style.iconType} color={dark} />
        ) : (
          <TimerIcon className={style.iconType} color={dark} />
        )}
        <div data-name="activityLabel" className={style.label} title={label}>
          {label}
          {adaptiveIcon}
        </div>

        <div
          data-name="activityStars"
          className={style.stars}
          style={{
            color: primary
          }}
        >
          {stars} <StarIcon className={style.iconStar} color={primary} />
        </div>
      </div>
      <ProgressBar
        className={style.completion}
        value={completion * 100}
        max={100}
        style={{backgroundColor: primary}}
      />
      <div className={style.state}>
        {link}
        <span className={style.level}>{level}</span>
      </div>
      <div className={style.separation} />
    </div>
  );
};

ProgressionItem.propTypes = {
  completion: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  adaptive: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

ProgressionItem.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default ProgressionItem;
