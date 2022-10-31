import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import {NovaCompositionCoorpacademyInformationIcon as InformationIcon} from '@coorpacademy/nova-icons';
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
      <div className={style.title}>
        {title}
        <InformationIcon className={style.informationIcon} width={12} height={12} />
      </div>
      {isLoading ? (
        <div className={style.loaderContainer}>
          <Loader className={style.loader} theme="default" aria-label={isLoadingAriaLabel} />
        </div>
      ) : (
        <div>
          {!isEmpty(listSkills) ? (
            <ReviewListSkills listSkills={listSkills} />
          ) : (
            <ReviewNoSkills
              titleNoSkills={titleNoSkills}
              textNoSkills={textNoSkills}
              iconSkillAriaLabel={iconSkillAriaLabel}
            />
          )}
        </div>
      )}
    </div>
  );
};

ReviewSkills.propTypes = propTypes;

export default ReviewSkills;
