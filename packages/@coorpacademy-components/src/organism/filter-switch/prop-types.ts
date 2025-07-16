import PropTypes from 'prop-types';

const propTypes = {
  headerTitle: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired,
      theme: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired
    })
  )
};

export type FilterSwitchProps = {
  headerTitle: string;
  onClear: () => void;
  options: {
    title: string;
    value: boolean;
    onChange: (value: string) => void;
    theme: string;
    ariaLabel: string;
  }[];
};

export default propTypes;
