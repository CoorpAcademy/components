import classnames from 'classnames';
import React, {useCallback, useMemo, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {get, noop} from 'lodash/fp';
import {v5 as uuidV5} from 'uuid';
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
import Provider, {GetSkinFromContext, GetTranslateFromContext} from '../../atom/provider';
import ToolTip, {toggleStateOnKeyPress} from '../../atom/tooltip';
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

const ToolTipContent = ({
  preMessage,
  linkMessage,
  endMessage,
  onClick,
  color,
  handleContentMouseOver
}) => (
  <p
    className={style.toolTipContent}
    onMouseOver={handleContentMouseOver}
    data-testid="react-tooltip-content"
  >
    <span>{preMessage}</span>
    <Link
      onClick={onClick}
      style={{
        color
      }}
    >
      {linkMessage}
    </Link>
    <span>{endMessage}</span>
  </p>
);

ToolTipContent.propTypes = {
  preMessage: PropTypes.string,
  linkMessage: PropTypes.string,
  endMessage: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  handleContentMouseOver: PropTypes.func
};

const EngineStars = (props, legacyContext) => {
  const skin = GetSkinFromContext(legacyContext);
  const translate = GetTranslateFromContext(legacyContext);
  const {
    toolTip = null,
    disabled,
    type,
    stars,
    title,
    active = false,
    onClick = noop,
    className
  } = props;

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    onClick(e);
  };
  const dark = get('common.dark', skin);
  const light = get('common.light', skin);
  const IconType = ICONS[type];

  const primary = get('common.primary', skin);

  // to replace by useId when React17 is bumped to React18
  const [engineStarsContentId] = useState(
    disabled ? uuidV5('engine-stars', uuidV5.URL) : undefined
  );
  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);
  const [mouseLeaveTimer, setMouseLeaveTimer] = useState(undefined);
  const buttonRef = useRef(null);

  const handleKeyPress = useCallback(
    event => {
      toggleStateOnKeyPress(toolTipIsVisible, setToolTipIsVisible, buttonRef)(event);
    },
    [toolTipIsVisible]
  );

  const handleMouseOver = useCallback(() => {
    mouseLeaveTimer && clearTimeout(mouseLeaveTimer);
    setToolTipIsVisible(true);
  }, [mouseLeaveTimer]);

  const handleContentMouseOver = useCallback(() => {
    mouseLeaveTimer && /* istanbul ignore next */ clearTimeout(mouseLeaveTimer);
  }, [mouseLeaveTimer]);

  const handleMouseLeave = useCallback(() => {
    setMouseLeaveTimer(setTimeout(() => setToolTipIsVisible(false), 500));
  }, []);

  const toolTipContentProps = useMemo(
    () =>
      toolTip
        ? {
            preMessage: toolTip.preMessage,
            linkMessage: toolTip.linkMessage,
            endMessage: toolTip.endMessage,
            color: primary,
            onClick: toolTip.onClick
          }
        : null,
    [primary, toolTip]
  );

  const toolTipProps = {
    closeToolTipInformationTextAriaLabel: translate(
      'Press the escape key to close the information text'
    )
  };

  const TooltipContent = useCallback(
    _props => (
      <ToolTipContent
        {...{...toolTipContentProps, ..._props}}
        handleContentMouseOver={handleContentMouseOver}
      />
    ),
    [handleContentMouseOver, toolTipContentProps]
  );

  return (
    <button
      ref={buttonRef}
      data-tip={disabled}
      data-engine={type}
      data-testid={`engine-stars-${type}`}
      // eslint-disable-next-line no-nested-ternary
      onClick={disabled ? handleKeyPress : active ? noop : handleClick}
      data-for={engineStarsContentId}
      className={classnames([
        style.engineStars,
        disabled ? style.disabled : '',
        active ? style.active : '',
        onClick !== noop ? style.clickable : null,
        className
      ])}
      type="button"
      data-tooltip-place="left"
      onKeyDown={handleKeyPress}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      {disabled ? (
        <ToolTip
          {...toolTipProps}
          anchorId={engineStarsContentId}
          toolTipIsVisible={toolTipIsVisible}
          TooltipContent={TooltipContent}
          mouseLeaveTimer={mouseLeaveTimer}
        />
      ) : null}
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
          <StarIcon
            className={style.iconStar}
            style={{
              color: active ? primary : dark
            }}
          />
        </span>
      </div>
      <div className={style.scoreTitle}>{title}</div>
    </button>
  );
};

EngineStars.propTypes = {
  type: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  toolTip: PropTypes.shape({
    preMessage: PropTypes.string,
    linkMessage: PropTypes.string,
    endMessage: PropTypes.string,
    onClick: PropTypes.func
  })
};

EngineStars.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

export default EngineStars;
