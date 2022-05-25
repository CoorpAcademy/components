import React from 'react';
import PropTypes from 'prop-types';
import ReviewPresentation from '../../../atom/review-presentation';
import ReviewSkills from '../../../organism/review-skills';
import style from './style.css';

const ReviewDashboardSkills = props => {
  const {'aria-label': ariaLabel, reviewPresentation, reviewSkills} = props;

  return (
    <div className={style.reviewDashboardContainer} aria-label={ariaLabel}>
      <div className={style.reviewPresentationContainer}>
        <ReviewPresentation {...reviewPresentation} />
      </div>
      <div className={style.reviewSkillsContainer}>
        <ReviewSkills {...reviewSkills} />
      </div>
    </div>
  );
};

ReviewDashboardSkills.propTypes = {
  'aria-label': PropTypes.string,
  reviewPresentation: PropTypes.shape(ReviewPresentation.propTypes),
  reviewSkills: PropTypes.shape(ReviewSkills.propTypes)
};
export default ReviewDashboardSkills;
