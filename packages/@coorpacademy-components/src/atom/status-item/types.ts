import PropTypes from 'prop-types';

const propTypes = {
  current: PropTypes.bool,
  icon: PropTypes.oneOf(['no-answer', 'right', 'wrong', 'valid', 'invalid', 'errors-number']),
  value: PropTypes.string
};

export default propTypes;

export type StatusItemProps = {
  current?: boolean;
  icon: 'no-answer' | 'right' | 'wrong' | 'valid' | 'invalid' | 'errors-number';
  value?: string;
};

export type Fixture = {
  props: StatusItemProps;
};
