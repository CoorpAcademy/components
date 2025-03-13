import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};

export type CmCheckboxWithTextProps = {
  title: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  'aria-label'?: string;
  'data-name'?: string;
};

export default propTypes;
