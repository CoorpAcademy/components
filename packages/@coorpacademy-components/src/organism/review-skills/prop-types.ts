import PropTypes from 'prop-types';
import SkillCardPropsType, {SkillCardProps} from '../../molecule/skill-card/prop-types';

const propTypes = {
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCardPropsType))
};

export default propTypes;

export type ReviewSkills = {
  listSkills: SkillCardProps[];
};
