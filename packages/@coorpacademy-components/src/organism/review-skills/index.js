import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import {
  NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision,
  NovaCompositionCoorpacademyInformationIcon as InformationIcon
} from '@coorpacademy/nova-icons';
import Loader from '../../atom/loader';
import SkillCard from '../../molecule/skill-card';
import style from './style.css';

const ReviewListSkills = ({listSkills}) => {
  return (
    <div className={style.listSkillsContainer}>
      {listSkills &&
        map.convert({cap: false})((skillCard, key) => {
          return (
            <div className={style.skillCardContainer} key={`step-${key}`}>
              <SkillCard {...skillCard} />
            </div>
          );
        }, listSkills)}
    </div>
  );
};

const ReviewNoSkills = ({titleNoSkills, textNoSkills, iconSkillAriaLabel}) => {
  return (
    <div className={style.noSkillsContainer}>
      <div className={style.titleNoSkills}>{titleNoSkills}</div>
      <div className={style.textNoSkills}> {textNoSkills}</div>
      <EmptyStateHomeRevision className={style.imgNoSkills} aria-label={iconSkillAriaLabel} />
    </div>
  );
};

const ReviewSkills = props => {
  const {
    'aria-label': ariaLabel,
    title,
    listSkills,
    titleNoSkills,
    textNoSkills,
    iconSkillAriaLabel,
    isLoading,
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

ReviewListSkills.propTypes = {
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCard.propTypes))
};

ReviewNoSkills.propTypes = {
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string,
  iconSkillAriaLabel: PropTypes.string
};

ReviewSkills.propTypes = {
  'aria-label': PropTypes.string,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isLoadingAriaLabel: PropTypes.string,
  ...ReviewListSkills.propTypes,
  ...ReviewNoSkills.propTypes
};

export default ReviewSkills;
