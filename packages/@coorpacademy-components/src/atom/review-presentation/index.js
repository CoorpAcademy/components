import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidVoteRewardsVoteHeart as HeartIcon,
  NovaCompositionCoorpacademyInformationIcon as InformationIcon,
  NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon,
  NovaCompositionCoorpacademyTarget as TargetIcon
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

const ReviewPresentation = props => {
  const {'aria-label': ariaLabel, reviewTitle, reviewText, labelList} = props;

  return (
    <div className={style.reviewWrapper} aria-label={ariaLabel}>
      <div className={style.reviewTitle}>{reviewTitle}</div>
      <div className={style.reviewText}>{reviewText}</div>
      {map.convert({cap: false})((el, key) => {
        return (
          <>
            <div
              key={key}
              className={style.reviewListItemWrapper}
              data-tip
              data-for="reviewListItem"
            >
              <div className={style.reviewListText}>
                {getIcon(key)} {el.text}
              </div>
              <InformationIcon className={style.informationIcon} width={12} height={12} />
            </div>
            <ReactTooltip
              id="reviewListItem"
              place="top"
              effect="solid"
              className={style.reviewTooltip}
            >
              {el.tooltipText}
            </ReactTooltip>
          </>
        );
      }, labelList)}
    </div>
  );
};

ReviewPresentation.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  reviewTitle: PropTypes.string,
  reviewText: PropTypes.string,
  labelList: PropTypes.shape({
    skills: {text: PropTypes.string, tooltipText: PropTypes.string},
    questions: {text: PropTypes.string, tooltipText: PropTypes.string},
    lifes: {text: PropTypes.string, tooltipText: PropTypes.string},
    allright: {text: PropTypes.string, tooltipText: PropTypes.string}
  })
};

export default ReviewPresentation;
