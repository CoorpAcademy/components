import PropTypes from 'prop-types';

const propTypes = {
  'aria-label': PropTypes.string,
  skillTitle: PropTypes.string,
  skillAriaLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  reviseLabel: PropTypes.string,
  reviseAriaLabel: PropTypes.string,
  isCustom: PropTypes.bool,
  onClick: PropTypes.func
};

export default propTypes;

export type ItemProps = {
  item: SkillProps;
};

export type SkillCardProps = {
  'aria-label': string;
  skillTitle: string;
  skillAriaLabel: string;
  buttonLabel: string;
  buttonAriaLabel: string;
  reviseLabel: string;
  reviseAriaLabel: string;
  isCustom: boolean;
  onClick: () => void;
};

export type SkillProps = Omit<SkillCardProps, 'aria-label' | 'buttonLabel' | 'isCustom'>;
