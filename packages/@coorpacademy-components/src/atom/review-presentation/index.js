import React from 'react';
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

const getIcon = icon => {
  const Icon = getOr(null, icon, ICONS);

  /* istanbul ignore next */
  if (!Icon) {
    return <div className={style.labelIcon} />;
  }
  return <Icon className={style.labelIcon} />;
};

const ToolTip = ({tooltipText}) => {
  return (
    <div className={style.tooltipContainer}>
      <div className={style.tooltipIconContainer}>
        <InformationIcon className={style.informationIcon} width={12} height={12} />
      </div>
      <div className={style.toolTip}>
        <div className={style.tooltipText}>{tooltipText}</div>
      </div>
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
              <div className={style.reviewListItemWrapper} data-tip data-for="reviewListItem">
                <div className={style.reviewListText}>
                  {getIcon(key)} {label.text}
                </div>
                <ToolTip tooltipText={label.tooltipText} />
              </div>
            </li>
          );
        }, labelsList)}
      </ul>
    </div>
  );
};

ToolTip.propTypes = {
  tooltipText: PropTypes.string
};

ReviewPresentation.propTypes = propTypes;

export default ReviewPresentation;
