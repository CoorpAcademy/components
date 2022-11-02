import React from 'react';
import {NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision} from '@coorpacademy/nova-icons';
import style from './style.css';
import propTypes from './prop-types';

const ReviewNoSkills = ({titleNoSkills, textNoSkills, iconSkillAriaLabel}) => {
  return (
    <div className={style.noSkillsContainer}>
      <div className={style.titleNoSkills}>{titleNoSkills}</div>
      <div className={style.textNoSkills}> {textNoSkills}</div>
      <EmptyStateHomeRevision className={style.imgNoSkills} aria-label={iconSkillAriaLabel} />
    </div>
  );
};

ReviewNoSkills.propTypes = propTypes;

export default ReviewNoSkills;
