import PropTypes from 'prop-types';
import {GestureResponderEvent} from 'react-native';

const propTypes = {
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

export type ReviewCorrectionPopinProps = {
  type: 'right' | 'wrong';
  resultLabel: string;
  information: {
    label: string;
    message: string;
  };
  next: {
    label: string;
    onClick: (event: GestureResponderEvent) => void;
    'data-name'?: string;
    'aria-label': string;
  };
  klf?: {
    label: string;
    tooltip: string;
  };
};

export default propTypes;
