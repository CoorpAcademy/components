import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidVoteRewardsVoteHeart as HeartIcon,
  NovaCompositionCoorpacademyInformationIcon as InformationIcon,
  NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon,
  NovaLineSelectionCursorsCursorArrowTarget as TargetIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';
import propTypes from './prop-types';

const ICONS = {
  skills: TargetIcon,
  questions: QuestionIcon,
  lifes: HeartIcon,
  allright: CheckIcon
};

const ReviewIcon = ({icon}) => {
  const Icon = getOr(null, icon, ICONS);

  /* istanbul ignore next */
  if (!Icon) {
    return <div className={style.labelIcon} />;
  }
  return <Icon className={style.labelIcon} />;
};

const ToolTip = ({tooltipText, 'aria-label': moreDetailsAriaLabel, isVisible}) => {
  const customStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? 1 : 0
  };
  return (
    <div className={style.tooltipContainer}>
      <div className={style.tooltipIconContainer}>
        <InformationIcon
          className={style.informationIcon}
          width={12}
          height={12}
          aria-label={moreDetailsAriaLabel}
        />
      </div>
      {isVisible ? (
        <div
          className={style.toolTip}
          style={customStyle}
          data-testid="review-presentation-tooltip"
        >
          <p className={style.tooltipText}>{tooltipText}</p>
        </div>
      ) : null}
    </div>
  );
};

const ReviewListItemWrapper = ({iconKey, label, 'data-testid': dataTestId}) => {
  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);
  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'Enter') {
        setToolTipIsVisible(!toolTipIsVisible);
      } else if (event.key === 'Tab' || event.key === 'Escape') {
        setToolTipIsVisible(false);
      }
    },
    [setToolTipIsVisible, toolTipIsVisible]
  );
  const handleMouseOver = useCallback(() => setToolTipIsVisible(true), [setToolTipIsVisible]);

  const handleMouseLeave = useCallback(() => setToolTipIsVisible(false), [setToolTipIsVisible]);
  return (
    <div
      className={style.reviewListItemWrapper}
      data-tip
      data-for="reviewListItem"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      data-testid={dataTestId}
    >
      <div className={style.reviewListText}>
        <ReviewIcon icon={iconKey} /> {label.text}
      </div>
      <ToolTip
        tooltipText={label.tooltipText}
        aria-label={label.moreDetailsAriaLabel}
        isVisible={toolTipIsVisible}
      />
    </div>
  );
};

const ReviewPresentation = props => {
  const {'aria-label': ariaLabel, reviewTitle, reviewText, labelsList} = props;

  return (
    <div className={style.reviewWrapper} aria-label={ariaLabel}>
      <div
        className={style.reviewTitle}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: reviewTitle}}
      />
      <div
        className={style.reviewText}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: reviewText}}
      />
      <ul className={style.reviewListWrapper}>
        {map.convert({cap: false})((label, key) => {
          return (
            <li key={`step-${key}`} className={style.reviewList}>
              <ReviewListItemWrapper
                iconKey={key}
                label={label}
                tooltipText={label.tooltipText}
                aria-label={label.moreDetailsAriaLabel}
                data-testid={`review-list-item-wrapper-${key}`}
              />
            </li>
          );
        }, labelsList)}
      </ul>
    </div>
  );
};

ToolTip.propTypes = {
  tooltipText: PropTypes.string,
  'aria-label': PropTypes.string,
  isVisible: PropTypes.bool
};

ReviewIcon.propTypes = {
  icon: PropTypes.string
};

ReviewListItemWrapper.propTypes = {
  ...ToolTip.propTypes,
  iconKey: PropTypes.string,
  label: PropTypes.shape({
    tooltipText: PropTypes.string,
    moreDetailsAriaLabel: PropTypes.string
  }),
  'data-testid': PropTypes.string
};

ReviewPresentation.propTypes = propTypes;

export default ReviewPresentation;
