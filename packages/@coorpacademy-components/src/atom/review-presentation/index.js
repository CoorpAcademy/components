import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidVoteRewardsVoteHeart as HeartIcon,
  NovaCompositionCoorpacademyInformationIcon as InformationIcon,
  NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon,
  NovaLineSelectionCursorsCursorArrowTarget as TargetIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const ICONS = {
  skills: TargetIcon,
  questions: QuestionIcon,
  lifes: HeartIcon,
  allright: CheckIcon
};

const getIcon = icon => {
  const Icon = get(icon, ICONS);
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
  const {'aria-label': ariaLabel, reviewTitle, reviewText, labelList} = props;

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
      <ul>
        {map.convert({cap: false})((label, key) => {
          return (
            <li key={key} className={style.reviewList}>
              <div className={style.reviewListItemWrapper} data-tip data-for="reviewListItem">
                <div className={style.reviewListText}>
                  {getIcon(key)} {label.text}
                </div>
                <ToolTip tooltipText={label.tooltipText} />
              </div>
            </li>
          );
        }, labelList)}
      </ul>
    </div>
  );
};

const levelItem = PropTypes.shape({
  text: PropTypes.string,
  tooltipText: PropTypes.string
});

ToolTip.propTypes = {
  tooltipText: PropTypes.string
};

ReviewPresentation.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  reviewTitle: PropTypes.string,
  reviewText: PropTypes.string,
  labelList: PropTypes.shape({
    skills: levelItem,
    questions: levelItem,
    lifes: levelItem,
    allright: levelItem
  })
};

export default ReviewPresentation;
