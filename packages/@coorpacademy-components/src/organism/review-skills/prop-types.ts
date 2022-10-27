import PropTypes from 'prop-types';
import SkillCardPropsType, {SkillCardProps} from '../../molecule/skill-card/prop-types';

export const ListSkillsPropTypes = {
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCardPropsType))
};

export const NoSkillsPropTypes = {
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string,
  iconSkillAriaLabel: PropTypes.string
};

const propTypes = {
  'aria-label': PropTypes.string,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isLoadingAriaLabel: PropTypes.string,
  listSkills: ListSkillsPropTypes,
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string,
  iconSkillAriaLabel: PropTypes.string
};

export default propTypes;

export type NoSkillsProps = {
  titleNoSkills: string;
  textNoSkills: string;
  iconSkillAriaLabel: string;
};

export type ReviewSkillsProps = NoSkillsProps & {
  'aria-label': string;
  title: string;
  isLoading: boolean;
  isLoadingAriaLabel: string;
  listSkills: SkillCardProps[];
  titleNoSkills: string;
  textNoSkills: string;
  iconSkillAriaLabel: string;
};