import PropTypes from 'prop-types';
import SkillCardPropsType, {SkillCardProps} from '../../molecule/skill-card/prop-types';

export const ListSkillsPropTypes = {
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCardPropsType))
};

export type ItemProps = {
  item: SkillCardProps;
};
