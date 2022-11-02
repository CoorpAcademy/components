import PropTypes from 'prop-types';
import SkillCardPropsType from '../../../molecule/skill-card/prop-types';
import {NoSkillsProps} from '../../../organism/review-no-skills/prop-types';
import {ReviewSkills} from '../../../organism/review-skills/prop-types';

const propTypes = {
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  isLoadingAriaLabel: PropTypes.string,
  listSkills: PropTypes.arrayOf(PropTypes.shape(SkillCardPropsType)),
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string,
  iconSkillAriaLabel: PropTypes.string
};

export default propTypes;

export type ReviewSkillsProps = NoSkillsProps &
  ReviewSkills & {
    'aria-label': string;
    title: string;
    isLoading: boolean;
    isLoadingAriaLabel: string;
  };
