import PropTypes from 'prop-types';

export interface Option {
  value: string;
  label: string;
  icon?: string | null;
}

export interface InputSelectProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  'aria-label'?: string;
  iconClosed?: string;
  selectedIcon?: string;
}

const optionPropTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export const propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact(optionPropTypes).isRequired).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  'aria-label': PropTypes.string,
  iconClosed: PropTypes.string,
  selectedIcon: PropTypes.string
};
