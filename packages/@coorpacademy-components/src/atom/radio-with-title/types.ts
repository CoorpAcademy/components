import PropTypes from 'prop-types';
import Title from '../title';

export type RadioWithTitleProps = {
  title: PropTypes.InferProps<typeof Title.propTypes>;
  name: string;
  checked: boolean;
  onChange: () => void;
  'aria-label': string;
  'data-name': string;
};
