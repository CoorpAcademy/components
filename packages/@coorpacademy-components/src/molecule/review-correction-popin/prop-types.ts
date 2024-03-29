import PropTypes from 'prop-types';

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

export type ReviewCorrectionPopinKLFProps = {
  label: string;
  tooltip: string;
};

export type ReviewCorrectionPopinProps = {
  klf?: ReviewCorrectionPopinKLFProps;
  information: {
    label: string;
    message: string;
  };
  next: {
    label: string;
    onClick: () => void;
    'data-name'?: string;
    'aria-label': string;
  };
  resultLabel: string;
  type: 'right' | 'wrong';
};

export type Fixture = {props: ReviewCorrectionPopinProps};

export default propTypes;
