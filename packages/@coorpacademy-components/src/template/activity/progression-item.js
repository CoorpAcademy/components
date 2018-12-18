import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import noop from 'lodash/fp/noop';
import ArrowRightIcon from '@coorpacademy/nova-icons/lib/nova-composition/navigation/arrow-right.web';
import StarIcon from '@coorpacademy/nova-icons/lib/nova-composition/coorpacademy/star.web';
import TimerIcon from '@coorpacademy/nova-icons/lib/nova-composition/coorpacademy/timer.web';
import AdaptiveIcon from '@coorpacademy/nova-icons/lib/nova-composition/coorpacademy/adaptive.web';
import LearnerIcon from '@coorpacademy/nova-icons/lib/nova-solid/content/content-book-1.web';
import Provider from '../../atom/provider';
import ProgressBar from '../../molecule/progress-bar';
import Link from '../../atom/link';
import style from './progression-item.css';

const ProgressionItem = (props, context) => {
  const {skin} = context;
  const {adaptive, completion, label, level, onClick = noop, stars, state, type} = props;
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
      <AdaptiveIcon color={white} />
    </div>
  ) : null;

  const handleCTAClick = e => {
    e.stopPropagation();
    e.preventDefault();
    onClick(e);
  };

  return (
    <div>
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
        <Link
          style={{
            color: primary
          }}
          onClick={handleCTAClick}
          data-progression-state={state}
        >
          <span className={style.cta}>
            {state} <ArrowRightIcon color={primary} />
          </span>
        </Link>
        <span className={style.level}>{level}</span>
      </div>
      <div className={style.separation} />
    </div>
  );
};

ProgressionItem.propTypes = {
  completion: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
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
