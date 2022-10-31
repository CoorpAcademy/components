import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import SkillCard from '../../molecule/skill-card/index.native';
import {SkillCardProps} from '../../molecule/skill-card/prop-types';
import {ItemProps} from './prop-types';

const style = StyleSheet.create({
  skills: {paddingBottom: 100}
});

const Item = ({
  item: {
    'aria-label': ariaLabel,
    skillTitle,
    skillAriaLabel,
    reviseLabel,
    reviseAriaLabel,
    onClick,
    buttonLabel,
    buttonAriaLabel,
    isCustom
  }
}: ItemProps) => (
  <SkillCard
    aria-label={ariaLabel}
    skillTitle={skillTitle}
    skillAriaLabel={skillAriaLabel}
    reviseLabel={reviseLabel}
    reviseAriaLabel={reviseAriaLabel}
    onClick={onClick}
    buttonLabel={buttonLabel}
    buttonAriaLabel={buttonAriaLabel}
    isCustom={isCustom}
  />
);

const ReviewListSkills = (props: {listSkills: Array<SkillCardProps>}) => {
  const {listSkills} = props;

  return <FlatList contentContainerStyle={style.skills} data={listSkills} renderItem={Item} />;
};

export default ReviewListSkills;
