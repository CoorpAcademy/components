import classnames from 'classnames';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
import TimerIcon from '@coorpacademy/nova-icons/composition/coorpacademy/timer';
import BoltIcon from '@coorpacademy/nova-icons/composition/coorpacademy/bolt';
import CertificationIcon from '@coorpacademy/nova-icons/solid/school-and-science/graduation-hat';
import LearnerIcon from '@coorpacademy/nova-icons/solid/content/content-book-1';
import BonusIcon from '@coorpacademy/nova-icons/solid/vote-and-rewards/rewards-badge-1';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import style from './engine-stars.css';

const ICONS = {
  microlearning: TimerIcon,
  learner: LearnerIcon,
  battle: BoltIcon,
  certifications: CertificationIcon,
  bonus: BonusIcon
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

const EngineStars = (props, context) => {
  const {skin} = context;
  const {disabled, type, stars, title, toolTip = null} = props;
  const dark = get('common.dark', skin);
  const light = get('common.light', skin);
  const IconType = ICONS[type];

  return (
    <div
      data-tip={disabled}
      data-for={disabled && type}
      className={classnames([style.engineStars, disabled ? style.disabled : ''])}
    >
      <ToolTip toolTip={toolTip} id={type} />

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
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  toolTip: PropTypes.shape({
    preMessage: PropTypes.string,
    linkMessage: PropTypes.string,
    postMessage: PropTypes.string,
    onClick: PropTypes.func
  })
};

EngineStars.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default EngineStars;
