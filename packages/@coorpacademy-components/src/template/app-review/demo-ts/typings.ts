import PropTypes from 'prop-types';

export const propTypes = {
  plop: PropTypes.string,
  plip: PropTypes.number,
  onClick: PropTypes.func
};

export type Props = PropTypes.InferProps<typeof propTypes>;
