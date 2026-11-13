import PropTypes from 'prop-types';

export const menuPropTypes = PropTypes.shape({
  ariaLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({label: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired})
  ).isRequired
});

export const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  menu: menuPropTypes.isRequired
};

export type SplitButtonProps = {
  type: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
  disabled?: boolean;
  iconName?: string;
  iconColor?: string;
  menu: {ariaLabel: string; options: Array<{label: string; onClick: () => void}>};
};
