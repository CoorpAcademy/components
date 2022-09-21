import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string,
  current: PropTypes.bool,
  value: PropTypes.string
};

export default propTypes;

export type Props = {
  current: boolean;
  icon: 'no-answer' | 'right' | 'wrong';
  value: string;
};
