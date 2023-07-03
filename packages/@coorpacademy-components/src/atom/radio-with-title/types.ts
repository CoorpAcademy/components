import PropTypes from 'prop-types';
import Title from '../title';

export const propTypes = {
  title: PropTypes.shape(Title.propTypes).isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};

export type RadioWithTitleProps = {
  title: {
    title: string;
    subtitle: string;
    type: string;
    'data-name': string;
    subtitleSize: string;
  };
  name?: string;
  checked: boolean;
  onChange?: () => void;
  'aria-label': string;
  'data-name'?: string;
};
