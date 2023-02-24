import PropTypes from 'prop-types';

export const buttonPropTypes = {
  'data-name': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'dangerous'])
};

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonPropTypes)).isRequired,
  'data-name': PropTypes.string
};

export default propTypes;

export type ButtonProps = {
  'data-name'?: string;
  disabled?: boolean;
  label: string;
  onClick: () => void;
  type?: 'default' | 'dangerous';
};

export type ButtonMenuProps = {
  buttons: ButtonProps[];
  'data-name'?: string;
  'aria-label'?: string;
};

export type ButtonMenuPropsFixture = {props: ButtonMenuProps};
