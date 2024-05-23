import React from 'react';
import {NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision} from '@coorpacademy/nova-icons';
import style from './style.css';
import propTypes from './prop-types';

const ReviewNoSkills = ({
  titleNoSkills,
  textNoSkills,
  iconSkillAriaLabel,
  imagePosition = 'bottom'
}) => {
  return (
    <div className={style.noSkillsContainer}>
      {imagePosition === 'top' ? (
        <EmptyStateHomeRevision
          className={style.imgNoSkillsReverse}
          aria-label={iconSkillAriaLabel}
        />
      ) : null}
      <div className={style.titleNoSkills}>{titleNoSkills}</div>
      <div className={style.textNoSkills}> {textNoSkills}</div>
      {imagePosition === 'bottom' ? (
        <EmptyStateHomeRevision className={style.imgNoSkills} aria-label={iconSkillAriaLabel} />
      ) : null}
    </div>
  );
};

ReviewNoSkills.propTypes = propTypes;

export default ReviewNoSkills;
