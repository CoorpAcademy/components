import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired,
      theme: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired
    })
  )
};

export type FilterSwitchProps = {
  title: string;
  onClear: () => void;
  options: {
    label: string;
    value: boolean;
    onChange: (value: string) => void;
    theme: string;
    ariaLabel: string;
  }[];
};

export default propTypes;
