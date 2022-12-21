import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, noop} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowRight as ArrowRightIcon,
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon,
  NovaCompositionCoorpacademyBolt as BoltIcon,
  NovaSolidSchoolScienceGraduationHat as CertificationIcon,
  NovaCompositionCoorpacademyAdaptive as AdaptiveIcon,
  NovaSolidContentContentBook1 as LearnerIcon,
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaCompositionCoorpacademyArticle as ArticleIcon,
  NovaCompositionCoorpacademyVideo as VideoIcon,
  NovaCompositionCoorpacademyMicrophone as PodcastIcon,
  NovaCompositionCoorpacademyRevision as RevisionIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import ProgressBar from '../../molecule/progress-bar';
import Link from '../../atom/link';
import style from './progression-item.css';

const ICONS = {
  chapter: TimerIcon,
  course: LearnerIcon,
  battle: BoltIcon,
  certification: CertificationIcon,
  article: ArticleIcon,
  scorm: ScormIcon,
  video: VideoIcon,
  podcast: PodcastIcon,
  review: RevisionIcon
};

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
    maxStars,
    state,
    type,
    steps = 0
  } = props;

  const dark = get('common.dark', skin);
  const primary = get('common.primary', skin);
  const white = get('common.white', skin);
  const IconType = ICONS[type];

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

  const handleCTAClick = useMemo(
    () => e => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick(e);
    },
    [onClick]
  );

  const link = disabled ? null : (
    <Link style={{color: primary}} onClick={handleCTAClick} data-progression-state={state}>
      <span className={style.cta}>
        {state} <ArrowRightIcon color={primary} height={12} width={20} />
      </span>
    </Link>
  );

  return (
    <div className={classnames(style.progressionItem, disabled ? style.disabled : '')}>
      <div className={style.wrapperTitle}>
        <IconType className={style.iconType} color={dark} />
        <div data-name="activityLabel" className={style.label} title={label}>
          <div
            className={style.innerHTML}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: label}}
          />
          {adaptiveIcon}
        </div>

        <div
          data-name="activityStars"
          className={style.stars}
          style={{
            color: primary
          }}
        >
          {stars}
          {maxStars ? ' /' : null}
          {maxStars ? <span className={style.smallStars}>{maxStars}</span> : null}{' '}
          <StarIcon className={style.iconStar} color={primary} />
        </div>
      </div>
      <ProgressBar
        className={style.completion}
        value={completion * 100}
        max={100}
        steps={steps}
        style={{backgroundColor: primary, borderRadius: 0}}
      />
      <div className={style.state}>
        {link}
        <span className={style.level}>{level}</span>
      </div>
    </div>
  );
};

ProgressionItem.propTypes = {
  completion: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
  steps: PropTypes.number,
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
