import PropTypes from 'prop-types';
import SkillCardPropTypes from '../../molecule/skill-card/prop-types';

export const ListSkillsPropTypes = {
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCardPropTypes))
};

export const NoSkillsPropTypes = {
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string,
  iconSkillAriaLabel: PropTypes.string
};

export default {
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  isLoadingAriaLabel: PropTypes.string,
  ...ListSkillsPropTypes,
  ...NoSkillsPropTypes
};
