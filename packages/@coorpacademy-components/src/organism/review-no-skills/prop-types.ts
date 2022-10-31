import PropTypes from 'prop-types';

const propTypes = {
  titleNoSkills: PropTypes.string,
  textNoSkills: PropTypes.string,
  iconSkillAriaLabel: PropTypes.string
};

export default propTypes;

export type NoSkillsProps = {
  titleNoSkills?: string;
  textNoSkills?: string;
  iconSkillAriaLabel?: string;
};
