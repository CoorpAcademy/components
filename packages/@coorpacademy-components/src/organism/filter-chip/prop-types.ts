import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  onClear: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
      selected: PropTypes.bool,
      icon: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

export type FilterChipProps = {
  title: string;
  onClear: () => void;
  options: {
    label: string;
    type: string;
    selected: boolean;
    icon: string;
    onClick: (type: string) => void;
  }[];
};

export default propTypes;
