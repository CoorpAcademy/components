import React from 'react';
import map from 'lodash/fp/map';
import SkillCard from '../../molecule/skill-card';
import style from './style.css';
import propTypes from './prop-types';

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

ReviewListSkills.propTypes = propTypes;

export default ReviewListSkills;
