import PropTypes from 'prop-types';

const propTypes = {
  current: PropTypes.bool,
  icon: PropTypes.oneOf(['no-answer', 'right', 'wrong']),
  value: PropTypes.string
};

export const contextTypes = {
  translate: PropTypes.func
};

export default propTypes;

export type HeaderStepItemProps = {
  current: boolean;
  icon: 'no-answer' | 'right' | 'wrong';
  value: string;
};

export type HeaderStepItemContextTypes = {
  translate: (key: string, data?: Record<string, string>) => string;
};
export type Fixture = {
  props: HeaderStepItemProps;
};
