import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import Loader from '../../../atom/loader';
import ReviewListSkills from '../../../organism/review-skills';
import ReviewNoSkills from '../../../organism/review-no-skills';
import style from './style.css';
import propTypes from './prop-types';

const ReviewSkills = props => {
  const {
    'aria-label': ariaLabel,
    title,
    listSkills,
    titleNoSkills,
    textNoSkills,
    iconSkillAriaLabel,
    isLoading = false,
    isLoadingAriaLabel
  } = props;

  return (
    <div className={style.containerReviewSkill} aria-label={ariaLabel}>
      <div className={style.title}>{title}</div>
      {isLoading ? (
        <div className={style.loaderContainer}>
          <Loader className={style.loader} theme="default" aria-label={isLoadingAriaLabel} />
        </div>
      ) : (
        <div>
          {isEmpty(listSkills) ? (
            <ReviewNoSkills
              titleNoSkills={titleNoSkills}
              textNoSkills={textNoSkills}
              iconSkillAriaLabel={iconSkillAriaLabel}
            />
          ) : (
            <ReviewListSkills listSkills={listSkills} />
          )}
        </div>
      )}
    </div>
  );
};

ReviewSkills.propTypes = propTypes;

export default ReviewSkills;
