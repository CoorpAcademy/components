import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func,
  animated: PropTypes.bool,
  className: PropTypes.string
};

export type ChildProps = {
  child: React.ReactElement;
  onAnimationEnd: (name: string) => void;
  className: string;
  name: string;
};

export default propTypes;
