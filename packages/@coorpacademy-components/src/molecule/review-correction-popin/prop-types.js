import PropTypes from 'prop-types';

export default {
  type: PropTypes.oneOf(['right', 'wrong']),
  resultLabel: PropTypes.string,
  information: PropTypes.shape({
    label: PropTypes.string,
    message: PropTypes.string
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    'data-name': PropTypes.string,
    'aria-label': PropTypes.string
  }),
  klf: PropTypes.shape({
    label: PropTypes.string,
    tooltip: PropTypes.string
  })
};
