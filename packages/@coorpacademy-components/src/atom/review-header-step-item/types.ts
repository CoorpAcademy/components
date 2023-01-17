import PropTypes from 'prop-types';
import Provider from '../provider';

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

export type HeaderStepItemContextTypes = {translate: typeof Provider.childContextTypes.translate};

export type Fixture = {
  props: HeaderStepItemProps;
};
