import classnames from 'classnames';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import {get, noop} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon,
  NovaCompositionCoorpacademyBolt as BoltIcon,
  NovaSolidSchoolScienceGraduationHat as CertificationIcon,
  NovaSolidContentContentBook1 as LearnerIcon,
  NovaSolidVoteRewardsRewardsBadge1 as BonusIcon,
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaCompositionCoorpacademyArticle as ArticleIcon,
  NovaCompositionCoorpacademyVideo as VideoIcon,
  NovaCompositionCoorpacademyMicrophone as PodcastIcon,
  NovaCompositionCoorpacademyRevision as RevisionIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import style from './engine-stars.css';

const ICONS = {
  microlearning: TimerIcon,
  learner: LearnerIcon,
  battle: BoltIcon,
  certifications: CertificationIcon,
  bonus: BonusIcon,
  article: ArticleIcon,
  scorm: ScormIcon,
  video: VideoIcon,
  podcast: PodcastIcon,
  review: RevisionIcon
};

const ToolTip = ({toolTip, id}, context) => {
  if (!toolTip) {
    return null;
  }

  const {skin} = context;
  const {preMessage, endMessage, linkMessage, onClick} = toolTip;
  const primary = get('common.primary', skin);

  const handleClick = onClick;

  return (
    <ReactTooltip
      id={id}
      className={style.toolTip}
      data-event-off="click"
      place="left"
      effect="solid"
      delayHide={500}
    >
      <p className={style.toolTipContent}>
        <span>{`${preMessage}`}</span>
        <Link
          onClick={handleClick}
          style={{
            color: primary
          }}
        >
          {`${linkMessage}`}
        </Link>
        <span>{`${endMessage}`}</span>
      </p>
    </ReactTooltip>
  );
};

ToolTip.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ToolTip.propTypes = {
  toolTip: PropTypes.shape({
    preMessage: PropTypes.string,
    linkMessage: PropTypes.string,
    endMessage: PropTypes.string,
    onClick: PropTypes.func
  }),
  id: PropTypes.string.isRequired
};

class EngineStars extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    toolTip: PropTypes.shape({
      preMessage: PropTypes.string,
      linkMessage: PropTypes.string,
      endMessage: PropTypes.string,
      onClick: PropTypes.func
    })
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const {onClick} = this.props;
    onClick && onClick(e);
  };

  render() {
    const {skin} = this.context;
    const {
      disabled,
      type,
      stars,
      title,
      active = false,
      onClick = noop,
      toolTip = null
    } = this.props;
    const dark = get('common.dark', skin);
    const light = get('common.light', skin);
    const primary = get('common.primary', skin);
    const IconType = ICONS[type];

    return (
      <div
        data-tip={disabled}
        data-engine={type}
        onClick={disabled || active ? noop : this.handleClick}
        data-for={disabled && type}
        className={classnames([
          style.engineStars,
          disabled ? style.disabled : '',
          active ? style.active : '',
          onClick !== noop ? style.clickable : null
        ])}
      >
        <ToolTip toolTip={toolTip} id={type} />

        <span
          className={style.engineIcon}
          style={{
            backgroundColor: onClick === noop ? light : primary
          }}
        >
          <IconType className={style.iconHeader} width="30" />
        </span>
        <div
          className={style.score}
          style={{
            color: active ? primary : dark
          }}
        >
          <p data-name="star-counter">{stars}</p>
          <span>
            <StarIcon className={style.iconStar} color={active ? primary : dark} />
          </span>
        </div>
        <div className={style.scoreTitle}>{title}</div>
      </div>
    );
  }
}

export default EngineStars;
