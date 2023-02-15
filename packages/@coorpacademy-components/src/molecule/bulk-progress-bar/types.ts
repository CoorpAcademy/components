import PropTypes from 'prop-types';

export const propTypes = {
  'data-name': PropTypes.string,
  status: PropTypes.oneOf(['success', 'inProgress', 'fail']).isRequired,
  progress: PropTypes.number.isRequired
};

export type Status = 'inProgress' | 'fail' | 'success';

export type Props = PropTypes.InferProps<typeof propTypes>;
