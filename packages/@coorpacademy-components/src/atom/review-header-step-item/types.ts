import PropTypes from 'prop-types';

const propTypes = {
  current: PropTypes.bool,
  icon: PropTypes.oneOf(['no-answer', 'right', 'wrong']),
  value: PropTypes.string
};

export default propTypes;

export type Props = {
  current: boolean;
  icon: 'no-answer' | 'right' | 'wrong';
  value: string;
};

export type Fixture = {
  props: Props;
};
