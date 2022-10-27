import {SkillCardProps} from '../../../molecule/skill-card/prop-types';

export type SkillProps = Omit<SkillCardProps, 'aria-label' | 'buttonLabel' | 'isCustom'>;

export type ItemProps = {
  item: SkillProps;
};
