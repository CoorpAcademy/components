import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidVoteRewardsVoteHeart as HeartIcon,
  NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon,
  NovaLineSelectionCursorsCursorArrowTarget as TargetIcon
} from '@coorpacademy/nova-icons';
import ToolTip from '../tooltip';
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

const ReviewListItemWrapper = ({iconKey, label}) => {
  return (
    <div className={style.reviewListItemWrapper} data-tip data-for="reviewListItem" tabIndex={0}>
      <div className={style.reviewListText}>
        <ReviewIcon icon={iconKey} /> {label.text}
      </div>
      <ToolTip
        TooltipContent={label.tooltipText}
        closeToolTipInformationTextAriaLabel={label.closeToolTipInformationTextAriaLabel}
        data-testid={`review-list-item-tooltip-button-${iconKey}`}
        aria-label={label.moreDetailsAriaLabel}
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
              />
            </li>
          );
        }, labelsList)}
      </ul>
    </div>
  );
};

ReviewIcon.propTypes = {
  icon: PropTypes.string
};

ReviewListItemWrapper.propTypes = {
  iconKey: PropTypes.string,
  label: PropTypes.shape({
    tooltipText: ToolTip.propTypes.tooltipText,
    moreDetailsAriaLabel: ToolTip.propTypes['aria-label'],
    closeToolTipInformationTextAriaLabel: ToolTip.propTypes.closeToolTipInformationTextAriaLabel,
    text: PropTypes.string
  })
};

ReviewPresentation.propTypes = propTypes;

export default ReviewPresentation;
