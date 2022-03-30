import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyInformationIcon as InformationIcon,
  NovaCompositionCoorpacademyEmptyStateHomeRevision as EmptyStateHomeRevision
} from '@coorpacademy/nova-icons';
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

const ReviewNoSkills = ({titleNoSkills, textNoSkills}) => {
  return (
    <div className={style.noSkillsContainer}>
      <div className={style.titleNoSkills}>{titleNoSkills}</div>
      <div className={style.textNoSkills}> {textNoSkills}</div>
      <EmptyStateHomeRevision className={style.imgNoSkills} />
    </div>
  );
};

const ReviewSkills = props => {
  const {'aria-label': ariaLabel, title, listSkills, titleNoSkills, textNoSkills} = props;

  return (
    <div className={style.containerReviewSkill} aria-label={ariaLabel}>
      <div className={style.title}>
        {title}
        <InformationIcon className={style.informationIcon} width={12} height={12} />
      </div>
      {listSkills.length > 0 ? (
        <ReviewListSkills listSkills={listSkills} />
      ) : (
        <ReviewNoSkills titleNoSkills={titleNoSkills} textNoSkills={textNoSkills} />
      )}
    </div>
  );
};

ReviewListSkills.propTypes = {
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCard.propTypes))
};

ReviewNoSkills.propTypes = {
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string
};

ReviewSkills.propTypes = {
  'aria-label': PropTypes.string,
  title: PropTypes.string.isRequired,
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCard.propTypes)).isRequired,
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string
};

export default ReviewSkills;
