import PropTypes from 'prop-types';
import Title from '../title';

export const propTypes = {
  title: PropTypes.shape(Title.propTypes),
  name: PropTypes.string,
  checked: PropTypes.bool,
  onchange: PropTypes.func,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};

export type RadioWithTitleProps = {
  title: PropTypes.InferProps<typeof Title.propTypes>;
  name: string;
  checked: boolean;
  onChange: () => void;
  'aria-label': string;
  'data-name': string;
};
