import PropTypes from 'prop-types';

const propTypes = {
  titleNoSkills: PropTypes.string.isRequired,
  textNoSkills: PropTypes.string.isRequired,
  iconSkillAriaLabel: PropTypes.string.isRequired
};

export default propTypes;

export type NoSkillsProps = {
  titleNoSkills: string;
  textNoSkills: string;
  iconSkillAriaLabel: string;
};
